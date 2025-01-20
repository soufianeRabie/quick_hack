/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ewomqMxwNDd
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import {useEffect, useState} from "react";
import {useGlobalContext} from "@/context/GlobalState.jsx";

export default function Component() {


    const { state } = useGlobalContext();
    const [expenses, setExpenses] = useState(state.dep_marche); // Assuming expenses are passed from global state
    const [selectedExpenses, setSelectedExpenses] = useState([]);
    const [amount, setAmount] = useState('');

    // Handle checkbox change
    const handleExpenseChange = (expenseId, isChecked) => {
        if (isChecked) {
            setSelectedExpenses((prev) => [...prev, expenseId]); // Add to selected

            console.log(selectedExpenses)
        } else {
            setSelectedExpenses((prev) => prev.filter(id => id !== expenseId)); // Remove from selected
        }
    };

    // Calculate the total amount based on selected expenses
    const calculateTotalAmount = () => {
        let total = 0;
        selectedExpenses.forEach(id => {
            const expense = expenses.find(exp => exp.id === id);
            if (expense) {
                total += parseFloat(expense.amount);
            }
        });
        setAmount(total);
    };

    // Trigger calculation when selectedExpenses changes
    useEffect(() => {
        calculateTotalAmount();
    }, [selectedExpenses]);

    const handlePayment = () => {
        if (selectedExpenses.length && amount) {
            if (confirm("Are you sure you want to proceed with the payment?")) {
                alert("Payment successful! Thank you for your purchase.");
            } else {
                alert("Payment was cancelled. You can review your order before proceeding.");
            }


            console.log("Payment for", selectedExpenses, "Amount:", amount);
        } else {
            console.log("Please select an expense and enter the amount.");
        }
    };

    return (
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto py-8 px-4">
            {/*div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto py-8 px-4">*/}
            <Card>
                <CardHeader>
                    <CardTitle>Expense Payment</CardTitle>
                    <CardDescription>Choose your expense and payment details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Expense selection */}
                    <div className="grid gap-4">
                        <Label>Select Expenses</Label>
                        <div className="space-y-2">
                            {expenses.map(expense => (
                                <div key={expense.id} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={`expense-${expense.id}`}
                                        checked={selectedExpenses.includes(expense.id)}
                                        onChange={(e) => handleExpenseChange(expense.id, e.target.checked)}
                                        className="mr-2"
                                    />
                                    <Label htmlFor={`expense-${expense.id}`} className="text-lg">
                                        {expense.reference} - ${expense.amount}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Payment amount */}
                    <div className="grid gap-4">
                        <Label htmlFor="amount">Amount to Pay</Label>
                        <Input
                            id="amount"
                            type="number"
                            value={amount}
                            readOnly
                            className="w-full p-3 bg-white border-2 border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                    </div>

                    {/* Submit button */}
                    <div className="flex justify-end mt-6">
                        <Button onClick={handlePayment} size="lg" className="w-full sm:w-auto bg-primary text-white hover:bg-primary-dark">
                            Pay Expense
                        </Button>
                    </div>
                </CardContent>
            </Card>


            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Payment</CardTitle>
                        <CardDescription>Enter your payment details</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input id="cardNumber" placeholder="4111 1111 1111 1111" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="expiration">Expiration</Label>
                                <div className="grid grid-cols-2 gap-2">
                                    <Select>
                                        <SelectTrigger id="expiration-month">
                                            <SelectValue placeholder="MM" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Array.from({ length: 12 }, (_, i) => (
                                                <SelectItem key={i + 1} value={i + 1}>
                                                    {i + 1}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <Select>
                                        <SelectTrigger id="expiration-year">
                                            <SelectValue placeholder="YY" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Array.from({ length: 10 }, (_, i) => (
                                                <SelectItem key={i + 2023} value={i + 2023}>
                                                    {i + 2023}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="cvc">CVC</Label>
                                <Input id="cvc" placeholder="123" />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="cardholderName">Cardholder Name</Label>
                            <Input id="cardholderName" placeholder="John Doe" />
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Payment Options</CardTitle>
                        <CardDescription>Select your preferred payment method</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
                            <div>
                                <RadioGroupItem value="card" id="card" className="peer sr-only" />
                                <Label
                                    htmlFor="card"
                                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                    <CreditCardIcon className="mb-3 h-6 w-6" />
                                    Credit Card
                                </Label>
                            </div>
                            <div>
                                <RadioGroupItem value="digital-wallet" id="digital-wallet" className="peer sr-only" />
                                <Label
                                    htmlFor="digital-wallet"
                                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                    <WalletCardsIcon className="mb-3 h-6 w-6" />
                                    Digital Wallet
                                </Label>
                            </div>
                            <div>
                                <RadioGroupItem value="other" id="other" className="peer sr-only" />
                                <Label
                                    htmlFor="other"
                                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                >
                                    <DollarSignIcon className="mb-3 h-6 w-6" />
                                    Other
                                </Label>
                            </div>
                        </RadioGroup>
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Order Summary</CardTitle>
                        <CardDescription>Review your order details</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <div className="flex items-center justify-between">
                                <span>Subtotal</span>
                                <span>{amount}</span>
                            </div>
                            {/*<div className="flex items-center justify-between">*/}
                            {/*    <span>Shipping</span>*/}
                            {/*    <span>$5.00</span>*/}
                            {/*</div>*/}
                            {/*<div className="flex items-center justify-between">*/}
                            {/*    <span>Discount</span>*/}
                            {/*    <span>-$10.00</span>*/}
                            {/*</div>*/}
                            {/*<Separator />*/}
                            {/*<div className="flex items-center justify-between font-medium">*/}
                            {/*    <span>Total</span>*/}
                            {/*    <span>$94.00</span>*/}
                            {/*</div>*/}
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center justify-between">
                                <span>Items</span>
                                <span>{selectedExpenses?.length}</span>

                            </div>
                            {/*<div className="flex items-center justify-between">*/}
                            {/*    <span>Delivery</span>*/}
                            {/*    <span>Standard (3-5 days)</span>*/}
                            {/*</div>*/}
                        </div>
                    </CardContent>
                </Card>
                <Button size="lg" className="w-full">
                    Place Order
                </Button>
            </div>
        </div>
    )
}

function CreditCardIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
    )
}


function DollarSignIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="12" x2="12" y1="2" y2="22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
    )
}


function WalletCardsIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
            <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" />
        </svg>
    )
}
