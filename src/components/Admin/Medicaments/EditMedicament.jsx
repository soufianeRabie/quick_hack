'use client'

import {z} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from '../../ui/form.jsx'
import {Input} from '../../ui/input.jsx'
import {Button} from '../../ui/button.jsx'

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import {CatchActionForForms} from "@/Library/index.jsx";
import {useGlobalContext} from "@/context/GlobalState.jsx";
import {EditMedicamentAction, EditUserAction} from "@/context/Features/Actions.js";
import {toast} from "sonner";
import {ActionsApi} from "@/Services/Actions/ActionsApi.js";


const formSchema = z.object({
    name : z.string().nullable(),
    price : z.string().nullable(),
    prescreption : z.string().nullable(),
})


export const EditMedicament = ({medicamentId}) => {

    console.log(medicamentId)

    const GlobalState = useGlobalContext()
    const dispatch = GlobalState?.dispatch

    const CurrentMedicament = GlobalState?.state?.medicaments.find((medic)=>medic.id ===medicamentId);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            // CIN: CurrentUser?.CIN.toString(),
            name: CurrentMedicament?.name,
            price: CurrentMedicament?.price,
            presecrption : CurrentMedicament?.presecreption
        },
    })

    const onSubmit = async (values) => {

        // GlobalLibrary.ConvertValuesToInteger(values, ['number_of_week', 'average_hours_per_week'])
        values['id'] = medicamentId
        const loading =  toast.loading("updating medicament in progress...")

        try {
            const response = await ActionsApi.EditMedicament(values);
            if(response.status === 200 && response.data.medicament)
            {
                dispatch(EditMedicamentAction({medicament : response.data.medicament}));
                toast.dismiss(loading)
                toast.success('medicament updated successfully')
            }else
            {
                throw new Error("Couldn't updated medicament please try again later")
            }

        }catch (e)
        {
            CatchActionForForms(e , form.setError , loading)
        }
    }
    return (
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

                    <div className={'md:flex justify-between '}>


                    </div>

                    <Button className={'w-full'} type="submit">

                        <span>Edit Medicament</span>

                    </Button>
                </form>
            </Form>
        </div>
    )
}


