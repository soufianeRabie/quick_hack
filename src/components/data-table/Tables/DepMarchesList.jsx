import { DataTable } from "../DataTable.jsx";
import { useEffect, useState } from "react";
import { DataTableColumnHeader } from "../DataTableColumnHeader.jsx";
import { useGlobalContext } from "@/context/GlobalState.jsx";
import { DepMarcheActions } from "@/components/data-table/Tables/TablesActions/DepMarcheActions.jsx";
import AddDepMarche from "@/components/Admin/DepMarche/AddDepMarche.jsx";
import { Button } from "@/components/ui/button.jsx";
import * as XLSX from 'xlsx';

export default function DepMarcheList() {
    const { state, dispatch } = useGlobalContext();
    const [data, setData] = useState([]);
    const [importFile, setImportFile] = useState(null);

    const DepMarcheColumns = [
        { accessorKey: "id", header: ({ column }) => <DataTableColumnHeader column={column} title="ID" /> },
        { accessorKey: "expense_type", header: ({ column }) => <DataTableColumnHeader column={column} title="Expense Type" /> },
        { accessorKey: "reference", header: ({ column }) => <DataTableColumnHeader column={column} title="Reference" /> },
        { accessorKey: "amount", header: ({ column }) => <DataTableColumnHeader column={column} title="Amount" /> },
        { accessorKey: "expense_date", header: ({ column }) => <DataTableColumnHeader column={column} title="Expense Date" /> },
        { accessorKey: "start_date", header: ({ column }) => <DataTableColumnHeader column={column} title="Start Date" /> },
        { accessorKey: "end_date", header: ({ column }) => <DataTableColumnHeader column={column} title="End Date" /> },
        {
            id: "actions",
            cell: ({ row }) => {
                const id = row?.original?.id;
                return <DepMarcheActions depMarcheId={id} />;
            }
        },
    ];

    useEffect(() => {
        if (state.dep_marche) {
            setData(state.dep_marche);
        } else {
            setData([]);
        }
    }, [state?.dep_marche]);

    const handleExportData = () => {
        const worksheetData = [
            ['ID', 'Expense Type', 'Reference', 'Amount', 'Expense Date', 'Start Date', 'End Date', 'Ligne Budgetaire ID', 'Payment Method', 'Approval Date', 'Status', 'Details'],
            ...data.map(item => [
                item.id,
                item.expense_type,
                item.reference,
                item.amount,
                item.expense_date,
                item.start_date,
                item.end_date,
                item.ligne_budgetaire_id || '',  // Default empty string if the field is missing
                item.payment_method || '',
                item.approval_date || '',
                item.status || 'pending',  // Default to 'pending' if no status
                item.details || ''
            ])
        ];

        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(worksheetData);
        XLSX.utils.book_append_sheet(wb, ws, 'DepMarche Data');
        XLSX.writeFile(wb, 'DepMarche_Data.xlsx');
    };

    const handleExportTemplate = () => {
        const columns = ['ID', 'Expense Type', 'Reference', 'Amount', 'Expense Date', 'Start Date', 'End Date', 'Ligne Budgetaire ID', 'Payment Method', 'Approval Date', 'Status', 'Details'];
        const worksheetData = [columns];

        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(worksheetData);
        XLSX.utils.book_append_sheet(wb, ws, 'DepMarche Template');
        XLSX.writeFile(wb, 'DepMarche_Empty_Template.xlsx');
    };

    const handleImportData = (file) => {
        const reader = new FileReader();
        reader.onload = async (e) => {
            const data = e.target.result;
            const wb = XLSX.read(data, { type: 'binary' });
            const ws = wb.Sheets[wb.SheetNames[0]];
            const rows = XLSX.utils.sheet_to_json(ws);

            try {
                const response = await fetch('/api/dep-marche/import', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ data: rows }),
                });

                const result = await response.json();
                if (response.ok) {
                    alert('Data imported successfully');
                } else {
                    alert('Error importing data');
                }
            } catch (error) {
                alert('Error importing data: ' + error.message);
            }
        };
        reader.readAsBinaryString(file);
    };

    return (
        <>
            {/* Buttons for both exports */}
            <Button onClick={handleExportTemplate}>Export Empty Template</Button>
            <Button onClick={handleExportData}>Export Data</Button>

            {/* Import File Button */}
            <input
                type="file"
                accept=".xlsx, .xls"
                onChange={(e) => setImportFile(e.target.files[0])}
            />
            {importFile && (
                <Button onClick={() => handleImportData(importFile)}>Import Data</Button>
            )}

            {/* Data Table */}
            <DataTable
                columns={DepMarcheColumns}
                data={data}
                name={"DepMarche"}
                addAction={(setOpen) => <AddDepMarche setOpen={setOpen} />}
                filterBy={"reference"}
                messageFilter={"Filter by reference..."}
            />
        </>
    );
}
