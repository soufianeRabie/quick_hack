import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/utils/ui/dropdown-menu.jsx";
import {Button} from "@/components/utils/ui/button.jsx";
import {CircleX, MoreHorizontal} from "lucide-react";
import {Add} from "@/components/utils/data-table/components/Add.jsx";
import {EditTrainer} from "@/components/src/formateur/EditTrainer.jsx";
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

export const ModuleActions = ({selectedRows}) => {



    // console.log(TrainerId)
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
                       Edit Module
                   </DropdownMenuItem>
                   <DropdownMenuItem >
                       Affect to trainer
                   </DropdownMenuItem>
               </DropdownMenuContent>
           </DropdownMenu>

           {/*{open && <Add actionName={'Edit'} name={'Trainer'} setOpen={setOpen} open={open} addAction={(setOpen)=><EditTrainer setOpen={setOpen} TrainerId={TrainerId}/>}/>}*/}

           {/*<AlertDialog open={isDelete}>*/}
           {/*    <AlertDialogContent>*/}
           {/*        <AlertDialogHeader>*/}
           {/*            <AlertDialogTitle>*/}
           {/*                Are you absolutely sure to delete*/}
           {/*                <span className={'font-bold'}>*/}
           {/*           {' '}*/}
           {/*                    /!*{firstname} {lastname}*!/*/}
           {/*         </span>{' '}*/}
           {/*                ?*/}
           {/*            </AlertDialogTitle>*/}
           {/*            <AlertDialogDescription>*/}
           {/*         <span className={'text-lg'}>*/}
           {/*           {' '}*/}
           {/*             This action cannot be undone.*/}
           {/*         </span>*/}
           {/*                <span className={'text-red-600 text-lg font-mono'}>*/}
           {/*           {' '}*/}
           {/*                    This will permanently delete All seances and  of this trainer{' '}*/}
           {/*         </span>*/}
           {/*            </AlertDialogDescription>*/}
           {/*        </AlertDialogHeader>*/}
           {/*        <AlertDialogFooter>*/}
           {/*            <AlertDialogCancel onClick={()=>setIsDelete(false)}>Cancel</AlertDialogCancel>*/}
           {/*            <AlertDialogAction*/}
           {/*                onClick={async () => {*/}
           {/*                    const deletingLoader = toast.loading(*/}
           {/*                        'Deleting in progress.',*/}
           {/*                    )*/}

           {/*                    try {*/}
           {/*                        const response = await ActionsApi.DeleteTrainer(TrainerId)*/}
           {/*                        toast.dismiss(deletingLoader)*/}
           {/*                        // if (response?.status === 200) {*/}
           {/*                        //     dispatch({*/}
           {/*                        //         type: 'DELETE_DELIVERY',*/}
           {/*                        //         payload: {*/}
           {/*                        //             id: id,*/}
           {/*                        //         },*/}
           {/*                        //     })*/}
           {/*                        //     setData(data.filter((delivery) => delivery.id !== id))*/}
           {/*                        //     toast.success('delivery deleted', {*/}
           {/*                        //         description: `delivery deleted successfully`,*/}
           {/*                        //         icon: <Trash2Icon />,*/}
           {/*                        //     })*/}
           {/*                        // }*/}
           {/*                    } catch (err) {*/}
           {/*                        toast.dismiss(deletingLoader)*/}
           {/*                        toast.success('trainer not deleted', {*/}
           {/*                            description: `trainer was not deleted try again after a while`,*/}
           {/*                            icon: <CircleX/>,*/}
           {/*                        })*/}
           {/*                    }*/}
           {/*                }}*/}
           {/*            >*/}
           {/*                Delete*/}
           {/*            </AlertDialogAction>*/}
           {/*        </AlertDialogFooter>*/}
           {/*    </AlertDialogContent>*/}
           {/*</AlertDialog>*/}
       </>
    )
}
