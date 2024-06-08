import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.jsx";
import {Button} from "@/components/ui/button.jsx";
import { MoreHorizontal} from "lucide-react";

import {useState} from "react";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog.jsx";
import {toast} from "sonner";
import {CatchAction} from "@/Library/index.jsx";
import {useGlobalContext} from "@/context/GlobalState.jsx";
import {EditMedicament} from "@/components/Admin/Medicaments/EditMedicament.jsx";
import {ActionsApi} from "@/Services/Actions/ActionsApi.js";
import {DeleteMedicamentAction} from "@/context/Features/Actions.js";
import {Add} from "@/components/Add.jsx";

export const MedicamentAction = ({medicamentId}) => {

    console.log(medicamentId)
    const GlobalState  = useGlobalContext()
    const dispatch = GlobalState?.dispatch
    const [open, setOpen] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <AlertDialog open={isDelete}>
                        <DropdownMenuItem
                            // onClick={() => navigator.clipboard.writeText(payment.id)}
                        >

                            <AlertDialogTrigger asChild >
                                <span onClick={()=>setIsDelete(true)}> Delete</span>
                            </AlertDialogTrigger>
                        </DropdownMenuItem>

                    </AlertDialog>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem onClick={()=>setOpen(true)} >
                        Edit Medicament
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {open && <Add actionName={'Edit'} name={'Room'} setOpen={setOpen} open={open} addAction={(setOpen)=><EditMedicament setOpen={setOpen} medicamentId={medicamentId}/>}/>}

            <AlertDialog open={isDelete}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Are you absolutely sure to delete
                            <span className={'font-bold'}>
                      {' '}
                                {/*{firstname} {lastname}*/}
                    </span>{' '}
                            ?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                    <span className={'text-lg'}>
                      {' '}
                        This action cannot be undone.
                    </span>
                            <span className={'text-red-600 text-lg font-mono'}>
                      {' '}
                                This will permanently delete this medicament{' '}
                    </span>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={()=>setIsDelete(false)}>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={async () => {
                                const deletingLoader = toast.loading(
                                    'Deleting in progress.',
                                )


                                try {
                                    const response = await ActionsApi.DeleteMedicament(medicamentId)
                                    toast.dismiss(deletingLoader)
                                    if (response?.status === 200 && response.data) {
                                        dispatch(
                                            DeleteMedicamentAction({id : medicamentId})
                                        )
                                    }else
                                    {
                                        throw new Error("Couldn't delete the medicament try again later")
                                    }
                                }catch (e)
                                {
                                    CatchAction(e , deletingLoader)
                                }
                            }}
                        >
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}
