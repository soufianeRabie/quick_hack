import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '../../ui/form.jsx';
import {Input} from '../../ui/input.jsx';
import {Button} from '../../ui/button.jsx';

import {CatchActionForForms} from "@/Library/index.jsx";
import {useGlobalContext} from "@/context/GlobalState.jsx";
import {toast} from "sonner";
import {ActionsApi} from "@/Services/Actions/ActionsApi.js";
import {AddBudgetaireAction} from "@/context/Features/Actions.js";

const formSchema = z.object({
    name: z.string().nullable(),
    description: z.string().nullable(),
    amount: z.number().nullable(),
    category: z.string().nullable(),
});

export const AddBudgetaire = () => {

    const GlobalState = useGlobalContext();
    const dispatch = GlobalState?.dispatch;

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            description: '',
            amount: null,
            category: '',
        },
    });

    const onSubmit = async (values) => {
        const loading = toast.loading("Adding Budgetaire in progress...");

        try {
            const response = await ActionsApi.AddBudgetaire(values);
            console.log('Response:', response);
            if (response.status === 200 && response?.data?.budgetaire) {
                dispatch(AddBudgetaireAction({budgetaire: response.data.budgetaire}));
                toast.dismiss(loading);
                toast.success('Budgetaire added successfully');
            } else {
                throw new Error("Couldn't add Budgetaire, please try again later");
            }
        } catch (e) {
            CatchActionForForms(e, form.setError, loading);
        }
    };

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className={'mt-4'}>
                        <div className={'md:flex justify-between'}>
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
                                name="amount"
                                render={({field}) => (
                                    <FormItem className={'md:w-2/5'}>
                                        <FormLabel>Amount</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="Amount..." {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="category"
                                render={({field}) => (
                                    <FormItem className={'md:w-2/5'}>
                                        <FormLabel>Category</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Category..." {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <Button className={'w-full'} type="submit">
                        <span>Add Budgetaire</span>
                    </Button>
                </form>
            </Form>
        </>
    );
};

export default AddBudgetaire;
