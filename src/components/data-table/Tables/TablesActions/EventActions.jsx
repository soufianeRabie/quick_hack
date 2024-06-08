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
import {ActionsApi} from "@/Services/Actions/ActionsApi.js";
import {DeleteEventAction, EditEventAction} from "@/context/Features/Actions.js";
import {Add} from "@/components/Add.jsx";
import {EditEvent} from "@/components/Admin/Event/EditEvent.jsx";

export const EventAction = ({eventId , isValid}) => {

    const GlobalState  = useGlobalContext();
    const userRole = GlobalState?.state?.user?.role?.name;
    const dispatch = GlobalState?.dispatch;
    const [open, setOpen] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [valid, setValid] = useState(isValid);


    const handleValidate = async ()=>
    {
       const loading =  toast.loading('Validation in progress');
      try {
          const response = await ActionsApi.ValidateEvent(eventId)
          if(response.status === 200 && response.data)
          {
              toast.dismiss(loading)
              toast.success('the event was successfully validated')
              setValid(true)
              dispatch(EditEventAction({event : response.data.event}))
          }
      }catch (e)
      {
          console.log(e)
          toast.dismiss(loading)
          toast.error('something went wrong')
      }
    }
    return (
        <>
           <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4"/>
                    </Button>
                </DropdownMenuTrigger>
               {userRole === 'engaged' ?  <DropdownMenuContent align="end">
                   <DropdownMenuLabel>Actions</DropdownMenuLabel>
                   <AlertDialog open={isDelete}>
                       <DropdownMenuItem>
                           <AlertDialogTrigger asChild>
                               <span onClick={() => setIsDelete(true)}> Delete</span>
                           </AlertDialogTrigger>
                       </DropdownMenuItem>
                   </AlertDialog>
                   <DropdownMenuSeparator/>
                   <DropdownMenuItem onClick={() => setOpen(true)}>
                       Edit Event
                   </DropdownMenuItem>
               </DropdownMenuContent> :  <DropdownMenuContent align="end">
                   <DropdownMenuLabel>Actions</DropdownMenuLabel>
                   <AlertDialog open={isDelete}>
                       <DropdownMenuItem>
                           <AlertDialogTrigger asChild>
                               <span onClick={() => setIsDelete(true)}> Delete</span>
                           </AlertDialogTrigger>
                       </DropdownMenuItem>
                   </AlertDialog>
                   <DropdownMenuSeparator/>
                   <DropdownMenuItem onClick={() => handleValidate()}>
                       {!isValid&&   <Button>Validate</Button>}
                   </DropdownMenuItem>
               </DropdownMenuContent>}
            </DropdownMenu>

            {open && <Add actionName={'Edit'} name={'Event'} setOpen={setOpen} open={open} addAction={(setOpen) => <EditEvent setOpen={setOpen} eventId={eventId}/>}/>}

            <AlertDialog open={isDelete}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Are you absolutely sure to delete
                            <span className={'font-bold'}>
                                {' '} this event
                            </span>?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            <span className={'text-lg'}>
                                This action cannot be undone.
                            </span>
                            <span className={'text-red-600 text-lg font-mono'}>
                                This will permanently delete this event.
                            </span>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setIsDelete(false)}>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={async () => {
                                const deletingLoader = toast.loading('Deleting in progress.');

                                try {
                                    const response = await ActionsApi.DeleteEvent(eventId);
                                    toast.dismiss(deletingLoader);
                                    if (response?.status === 200 && response.data) {
                                        dispatch(DeleteEventAction({id: eventId}));
                                        toast.success('Event deleted successfully');
                                    } else {
                                        throw new Error("Couldn't delete the event. Try again later.");
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
