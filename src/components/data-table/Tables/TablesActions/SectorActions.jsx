import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/utils/ui/dropdown-menu.jsx";
import {Button} from "@/components/utils/ui/button.jsx";
import { MoreHorizontal} from "lucide-react";
import {Add} from "@/components/utils/data-table/components/Add.jsx";
import {useState} from "react";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/utils/ui/alert-dialog.jsx";
import {toast} from "sonner";
import {ActionsApi} from "../../../../../../Services/Actions/ActionsApi.js";
import {EditSector} from "@/components/src/sector/EditSector.jsx";
import {DeleteSectorAction} from "@/context/Features/Actions.js";
import {CatchAction} from "@/Library/index.jsx";
import {useGlobalContext} from "@/context/GlobalState.jsx";

export const SectorActions = ({sectorId}) => {

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
                        Edit Sector
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {open && <Add actionName={'Edit'} name={'Room'} setOpen={setOpen} open={open} addAction={(setOpen)=><EditSector setOpen={setOpen} id={sectorId}/>}/>}

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
                                This will permanently delete All seances   of this sector{' '}
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
                                    const response = await ActionsApi.DeleteSector(sectorId)
                                    toast.dismiss(deletingLoader)
                                    if (response?.status === 200 && response.data) {
                                        dispatch(
                                            DeleteSectorAction({id : sectorId})
                                        )
                                    }else
                                    {
                                        throw new Error("Couldn't delete the sector try again later")
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
