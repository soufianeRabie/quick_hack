import {DataTable} from '../DataTable.jsx'
import {useEffect, useRef, useState} from 'react'
import {DataTableColumnHeader} from '../DataTableColumnHeader.jsx'
import {useGlobalContext} from "@/context/GlobalState.jsx";
import {UserActions} from "@/components/data-table/Tables/TablesActions/UserActions.jsx";

export default function UserList() {

    const { state , dispatch } = useGlobalContext()
    const [data, setData] = useState([])



    const AdminTrainerColumns = [
        {
            accessorKey: 'id',
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="CIN" />
            },
        },
        {
            accessorKey: 'name',
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="name " />
            },
        },
        {
            accessorKey: 'email',
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="email" />
            },
        },
        {
            accessorKey: 'role.name',
            header: ({ column }) => {
                return <DataTableColumnHeader column={column} title="role" />
            },
        },

        {
            id: 'actions',
            cell: ({ row }) => {
                const id = row?.original?.id ;

                return (
                    <>
                        <UserActions UserId={id}/>
                    </>
                )
            },
        },
    ]
    useEffect(() => {
       if(state.users)
       {
           {

               setData(state.users)
               console.log('user' ,state.user)
           }
       }else
       {
           setData([])
       }
    }, [state?.users])

    return (
        <>

                    <>
                        <DataTable
                            columns={AdminTrainerColumns}
                            data={data}
                            name={'User'}
                            // addAction={(setOpen)=> <AddTrainer setOpen={setOpen}/>}
                            filterBy={'name'}
                            messageFilter={'filter by name'}
                        />
                    </>

        </>
    )
}
