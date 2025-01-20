
export function RecentSales({ expenses }) {


    console.log(expenses)
  return (
    <div className="space-y-8">
        <ul className="space-y-4">
            {expenses.map((expense) => (
                <li
                    key={expense.id}
                    className="flex items-center justify-between text-sm"
                >
                    <div>
                        <p className="font-medium">{expense.details}</p>
                        <p className="text-muted-foreground text-xs">
                            {expense.expense_date} - {expense.reference}
                        </p>
                    </div>
                    <span className="font-bold text-red-600">
                        -DH {parseFloat(expense.amount).toFixed(2)}
                    </span>
                </li>
            ))}
        </ul>

    </div>
  )
}
