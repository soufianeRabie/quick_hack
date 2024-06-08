import { DataTable } from '../DataTable.jsx'
import { useEffect, useState } from 'react'
import { DataTableColumnHeader } from '../DataTableColumnHeader.jsx'
import { useGlobalContext } from "@/context/GlobalState.jsx";
import { UserActions } from "@/components/data-table/Tables/TablesActions/UserActions.jsx";
import { SelectSpecifiqueTypeMedicament } from "@/components/SelectSpecifiqueTypeMedicament.jsx";
import {MedicamentAction} from "@/components/data-table/Tables/TablesActions/MedicamentAction.jsx";
import {AddMedicament} from "@/components/Admin/Medicaments/AddMedicament.jsx";

export default function MedicamentList() {
    const { state } = useGlobalContext()
    const [data, setData] = useState([])
    const [type, setType] = useState()
    const [typePercentage, setTypePercentage] = useState(0)

    const onTypeChange = (value) => {
        setType(value)
        // Set the percentage based on the selected type
        switch (value) {
            case 'cnss':
                setTypePercentage(50)
                break
            case 'cmim':
                setTypePercentage(85)
                break
            case 'cnops':
                setTypePercentage(80)
                break
            default:
                setTypePercentage(0)
                break
        }
    }

    const AdminMedicamentColumns = [
        {
            accessorKey: 'id',
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="CIN" />
            },
        },
        {
            accessorKey: 'name',
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="Name" />
            },
        },
        {
            accessorKey: 'price',
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="Price" />
            },
        },
        {
            accessorKey: 'prescreption',
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="Prescription" />
            },
        },
        {
            accessorKey: 'percentage',
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="%" />
            },
        },
        {
            accessorKey: 'remercement',
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="Reimbursement" />
            },
        },
        {
            id: 'actions',
            cell: ({ row }) => {
                const id = row?.original?.id;

                return (
                    <>
                        {state.user?.role?.name === 'admin' ? <MedicamentAction medicamentId={id} /> : <></>}
                    </>
                )
            },
        },
    ]

    useEffect(() => {
        console.log(state)
        if (state.medicaments) {
            // Update data with reimbursement calculation
            const updatedData = state.medicaments.map(med => ({
                ...med,
                percentage: typePercentage,
                remercement: (med.price * typePercentage) / 100
            }))
            setData(updatedData)
        } else {
            setData([])
        }
    }, [state.medicaments, typePercentage])

    return (
        <>
            <SelectSpecifiqueTypeMedicament onTypeChange={onTypeChange} />
            <DataTable
                columns={AdminMedicamentColumns}
                data={data}
                name={'Medicament'}
                addAction={()=><AddMedicament/>}
                filterBy={'name'}
                messageFilter={'Filter by name'}
            />
        </>
    )
}
