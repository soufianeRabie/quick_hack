import { Button } from '@/components/custom/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../../components/ui/card'
import { Search } from '../../components/search'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { useGlobalContext } from "@/context/GlobalState.jsx";
import { TopNav } from '../../components/top-nav'
import { UserNav } from '../../components/user-nav'
import { Layout, LayoutBody, LayoutHeader } from '../../components/custom/layout'
import { RecentSales } from './components/recent-sales.jsx'
import { Overview } from './components/overview.jsx'
import ThemeSwitch from "../../components/theme-switch.jsx";
import AddDepMarcheTab from "@/pages/Dahsboard/components/AddDepMarcheTab.jsx";
import {useState} from "react";

export default function Dashboard() {

    const { state } = useGlobalContext();
    const [jsonData, setJsonData] = useState(state);

    // Utility function to get the total amount for a specific month and year
    const calculateTotalForMonth = (expenses, month, year) => {
        return expenses
            .filter((expense) => {
                const expenseDate = new Date(expense.expense_date);
                return (
                    expenseDate.getMonth() + 1 === month && // Month is 0-based in JavaScript, so add 1
                    expenseDate.getFullYear() === year
                );
            })
            .reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
    };

    // Get the current date
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Months are 0-based
    const currentYear = currentDate.getFullYear();

    // Calculate totals
    let totalSpentCurrentMonth = 0;
    let totalSpentLastMonth = 0;

    jsonData.lignes_budgetaire.forEach((ligne) => {
        totalSpentCurrentMonth += calculateTotalForMonth(
            ligne.expenses,
            currentMonth,
            currentYear
        );

        totalSpentLastMonth += calculateTotalForMonth(
            ligne.expenses,
            currentMonth - 1 === 0 ? 12 : currentMonth - 1, // Handle January to December transition
            currentMonth - 1 === 0 ? currentYear - 1 : currentYear // Handle year transition
        );
    });

    // Calculate percentage difference
    const percentageDifference =
        totalSpentLastMonth > 0
            ? ((totalSpentCurrentMonth - totalSpentLastMonth) /
                totalSpentLastMonth) *
            100
            : 0;

    const getMostSpentLigne = (lignes_budgetaire) => {
        let maxSpent = 0;
        let mostSpentLigne = null;

        lignes_budgetaire.forEach((ligne) => {
            // Calculate the total spent for this ligne
            const totalSpent = ligne.expenses.reduce(
                (sum, expense) => sum + parseFloat(expense.amount),
                0
            );

            // Update the most spent ligne if this one has higher spending
            if (totalSpent > maxSpent) {
                maxSpent = totalSpent;
                mostSpentLigne = {
                    name: ligne.name,
                    totalSpent,
                };
            }
        });

        return mostSpentLigne;
    };

    // Get the most spent ligne_budgetaire
    const mostSpentLigne = getMostSpentLigne(jsonData.lignes_budgetaire);



    console.log('this is the state')
    console.log(state);
    return (
        <Layout>
            {/* ===== Top Heading ===== */}
            <LayoutHeader>
                <TopNav links={topNav} />
                <div className='ml-auto flex items-center space-x-4'>
                    <Search />
                    <ThemeSwitch />
                    <UserNav />
                </div>
            </LayoutHeader>

            {/* ===== Main ===== */}
            <LayoutBody className='space-y-4'>
                <div className='flex items-center justify-between space-y-2'>
                    <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
                        Dashboard
                    </h1>
                    <div className='flex items-center space-x-2'>
                        <Button>Download</Button>
                    </div>
                </div>
                <Tabs
                    orientation='vertical'
                    defaultValue='overview'
                    className='space-y-4'
                >
                    <div className='w-full overflow-x-scroll pb-2'>
                        <TabsList>
                            <TabsTrigger value='overview'>Overview</TabsTrigger>
                            <TabsTrigger value='analytics'>Analytics</TabsTrigger>
                            <TabsTrigger value='reports'>Reports</TabsTrigger>
                            <TabsTrigger value='depenses'>depenses</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value={'depenses'} className={'space-y-4'}>
                        <AddDepMarcheTab />
                    </TabsContent>
                    <TabsContent value='overview' className='space-y-4'>
                        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Total Expenditures This Month
                                    </CardTitle>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="h-4 w-4 text-muted-foreground"
                                    >
                                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        DH {totalSpentCurrentMonth.toLocaleString()}
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        {percentageDifference > 0 ? "+" : ""}
                                        {percentageDifference.toFixed(1)}% from last month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Top Spending Budget Line
                                    </CardTitle>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="h-4 w-4 text-muted-foreground"
                                    >
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    {mostSpentLigne ? (
                                        <>
                                            <div className="text-2xl font-bold">
                                                {mostSpentLigne.name}
                                            </div>
                                            <p className="text-xs text-muted-foreground">
                                                Total Spent: DH 
                                                {mostSpentLigne.totalSpent.toLocaleString()}
                                            </p>
                                        </>
                                    ) : (
                                        <div className="text-sm text-muted-foreground">
                                            No data available
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Total Savings This Month
                                    </CardTitle>
                                    {/*<svg*/}
                                    {/*    xmlns="http://www.w3.org/2000/svg"*/}
                                    {/*    viewBox="0 0 24 24"*/}
                                    {/*    fill="none"*/}
                                    {/*    stroke="currentColor"*/}
                                    {/*    strokeLinecap="round"*/}
                                    {/*    strokeLinejoin="round"*/}
                                    {/*    strokeWidth="2"*/}
                                    {/*    className="h-4 w-4 text-muted-foreground"*/}
                                    {/*>*/}
                                    {/*    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />*/}
                                    {/*</svg>*/}
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">DH 51,345</div>
                                    <p className="text-xs text-muted-foreground">-5.4% from last month</p>
                                </CardContent>
                            </Card>

                            {/* Card 2: Top Spending Budget Line */}
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Top Saving Budget Line</CardTitle>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="h-4 w-4 text-muted-foreground"
                                    >
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">Investment</div>
                                    <p className="text-xs text-muted-foreground">Total Spent: DH 30,432</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Remaining Budget</CardTitle>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="h-4 w-4 text-muted-foreground"
                                    >
                                        <rect width="20" height="14" x="2" y="5" rx="2" />
                                        <path d="M2 10h20" />
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">DH -3,215</div>
                                    <p className="text-xs text-muted-foreground">-20% budget remaining</p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
                            <Card className='col-span-1 lg:col-span-4'>
                                <CardHeader>
                                    <CardTitle>Overview</CardTitle>
                                </CardHeader>
                                <CardContent className='pl-2'>
                                    <Overview />
                                </CardContent>
                            </Card>
                            <Card className='col-span-1 lg:col-span-3'>
                                <CardHeader>
                                    <CardTitle>Recent Expenses</CardTitle>
                                    <CardDescription>
                                        You made 265 expense this month.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <RecentSales expenses={state?.dep_marche} />
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </LayoutBody>
        </Layout>
    )
}

const topNav = [
    {
        title: 'Overview',
        href: 'dashboard/overview',
        isActive: true,
    },
    {
        title: 'Customers',
        href: 'dashboard/customers',
        isActive: false,
    },
    {
        title: 'Products',
        href: 'dashboard/products',
        isActive: false,
    },
    {
        title: 'Settings',
        href: 'dashboard/settings',
        isActive: false,
    },
]
