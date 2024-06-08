import { DataTable } from "../DataTable.jsx";
import { useEffect, useState } from "react";
import { DataTableColumnHeader } from "../DataTableColumnHeader.jsx";
import { useGlobalContext } from "@/context/GlobalState.jsx";
import { UserActions } from "@/components/data-table/Tables/TablesActions/UserActions.jsx";
import { AddPharmacy } from "@/components/Admin/Pharmacy/AddPharmacy.jsx";
import { PharmacyActions } from "@/components/data-table/Tables/TablesActions/PharmacyActions.jsx";

export default function PharmacyList() {
  const { state, dispatch } = useGlobalContext();
  const [data, setData] = useState([]);

  const AdminTrainerColumns = [
    {
      accessorKey: "id",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="id" />;
      },
    },
    {
      accessorKey: "name",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Name" />;
      },
    },
    {
      accessorKey: "address",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Address" />;
      },
    },
    {
      accessorKey: "garde",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="En Garde ?" />;
      },
    },
    // {
    // accessorKey: 'att4',
    // header: ({ column }) => {
    //     return <DataTableColumnHeader column={column} title="att4" />
    // },
    // },

    {
      id: "actions",
      cell: ({ row }) => {
        const id = row?.original?.id;

        return (
          <>
            <PharmacyActions PharmacyId={id} />
          </>
        );
      },
    },
  ];
  useEffect(() => {
    if (state.pharmacies) {
      {
          console.log(state.pharmacies);
          setData(state.pharmacies);
      }
    } else {
      setData([]);
    }
  }, [state?.pharmacies]);

  return (
    <>
      <>
        <DataTable
          columns={AdminTrainerColumns}
          data={data}
          name={"Pharmacies"}
          addAction={(setOpen) => <AddPharmacy setOpen={setOpen} />}
          filterBy={"att1"}
          messageFilter={"filter by ...."}
        />
      </>
    </>
  );
}
