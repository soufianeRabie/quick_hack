'use client'

import {z} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from '../../ui/form.jsx'
import {Input} from '../../ui/input.jsx'
import {Button} from '../../ui/button.jsx'

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import {CatchActionForForms} from "@/Library/index.jsx";
import GlobalState, {useGlobalContext} from "@/context/GlobalState.jsx";
import {toast} from "sonner";
import {ActionsApi} from "@/Services/Actions/ActionsApi.js";
import {AddTable1Action, EditTable1Action} from "@/context/Features/Actions.js";


const formSchema = z.object({
    att1:z.string().nullable(),
    att2: z.string().nullable(),
    att3: z.string().nullable(),
    att4: z.string().nullable(),
    name : z.string().nullable(),
})


export const EditTable1 = ({Table1Id}) => {

    const {state , dispatch} = useGlobalContext()
    console.log(Table1Id)
    const CurrentTable = state.table1s.find(t => t.id === Table1Id)
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            // CIN: CurrentUser?.CIN.toString(),
            att1: CurrentTable?.att1,
            att2: CurrentTable?.att2,
            att3: CurrentTable?.att3,
            att4: CurrentTable?.att4,
            name: CurrentTable?.name,
        },
    })

    const onSubmit = async (values) => {

        // GlobalLibrary.ConvertValuesToInteger(values, ['number_of_week', 'average_hours_per_week'])
        const loading =  toast.loading("updating table in progress...")
        values['id'] = Table1Id
        try {
            const response = await ActionsApi.EditTable1(values);
            if(response.status === 200 && response.data.table1)
            {
                dispatch(EditTable1Action({table1 : response.data.table1}));
                toast.dismiss(loading)
                toast.success('table updated successfully')
            }else
            {
                throw new Error("Couldn't add table1 please try again later")
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
                                name="att1"
                                render={({field}) => (
                                    <FormItem className={'md:w-2/5'}>
                                        <FormLabel>att1</FormLabel>
                                        <FormControl>
                                            <Input placeholder="att1..." {...field} />
                                        </FormControl>
                                        <FormMessage/>

                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="att2"
                                render={({field}) => (
                                    <FormItem className={'md:w-2/5'}>
                                        <FormLabel>emaatt2il</FormLabel>
                                        <FormControl>
                                            <Input placeholder="att2..." {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className={'md:flex justify-between '}>
                            <FormField
                                control={form.control}
                                name="att3"
                                render={({field}) => (
                                    <FormItem className={'md:w-2/5'}>
                                        <FormLabel>att3</FormLabel>
                                        <FormControl>
                                            <Input placeholder="att3..." {...field} />
                                        </FormControl>
                                        <FormMessage/>

                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="att4"
                                render={({field}) => (
                                    <FormItem className={'md:w-2/5'}>
                                        <FormLabel>att4</FormLabel>
                                        <FormControl>
                                            <Input placeholder="att4..." {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>
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

                        <span>Edit Table 1</span>

                    </Button>
                </form>
            </Form>
        </div>
    )
}


