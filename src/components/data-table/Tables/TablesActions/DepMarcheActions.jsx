import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.jsx";
import { Button } from "@/components/ui/button.jsx";
import { CircleX, MoreHorizontal } from "lucide-react";
// import {EditDepMarche} from "@/components/src/depMarche/EditDepMarche.jsx";  // Update this import if you need to edit dep_marche
import { useState } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog.jsx";
import { toast } from "sonner";
import { CatchAction } from "@/Library/index.jsx";
import {
    DeleteDepMarcheAction,
} from "@/context/Features/Actions.js";  // Update for dep_marche
import { useGlobalContext } from "@/context/GlobalState.jsx";
import { Add } from "@/components/Add.jsx";
import { ActionsApi } from "@/Services/Actions/ActionsApi.js";
// import { EditDepMarche } from "@/components/Admin/DepMarche/EditDepMarche.jsx";  // Update for dep_marche

export const DepMarcheActions = ({ depMarcheId }) => {
    const [open, setOpen] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const GlobalState = useGlobalContext();
    const dispatch = GlobalState?.dispatch;

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <AlertDialog open={isDelete}>
                        <DropdownMenuItem>
                            <AlertDialogTrigger asChild>
                                <span onClick={() => setIsDelete(true)}> Delete</span>
                            </AlertDialogTrigger>
                        </DropdownMenuItem>
                    </AlertDialog>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setOpen(true)}>
                        Edit DepMarche
                    </DropdownMenuItem>
                    <DropdownMenuItem>View expense details</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {open && (
                <Add
                    actionName={"Edit"}
                    name={"DepMarche"}
                    setOpen={setOpen}
                    open={open}
                    addAction={(setOpen) => (
                        <EditDepMarche setOpen={setOpen} depMarcheId={depMarcheId} />
                    )}
                />
            )}

            <AlertDialog open={isDelete}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Are you absolutely sure you want to delete this entry?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setIsDelete(false)}>
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={async () => {
                                const deletingLoader = toast.loading("Deleting in progress.");

                                try {
                                    const response = await ActionsApi.DeleteDepMarche(depMarcheId);
                                    toast.dismiss(deletingLoader);
                                    if (response?.status === 200 && response.data) {
                                        dispatch(DeleteDepMarcheAction({ id: depMarcheId }));
                                        toast.success("Entry deleted successfully");
                                    } else {
                                        throw new Error("Couldn't delete the entry, try again later");
                                    }
                                } catch (e) {
                                    CatchAction(e, deletingLoader);
                                }
                            }}
                        >
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};
