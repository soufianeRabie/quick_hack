import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu.jsx";
  import { Button } from "@/components/ui/button.jsx";
  import { MoreHorizontal } from "lucide-react";
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
  import { useGlobalContext } from "@/context/GlobalState.jsx";
  import { Add } from "@/components/Add.jsx";
  import { ActionsApi } from "@/Services/Actions/ActionsApi.js";
  // import EditLigneBudgetaire from "@/components/Admin/LigneBudgetaire/EditLigneBudgetaire.jsx";

  
  export const LigneBudgetaireAction = ({ budgetaireId }) => {
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
                  <span onClick={() => setIsDelete(true)}>Delete</span>
                </AlertDialogTrigger>
              </DropdownMenuItem>
            </AlertDialog>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setOpen(true)}>
              Edit Budgetaire
            </DropdownMenuItem>
            <DropdownMenuItem>View details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
  
        {open && (
          <Add
            actionName={"Edit"}
            name={"Ligne Budgetaire"}
            setOpen={setOpen}
            open={open}
            addAction={(setOpen) => (
              <EditLigneBudgetaire setOpen={setOpen} budgetaireId={budgetaireId} />
            )}
          />
        )}
  
        <AlertDialog open={isDelete}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to delete this budget line?
              </AlertDialogTitle>
              <AlertDialogDescription>
                <span className="text-lg">This action cannot be undone.</span>
                <span className="text-red-600 text-lg font-mono">
                  This will permanently delete this budget line and all related data.
                </span>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setIsDelete(false)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={async () => {
                  const deletingLoader = toast.loading("Deleting in progress...");
  
                  try {
                    const response = await ActionsApi.DeleteLigneBudgetaire(
                      budgetaireId
                    );
                    toast.dismiss(deletingLoader);
                    if (response?.status === 200 && response.data) {
                      dispatch({ type: "DELETE_BUDGETAIRE", id: budgetaireId });
                      toast.success("Budget line deleted successfully.");
                    } else {
                      throw new Error("Couldn't delete the budget line. Try again later.");
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
