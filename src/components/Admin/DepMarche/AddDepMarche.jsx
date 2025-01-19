import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form.jsx';
import { Input } from '../../ui/input.jsx';
import { Button } from '../../ui/button.jsx';
import { Textarea } from '../../ui/textarea.jsx'; // To handle details field

import { CatchActionForForms } from "@/Library/index.jsx";
import { useGlobalContext } from "@/context/GlobalState.jsx";
import { toast } from "sonner";
import { ActionsApi } from "@/Services/Actions/ActionsApi.js";
import { AddDepMarcheAction } from "@/context/Features/Actions.js"; // Update to match dep_marche

// Form validation schema using Zod
const formSchema = z.object({
    ligne_budgetaire_id: z.string().min(1, "Budget line is required"),
    expense_type: z.string().min(1, "Expense type is required"),
    reference: z.string().min(1, "Reference is required").max(255, "Reference cannot exceed 255 characters"),
    amount: z.string().min(0.01, "Amount must be greater than zero"),
    expense_date: z.string().min(1, "Expense date is required"),
    start_date: z.string().nullable(),
    end_date: z.string().nullable(),
    payment_method: z.string().nullable(),
    approval_date: z.string().nullable(),
    status: z.enum(['pending', 'approved', 'rejected']).default('pending'),
    details: z.string().nullable(),
});

const AddDepMarche = () => {
    const GlobalState = useGlobalContext();
    const dispatch = GlobalState?.dispatch;

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            ligne_budgetaire_id: '',
            expense_type: '',
            reference: '',
            amount: '',
            expense_date: '',
            start_date: null,
            end_date: null,
            payment_method: null,
            approval_date: null,
            status: 'pending',
            details: null,
        },
    });

    const onSubmit = async (values) => {
        const loading = toast.loading("Adding DepMarche in progress...");

        try {
            const response = await ActionsApi.addDepMarche(values); // Make sure your API supports this
            if (response.status === 200 && response?.data?.dep_marche) {
                dispatch(AddDepMarcheAction({ dep_marche: response.data.dep_marche }));
                toast.dismiss(loading);
                toast.success('Entry added successfully');
            } else {
                throw new Error("Couldn't add DepMarche, please try again later");
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
                                name="expense_type"
                                render={({ field }) => (
                                    <FormItem className={'md:w-2/5'}>
                                        <FormLabel>Expense Type</FormLabel>
                                        <FormControl>
                                            {/* Select dropdown for expense type */}
                                            <select {...field} className="input">
                                                {['CCF', 'CCV', 'Bon de Commande'].map((type) => (
                                                    <option key={type} value={type}>
                                                        {type}
                                                    </option>
                                                ))}
                                            </select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="reference"
                                render={({ field }) => (
                                    <FormItem className={'md:w-2/5'}>
                                        <FormLabel>Reference</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Reference..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className={'md:flex justify-between'}>
                            <FormField
                                control={form.control}
                                name="amount"
                                render={({ field }) => (
                                    <FormItem className={'md:w-2/5'}>
                                        <FormLabel>Amount</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="Amount..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="expense_date"
                                render={({ field }) => (
                                    <FormItem className={'md:w-2/5'}>
                                        <FormLabel>Expense Date</FormLabel>
                                        <FormControl>
                                            <Input type="date" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className={'md:flex justify-between'}>
                            <FormField
                                control={form.control}
                                name="start_date"
                                render={({ field }) => (
                                    <FormItem className={'md:w-2/5'}>
                                        <FormLabel>Start Date</FormLabel>
                                        <FormControl>
                                            <Input type="date" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="end_date"
                                render={({ field }) => (
                                    <FormItem className={'md:w-2/5'}>
                                        <FormLabel>End Date</FormLabel>
                                        <FormControl>
                                            <Input type="date" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className={'md:flex justify-between'}>
                            <FormField
                                control={form.control}
                                name="payment_method"
                                render={({ field }) => (
                                    <FormItem className={'md:w-2/5'}>
                                        <FormLabel>Payment Method</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Payment Method..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="approval_date"
                                render={({ field }) => (
                                    <FormItem className={'md:w-2/5'}>
                                        <FormLabel>Approval Date</FormLabel>
                                        <FormControl>
                                            <Input type="date" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className={'md:flex justify-between'}>
                            <FormField
                                control={form.control}
                                name="status"
                                render={({ field }) => (
                                    <FormItem className={'md:w-2/5'}>
                                        <FormLabel>Status</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Status..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="details"
                                render={({ field }) => (
                                    <FormItem className={'md:w-2/5'}>
                                        <FormLabel>Details</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Details..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <Button className={'w-full'} type="submit">
                        <span>Add DepMarche</span>
                    </Button>
                </form>
            </Form>
        </>
    );
};

export default AddDepMarche;
