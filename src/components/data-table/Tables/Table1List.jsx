import {DataTable} from '../DataTable.jsx'
import {useEffect, useRef, useState} from 'react'
import {DataTableColumnHeader} from '../DataTableColumnHeader.jsx'
import {useGlobalContext} from "@/context/GlobalState.jsx";
import {UserActions} from "@/components/data-table/Tables/TablesActions/UserActions.jsx";
import {AddTable1} from "@/components/Admin/Table1/AddTable1.jsx";
import {Table1Actions} from "@/components/data-table/Tables/TablesActions/Table1Actions.jsx";

export default function Table1List() {

    const { state , dispatch } = useGlobalContext()
    const [data, setData] = useState([])



    const AdminTrainerColumns = [
        {
            accessorKey: 'id',
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="id" />
            },
        },
        {
            accessorKey: 'att1',
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="att1 " />
            },
        },
        {
            accessorKey: 'att2',
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="att2" />
            },
        },
        {
            accessorKey: 'att3',
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="att3" />
            },
        },
        {
            accessorKey: 'att4',
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="att4" />
            },
        },

        {
            id: 'actions',
            cell: ({ row }) => {
                const id = row?.original?.id ;

                return (
                    <>
                        <Table1Actions table1Id={id}/>
                    </>
                )
            },
        },
    ]
    useEffect(() => {
        if(state.table1s)
        {
            {

                setData(state.table1s)
            }
        }else
        {
            setData([])
        }
    }, [state?.table1s])

    return (
        <>

            <>
                <DataTable
                    columns={AdminTrainerColumns}
                    data={data}
                    name={'Table1'}
                    addAction={(setOpen)=> <AddTable1 setOpen={setOpen}/>}
                    filterBy={'att1'}
                    messageFilter={'filter by att1'}
                />
            </>

        </>
    )
}
