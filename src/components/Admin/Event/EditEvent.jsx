'use client'

import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from '../../ui/form.jsx';
import {Input} from '../../ui/input.jsx';
import {Button} from '../../ui/button.jsx';

import {CatchActionForForms} from "@/Library/index.jsx";
import {useGlobalContext} from "@/context/GlobalState.jsx";
import {EditEventAction} from "@/context/Features/Actions.js";
import {toast} from "sonner";
import {ActionsApi} from "@/Services/Actions/ActionsApi.js";

const formSchema = z.object({
    title: z.string().nullable(),
    description: z.string().nullable(),
    type: z.string().nullable(),
    durationhours: z.string().nullable(),
    address: z.string().nullable(),
});

export const EditEvent = ({eventId}) => {

    const GlobalState = useGlobalContext();
    const dispatch = GlobalState?.dispatch;

    const CurrentEvent = GlobalState?.state?.events.find((event) => event.id === eventId);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: CurrentEvent?.title,
            description: CurrentEvent?.description,
            type: CurrentEvent?.type,
            durationhours: CurrentEvent?.durationhours,
            address: CurrentEvent?.address,
        },
    });

    const onSubmit = async (values) => {
        values['id'] = eventId;
        const loading = toast.loading("Updating event in progress...");

        try {
            const response = await ActionsApi.EditEvent(values);
            if (response.status === 200 && response.data.event) {
                dispatch(EditEventAction({event: response.data.event}));
                toast.dismiss(loading);
                toast.success('Event updated successfully');
            } else {
                throw new Error("Couldn't update event, please try again later");
            }
        } catch (e) {
            CatchActionForForms(e, form.setError, loading);
        }
    };

    return (
        <div className={'w-2/3 mx-auto my-10'}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className={'mt-4'}>
                        <div className={'md:flex justify-between'}>
                            <FormField
                                control={form.control}
                                name="title"
                                render={({field}) => (
                                    <FormItem className={'md:w-2/5'}>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Title..." {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({field}) => (
                                    <FormItem className={'md:w-2/5'}>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Description..." {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className={'md:flex justify-between'}>
                            <FormField
                                control={form.control}
                                name="type"
                                render={({field}) => (
                                    <FormItem className={'md:w-2/5'}>
                                        <FormLabel>Type</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Type..." {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="durationhours"
                                render={({field}) => (
                                    <FormItem className={'md:w-2/5'}>
                                        <FormLabel>Duration Hours</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Duration Hours..." {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>

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

                    <Button className={'w-full'} type="submit">
                        <span>Edit Event</span>
                    </Button>
                </form>
            </Form>
        </div>
    );
}
