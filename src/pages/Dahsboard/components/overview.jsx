import React, {useState} from 'react';
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts';
import {useGlobalContext} from "@/context/GlobalState.jsx";

// JSON data
const jsonData = {
    lignes_budgetaire: [
        {
            id: 1,
            name: "Electricity",
            description: "Electricity bills for operations",
            expense_type: "Electricity",
            annual_budget: "50000.00",
            spent_amount: "35000.00",
            year: "2025",
            expenses: [
                {
                    id: 21,
                    amount: "5000.00",
                    expense_date: "2025-01-10",
                },
                {
                    id: 27,
                    amount: "5000.00",
                    expense_date: "2025-02-15",
                },
                {
                    id: 30,
                    amount: "3000.00",
                    expense_date: "2025-03-05",
                },
                {
                    id: 35,
                    amount: "4000.00",
                    expense_date: "2025-01-25",
                },
            ],
        },
    ],
};

// Function to preprocess data
const preprocessData = (jsonData) => {
    const monthlyData = Array(12).fill(0);

    jsonData?.lignes_budgetaire.forEach((ligne) => {
        ligne.expenses.forEach((expense) => {
            const month = new Date(expense.expense_date).getMonth(); // Extract month (0-11)
            monthlyData[month] += parseFloat(expense.amount); // Add the amount to the respective month
        });
    });

    // Format data for the chart
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    return months.map((month, index) => ({
        name: month,
        total: monthlyData[index],
    }));
};



export function Overview() {

    const {state} = useGlobalContext()


    const [jsonData, setJsonData] = useState(state);

    console.log(state)
    const data = preprocessData(jsonData);
    return (
        <div className={'w-full flex flex-wrap lg:flex-nowrap'}>
            {/* Bar Chart */}
            <ResponsiveContainer width="100%" height={350}>
                <BarChart data={data}>
                    <XAxis
                        dataKey="name"
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value}`}
                    />
                    <Tooltip formatter={(value) => `$${value}`} />
                    <Bar
                        dataKey="total"
                        fill="#8884d8"
                        radius={[4, 4, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>

            {/* Line Chart */}
            <ResponsiveContainer width="100%" height={350}>
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => `$${value}`} />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="total"
                        stroke="#82ca9d"
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
