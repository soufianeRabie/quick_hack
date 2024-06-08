import {z} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from '../../ui/form.jsx'
import {Input} from '../../ui/input.jsx'
import {Button} from '../../ui/button.jsx'

import {CatchActionForForms} from "@/Library/index.jsx";
import {useGlobalContext} from "@/context/GlobalState.jsx";
import {toast} from "sonner";
import {ActionsApi} from "@/Services/Actions/ActionsApi.js";
import {AddPharmacyAction} from "@/context/Features/Actions.js";


const formSchema = z.object({
    name:z.string().nullable(),
    address: z.string().nullable(),
    garde: z.string().nullable(),
    operationhours: z.string().nullable(),
})


const  AddPharmacy = ({PharmacyId}) => {

    const GlobalState = useGlobalContext()
    const dispatch = GlobalState?.dispatch


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            address: '',
            garde: '',
            operationhours: '',
        },
    })

    const onSubmit = async (values) => {

        // GlobalLibrary.ConvertValuesToInteger(values, ['number_of_week', 'average_hours_per_week'])
        const loading =  toast.loading("adding Pharmacy in progress...")

        try {
            const response = await ActionsApi.AddPharmacy(values);
            console.log('WAAAAAAAAAAAAAAAAAA')
            console.log(response)
            if(response.status === 200 && response?.data?.pharmacy)
            {
                dispatch(AddPharmacyAction({pharmacy : response.data.pharmacy}));
                toast.dismiss(loading)
                toast.success('table added successfully')
            }else
            {
                throw new Error("Couldn't add Pharmacy please try again later")
            }

        }catch (e)
        {
            CatchActionForForms(e , form.setError , loading)
        }
    }
    return (
         <>
             <Form {...form}>
                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                     <div className={'mt-4'}>
                         <div className={'md:flex justify-between '}>
                             <FormField
                                 control={form.control}
                                 name="name"
                                 render={({field}) => (
                                     <FormItem className={'md:w-2/5'}>
                                         <FormLabel>Name</FormLabel>
                                         <FormControl>
                                             <Input placeholder="Name..." {...field} />
                                         </FormControl>
                                         <FormMessage/>

                                     </FormItem>
                                 )}
                             />
                             <FormField
                                 control={form.control}
                                 name="address"
                                 render={({field}) => (
                                     <FormItem className={'md:w-2/5'}>
                                         <FormLabel>Address</FormLabel>
                                         <FormControl>
                                             <Input placeholder="Address..." {...field} />
                                         </FormControl>
                                         <FormMessage/>
                                     </FormItem>
                                 )}
                             />
                         </div>
                         <div className={'md:flex justify-between '}>
                             <FormField
                                 control={form.control}
                                 name="operationhours"
                                 render={({field}) => (
                                     <FormItem className={'md:w-2/5'}>
                                         <FormLabel>Operation Hours</FormLabel>
                                         <FormControl>
                                             <Input placeholder="Hours..." {...field} />
                                         </FormControl>
                                         <FormMessage/>

                                     </FormItem>
                                 )}
                             />
                             <FormField
                                 control={form.control}
                                 name="garde"
                                 render={({field}) => (
                                     <FormItem className={'md:w-2/5'}>
                                         <FormLabel>Garde</FormLabel>
                                         <FormControl>
                                             <Input placeholder="Garde..." {...field} />
                                         </FormControl>
                                         <FormMessage/>
                                     </FormItem>
                                 )}
                             />
                         </div>
                     </div>

                     <div className={'md:flex justify-between '}>


                     </div>

                     <Button className={'w-full'} type="submit">

                         <span>Add Pharmacy</span>

                     </Button>
                 </form>
             </Form>
         </>

    )
}

export default AddPharmacy
