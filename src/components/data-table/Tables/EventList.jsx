import { DataTable } from '../DataTable.jsx'
import { useEffect, useState } from 'react'
import { DataTableColumnHeader } from '../DataTableColumnHeader.jsx'
import { useGlobalContext } from "@/context/GlobalState.jsx";
import { UserActions } from "@/components/data-table/Tables/TablesActions/UserActions.jsx";
import { SelectSpecifiqueTypeMedicament } from "@/components/SelectSpecifiqueTypeMedicament.jsx";
import {MedicamentAction} from "@/components/data-table/Tables/TablesActions/MedicamentAction.jsx";
import {AddMedicament} from "@/components/Admin/Medicaments/AddMedicament.jsx";
import {AddEvent} from "@/components/Admin/Event/AddEvent.jsx";
import {EventAction} from "@/components/data-table/Tables/TablesActions/EventActions.jsx";

export default function EventList() {
    const { state } = useGlobalContext()
    const [data, setData] = useState([])

    const AdminEventColumns = [
        {
            accessorKey: 'id',
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="CIN" />
            },
        },
        {
            accessorKey: 'title',
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="title" />
            },
        },
        {
            accessorKey: 'description',
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="description" />
            },
        },
        {
            accessorKey: 'type',
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="type" />
            },
        },
        {
            accessorKey: 'address',
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="address" />
            },
        },
        {
            accessorKey: 'durationhours',
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="durationhours" />
            },
        },
        {
            accessorKey: 'isValid',
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="validate" />
            },
        },
        {
            id: 'actions',
            cell: ({ row }) => {
                const {id , isValid} = row?.original;

                return (
                    <>
                        {state.user?.role?.name === 'admin' ? <EventAction eventId={id} isValid={isValid} /> : <></>}
                    </>
                )
            },
        },
    ]

    useEffect(() => {
    //    console.log(state)
        if (state.events) {
            // Update data with reimbursement calculation
            setData(state.events)
        } else {
            setData([])
        }
    }, [state.events])

    return (
        <>
            <DataTable
                columns={AdminEventColumns}
                data={data}
                name={'Event'}
                addAction={()=><AddEvent/>}
                filterBy={'name'}
                messageFilter={'Filter by name'}
            />
        </>
    )
}
