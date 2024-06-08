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
// import {EditTrainer} from "@/components/src/formateur/EditTrainer.jsx";
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
  DeletePharmacyAction,
  DeleteUserAction,
} from "@/context/Features/Actions.js";
import { useGlobalContext } from "@/context/GlobalState.jsx";
import { Add } from "@/components/Add.jsx";
import { ActionsApi } from "@/Services/Actions/ActionsApi.js";
// import { EditUser } from "@/components/Admin/User/EditUser.jsx";
import EditPharmacy  from "@/components/Admin/Pharmacy/EditPharmacy.jsx";

export const PharmacyActions = ({ PharmacyId }) => {
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
            Edit Pharmacy
          </DropdownMenuItem>
          <DropdownMenuItem>View payment details</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {open && (
        <Add
          actionName={"Edit"}
          name={"Trainer"}
          setOpen={setOpen}
          open={open}
          addAction={(setOpen) => (
            <EditPharmacy setOpen={setOpen} PharmacyId={PharmacyId} />
          )}
        />
      )}

      <AlertDialog open={isDelete}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you absolutely sure to delete
              <span className={"font-bold"}>
                {" "}
                {/*{firstname} {lastname}*/}
              </span>{" "}
              ?
            </AlertDialogTitle>
            <AlertDialogDescription>
              <span className={"text-lg"}> This action cannot be undone.</span>
              <span className={"text-red-600 text-lg font-mono"}>
                {" "}
                This will permanently delete All seances and of this trainer{" "}
              </span>
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
                  const response = await ActionsApi.DeletePharmacy(PharmacyId);
                  toast.dismiss(deletingLoader);
                  if (response?.status === 200 && response.data) {
                    dispatch(DeletePharmacyAction({ id: PharmacyId }));
                    toast.success("table deleted successfully");
                  } else {
                    throw new Error(
                      "Couldn't delete the trainer try again later"
                    );
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
