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
import { EditUserAction} from "@/context/Features/Actions.js";
import {toast} from "sonner";
import {ActionsApi} from "@/Services/Actions/ActionsApi.js";


const formSchema = z.object({
    name : z.string().nullable(),
    email : z.string().nullable(),
})


export const EditUser = ({UserId}) => {

    const GlobalState = useGlobalContext()
    const dispatch = GlobalState?.dispatch

    const CurrentUser = GlobalState?.state?.user

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            // CIN: CurrentUser?.CIN.toString(),
            name: CurrentUser?.name,
            email: CurrentUser?.email,
        },
    })

    const onSubmit = async (values) => {

        // GlobalLibrary.ConvertValuesToInteger(values, ['number_of_week', 'average_hours_per_week'])
        values['id'] = UserId
        const loading =  toast.loading("updating user in progress...")

        try {
            const response = await ActionsApi.EditUser(values);
            if(response.status === 200 && response.data.user)
            {
                dispatch(EditUserAction({user : response.data.user}));
                toast.dismiss(loading)
                toast.success('user updated successfully')
            }else
            {
                throw new Error("Couldn't add user please try again later")
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
                                name="email"
                                render={({field}) => (
                                    <FormItem className={'md:w-2/5'}>
                                        <FormLabel>email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="email..." {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>
                        {/*<div className={'mt-4'}>*/}
                        {/*    <div className={'md:flex justify-between '}>*/}
                        {/*        <FormField*/}
                        {/*            control={form.control}*/}
                        {/*            name="CIN"*/}
                        {/*            render={({field}) => (*/}
                        {/*                <FormItem className={'md:w-2/5'}>*/}
                        {/*                    <FormLabel>CIN</FormLabel>*/}
                        {/*                    <FormControl>*/}
                        {/*                        <Input placeholder="CIN" {...field} />*/}
                        {/*                    </FormControl>*/}
                        {/*                    <FormMessage/>*/}
                        {/*                </FormItem>*/}
                        {/*            )}*/}
                        {/*        />*/}
                        {/*        <FormField*/}
                        {/*            control={form.control}*/}
                        {/*            name="number_of_week"*/}
                        {/*            render={({field}) => (*/}
                        {/*                <FormItem className={'md:w-2/5'}>*/}
                        {/*                    <FormLabel>number_of_week</FormLabel>*/}
                        {/*                    <FormControl>*/}
                        {/*                        <Input placeholder="number_of_week..." {...field} />*/}
                        {/*                    </FormControl>*/}
                        {/*                    <FormMessage/>*/}
                        {/*                </FormItem>*/}
                        {/*            )}*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<FormField*/}
                        {/*    control={form.control}*/}
                        {/*    name="average_hours_per_week"*/}
                        {/*    render={({field}) => (*/}
                        {/*        <FormItem>*/}
                        {/*            <FormLabel>average_hours_per_week </FormLabel>*/}
                        {/*            <FormControl>*/}
                        {/*                <Input placeholder="average_hours_per_week" {...field} />*/}
                        {/*            </FormControl>*/}
                        {/*            <FormMessage/>*/}
                        {/*        </FormItem>*/}
                        {/*    )}*/}
                        {/*/>*/}
                        {/*<FormField*/}
                        {/*    control={form.control}*/}
                        {/*    name="password"*/}
                        {/*    render={({field}) => (*/}
                        {/*        <FormItem>*/}
                        {/*            <FormLabel>Password</FormLabel>*/}
                        {/*            <FormControl>*/}
                        {/*                <Input*/}
                        {/*                    type={'password'}*/}
                        {/*                    placeholder="***************"*/}
                        {/*                    {...field}*/}
                        {/*                />*/}
                        {/*            </FormControl>*/}
                        {/*            <FormMessage/>*/}
                        {/*        </FormItem>*/}
                        {/*    )}*/}
                        {/*/>*/}
                        {/*<div className={'mt-4'}>*/}
                        {/*    <div className={'md:flex justify-between '}>*/}
                        {/*        <FormField*/}
                        {/*            control={form.control}*/}
                        {/*            name="field"*/}
                        {/*            render={({field}) => (*/}
                        {/*                <FormItem className={'md:w-2/5'}>*/}
                        {/*                    <FormLabel>field</FormLabel>*/}
                        {/*                    <Select onValueChange={field.onChange} defaultValue={field.value}>*/}
                        {/*                        <FormControl>*/}
                        {/*                            <SelectTrigger>*/}
                        {/*                                <SelectValue placeholder="Select a sector"/>*/}
                        {/*                            </SelectTrigger>*/}
                        {/*                        </FormControl>*/}
                        {/*                        <SelectContent>*/}
                        {/*                            {Fields.map((sector, key) => {*/}
                        {/*                                return (*/}
                        {/*                                    <SelectItem key={key} value={sector}>{sector}</SelectItem>*/}
                        {/*                                )*/}
                        {/*                            })}*/}
                        {/*                        </SelectContent>*/}
                        {/*                    </Select>*/}
                        {/*                    <FormMessage/>*/}
                        {/*                </FormItem>*/}
                        {/*            )}*/}
                        {/*        />*/}

                        {/*        <FormField*/}
                        {/*            control={form.control}*/}
                        {/*            name="FP_FV"*/}
                        {/*            render={({field}) => (*/}
                        {/*                <FormItem className={'md:w-2/5'}>*/}
                        {/*                    <FormLabel>FP_FV</FormLabel>*/}
                        {/*                    <Select onValueChange={field.onChange} defaultValue={field.value}>*/}
                        {/*                        <FormControl>*/}
                        {/*                            <SelectTrigger>*/}
                        {/*                                <SelectValue placeholder="Select type of formation"/>*/}
                        {/*                            </SelectTrigger>*/}
                        {/*                        </FormControl>*/}
                        {/*                        <SelectContent>*/}
                        {/*                            <SelectItem value={"FP"}>FP</SelectItem>*/}
                        {/*                            <SelectItem value={"FV"}>FV</SelectItem>*/}
                        {/*                        </SelectContent>*/}
                        {/*                    </Select>*/}
                        {/*                    <FormMessage/>*/}
                        {/*                </FormItem>*/}
                        {/*            )}*/}
                        {/*        />*/}

                            {/*</div>*/}
                        {/*</div>*/}

                    </div>

                    <div className={'md:flex justify-between '}>


                    </div>

                    <Button className={'w-full'} type="submit">

                        <span>Edit User</span>

                    </Button>
                </form>
            </Form>
        </div>
    )
}


