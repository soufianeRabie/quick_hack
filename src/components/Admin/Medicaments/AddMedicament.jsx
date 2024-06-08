'use client'

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
import {AddMedicamentAction,} from "@/context/Features/Actions.js";


const formSchema = z.object({
    name : z.string().nullable(),
    price : z.string().nullable(),
    prescreption : z.string().nullable(),
})


export const AddMedicament = () => {

    const GlobalState = useGlobalContext()
    const dispatch = GlobalState?.dispatch


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            price :'',
            prescreption :''
        },
    })

    const onSubmit = async (values) => {

        // GlobalLibrary.ConvertValuesToInteger(values, ['number_of_week', 'average_hours_per_week'])
        const loading =  toast.loading("adding medicament in progress...")

        try {
            const response = await ActionsApi.AddMedicament(values);
            if(response.status === 200 && response.data.medicament)
            {
                dispatch(AddMedicamentAction({medicament : response.data.medicament}));
                toast.dismiss(loading)
                toast.success('medicament added successfully')
            }else
            {
                throw new Error("Couldn't add medicament please try again later")
            }

        }catch (e)
        {
            CatchActionForForms(e , form.setError , loading)
        }
    }
    return (
       <>
           <div className={'w-2/3 mx-auto my-10 '}>
               <Form {...form}>
                   <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                       <div className={'mt-4'}>
                           <div className={'md:flex justify-between '}>
                               <FormField
                                   control={form.control}
                                   name="name"
                                   render={({field}) => (
                                       <FormItem className={'md:w-2/5'}>
                                           <FormLabel>name</FormLabel>
                                           <FormControl>
                                               <Input placeholder="name..." {...field} />
                                           </FormControl>
                                           <FormMessage/>

                                       </FormItem>
                                   )}
                               />
                               <FormField
                                   control={form.control}
                                   name="price"
                                   render={({field}) => (
                                       <FormItem className={'md:w-2/5'}>
                                           <FormLabel>price</FormLabel>
                                           <FormControl>
                                               <Input placeholder="price..." {...field} />
                                           </FormControl>
                                           <FormMessage/>
                                       </FormItem>
                                   )}
                               />
                           </div>

                           <FormField
                               control={form.control}
                               name="prescreption"
                               render={({field}) => (
                                   <FormItem className={'md:w-2/5'}>
                                       <FormLabel>prescreption</FormLabel>
                                       <FormControl>
                                           <Input placeholder="prescreption..." {...field} />
                                       </FormControl>
                                       <FormMessage/>
                                   </FormItem>
                               )}
                           />
                       </div>
                       <Button className={'w-full'} type="submit">

                           <span>Add Medicament</span>

                       </Button>
                   </form>
               </Form>
           </div>
       </>
    )
}



