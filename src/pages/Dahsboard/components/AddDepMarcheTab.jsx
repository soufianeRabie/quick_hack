import { useState } from "react";
import * as XLSX from 'xlsx';
import { toast } from "sonner";
import { ActionsApi } from "@/Services/Actions/ActionsApi.js";

function AddDepMarcheTab() {
    const [excelFile, setExcelFile] = useState(null);
    const [typeError, setTypeError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [excelData, setExcelData] = useState(null);

    // OnChange event for file selection
    const handleFile = (e) => {
        let fileTypes = [
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'text/csv'
        ];
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (fileTypes.includes(selectedFile.type)) {
                setTypeError(null);
                let reader = new FileReader();
                reader.readAsArrayBuffer(selectedFile);
                reader.onload = (e) => {
                    setExcelFile(e.target.result);
                };
            } else {
                setTypeError('Please select only excel file types');
                setExcelFile(null);
            }
        } else {
            console.log('Please select your file');
        }
    };

    // Submit event to process the file
    const handleFileSubmit = (e) => {
        e.preventDefault();
        if (excelFile !== null) {
            const workbook = XLSX.read(excelFile, { type: 'buffer' });
            const worksheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[worksheetName];
            const data = XLSX.utils.sheet_to_json(worksheet);
            setExcelData(data);
        }
    };

    // Function to add the DepMarche modules
    const handleAddDepMarche = async () => {
        setIsLoading(true);

            const newData = excelData.map(dt => {
                return {
                    expense_type: dt?.['Expense Type'] !== undefined ? dt['Expense Type'] : null, // Set null if undefined
                    reference: dt?.['Reference'] !== undefined ? dt['Reference'] : null,             // Set null if undefined
                    amount: dt?.['Amount'] !== undefined ? parseFloat(dt['Amount']) : null,           // Set null if undefined
                    expense_date: dt?.['Expense Date'] !== undefined ? dt['Expense Date'] : null,     // Set null if undefined
                    start_date: dt?.['Start Date'] !== undefined ? dt['Start Date'] : null,           // Set null if undefined
                    end_date: dt?.['End Date'] !== undefined ? dt['End Date'] : null,                 // Set null if undefined
                    ligne_budgetaire_id: dt?.['Ligne Budgetaire ID'] !== undefined ? dt['Ligne Budgetaire ID'] : null, // Set null if undefined
                    payment_method: dt?.['Payment Method'] !== undefined ? dt['Payment Method'] : null, // Set null if undefined
                    approval_date: dt?.['Approval Date'] !== undefined ? dt['Approval Date'] : null,   // Set null if undefined
                    status: dt?.['Status'] !== undefined ? dt['Status'] : 'pending',                   // Default to 'pending' if undefined
                    details: dt?.['Details'] !== undefined ? dt['Details'] : null,                     // Set null if undefined
                };
            });


        const addDepMarcheLoader = toast.loading("Adding DepMarche In Progress. Please wait until the operation completes", { position: 'top-center' });

        try {
            const response = await ActionsApi.addDepMarche({ dep_marches: newData });
            if (response.status === 200 && response.data.dep_marches) {
                toast.dismiss(addDepMarcheLoader);
                toast.success('Done', { description: "The DepMarche were added successfully", position: 'top-center' });
            } else {
                throw new Error('Something went wrong, please contact support');
            }
        } catch (e) {
            toast.dismiss(addDepMarcheLoader);
            toast.error(e?.message || 'Something went wrong, please contact support');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="wrapper p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Upload & View Excel Sheets for DepMarche</h3>

            {/* Form */}
            <form className="form-group custom-form" onSubmit={handleFileSubmit}>
                <input
                    type="file"
                    className="form-control border border-gray-300 rounded-md p-2 mb-4"
                    required
                    onChange={handleFile}
                />
                <button
                    type="submit"
                    className="btn btn-success btn-md py-2 px-4 mx-4 rounded-md bg-green-500 text-white hover:bg-green-600"
                >
                    UPLOAD
                </button>
                {typeError && (
                    <div className="alert alert-danger mt-4" role="alert">{typeError}</div>
                )}
            </form>

            {/* View Data */}
            <div className="viewer mt-8">
                {excelData ? (
                    <>
                        <button
                            onClick={handleAddDepMarche}
                            disabled={isLoading}
                            className="btn btn-primary py-2 px-4 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                        >
                            {isLoading ? 'Adding DepMarche...' : 'Add DepMarche'}
                        </button>

                        {/* Table to display the Excel data */}
                        <div className="overflow-x-auto mt-4">
                            <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
                                <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-2 px-4 border-b text-left">Expense Type</th>
                                    <th className="py-2 px-4 border-b text-left">Reference</th>
                                    <th className="py-2 px-4 border-b text-left">Amount</th>
                                    <th className="py-2 px-4 border-b text-left">Expense Date</th>
                                    <th className="py-2 px-4 border-b text-left">Start Date</th>
                                    <th className="py-2 px-4 border-b text-left">End Date</th>
                                    <th className="py-2 px-4 border-b text-left">Ligne Budgetaire ID</th>
                                    <th className="py-2 px-4 border-b text-left">Payment Method</th>
                                    <th className="py-2 px-4 border-b text-left">Approval Date</th>
                                    <th className="py-2 px-4 border-b text-left">Status</th>
                                    <th className="py-2 px-4 border-b text-left">Details</th>
                                </tr>
                                </thead>
                                <tbody>
                                {excelData.map((row, index) => (
                                    <tr key={index}>
                                        <td className="py-2 px-4 border-b">{row['Expense Type']}</td>
                                        <td className="py-2 px-4 border-b">{row['Reference']}</td>
                                        <td className="py-2 px-4 border-b">{row['Amount']}</td>
                                        <td className="py-2 px-4 border-b">{row['Expense Date']}</td>
                                        <td className="py-2 px-4 border-b">{row['Start Date']}</td>
                                        <td className="py-2 px-4 border-b">{row['End Date']}</td>
                                        <td className="py-2 px-4 border-b">{row['Ligne Budgetaire ID']}</td>
                                        <td className="py-2 px-4 border-b">{row['Payment Method']}</td>
                                        <td className="py-2 px-4 border-b">{row['Approval Date']}</td>
                                        <td className="py-2 px-4 border-b">{row['Status']}</td>
                                        <td className="py-2 px-4 border-b">{row['Details']}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                ) : (
                    <div className="text-gray-600">No file is uploaded yet!</div>
                )}
            </div>
        </div>
    );
}

export default AddDepMarcheTab;
