import { DataTable } from "../DataTable.jsx";
import { useEffect, useState } from "react";
import { DataTableColumnHeader } from "../DataTableColumnHeader.jsx";
import { useGlobalContext } from "@/context/GlobalState.jsx";
import { LigneBudgetaireAction } from "@/components/data-table/Tables/TablesActions/LigneBudgetaireAction.jsx";
import AddLigneBudgetaire from "@/components/Admin/LigneBudgetaire/AddLigneBudgetaire.jsx";

export default function LigneBudgetaireList() {
  const { state, dispatch } = useGlobalContext();
  const [data, setData] = useState([]);

  const LigneBudgetaireColumns = [
    {
      accessorKey: "id",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="ID" />;
      },
    },
    {
      accessorKey: "name",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Name" />;
      },
    },
    {
      accessorKey: "description",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Description" />;
      },
    },
    {
      accessorKey: "expense_type",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Expense Type" />;
      },
    },
    {
      accessorKey: "annual_budget",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Annual Budget" />;
      },
    },
    {
      accessorKey: "spent_amount",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Spent Amount" />;
      },
    },
    {
      accessorKey: "year",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Year" />;
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const id = row?.original?.id;

        return (
          <>
            <LigneBudgetaireAction LigneBudgetaireId={id} />
          </>
        );
      },
    },
  ];

  useEffect(() => {
    console.log(state.lignes_budgetaire)
    if (state.lignes_budgetaire) {
      console.log(state.lignes_budgetaire)
      setData(state.lignes_budgetaire);
    } else {
      setData([]);
    }
  }, [state?.lignes_budgetaire]);

  return (
    <>
      <DataTable
        columns={LigneBudgetaireColumns}
        data={data}
        name={"Ligne Budgetaires"}
        addAction={(setOpen) => <AddLigneBudgetaire setOpen={setOpen} />}
        filterBy={"name"}
        messageFilter={"Filter by name or expense type..."}
      />
    </>
  );
}
