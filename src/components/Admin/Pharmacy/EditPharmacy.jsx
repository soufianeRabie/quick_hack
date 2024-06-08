"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form.jsx";
import { Input } from "../../ui/input.jsx";
import { Button } from "../../ui/button.jsx";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.jsx";
import { CatchActionForForms } from "@/Library/index.jsx";
import GlobalState, { useGlobalContext } from "@/context/GlobalState.jsx";
import { toast } from "sonner";
import { ActionsApi } from "@/Services/Actions/ActionsApi.js";
import {
  AddPharmacyAction,
  EditPharmacyAction,
} from "@/context/Features/Actions.js";

const formSchema = z.object({
  name: z.string().nullable(),
  address: z.string().nullable(),
  garde: z.string().nullable(),
  operationhours: z.string().nullable(),
});

 const EditPharmacy = ({ PharmacyId }) => {
    console.log(PharmacyId);
  const { state, dispatch } = useGlobalContext();
  console.log(PharmacyId);
  const CurrentTable = state.pharmacies.find((t) => t.id === PharmacyId);
  console.log(CurrentTable);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // CIN: CurrentUser?.CIN.toString(),
      name: CurrentTable?.name,
      address: CurrentTable?.address,
      garde: CurrentTable?.garde,
      operationhours: CurrentTable?.operationhours,
    },
  });

  const onSubmit = async (values) => {
    // GlobalLibrary.ConvertValuesToInteger(values, ['number_of_week', 'average_hours_per_week'])
    const loading = toast.loading("updating table in progress...");
    values["id"] = PharmacyId;
    try {
      const response = await ActionsApi.EditPharmacy(values);
      if (response.status === 200 && response.data.pharmacy) {
        dispatch(EditPharmacyAction({ pharmacy: response.data.pharmacy }));
        toast.dismiss(loading);
        toast.success("Pharmacy updated successfully");
      } else {
        throw new Error("Couldn't Edit Pharmacy please try again later");
      }
    } catch (e) {
      CatchActionForForms(e, form.setError, loading);
    }
  };
  return (
    <div className={"w-2/3 mx-auto my-10 "}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className={"mt-4"}>
            <div className={"md:flex justify-between "}>
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className={"md:w-2/5"}>
                    <FormLabel>adress</FormLabel>
                    <FormControl>
                      <Input placeholder="address..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className={"md:w-2/5"}>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className={"md:flex justify-between "}>
              <FormField
                control={form.control}
                name="operationhours"
                render={({ field }) => (
                  <FormItem className={"md:w-2/5"}>
                    <FormLabel>Hours</FormLabel>
                    <FormControl>
                      <Input placeholder="hours..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <FormField
                control={form.control}
                name="att4"
                render={({ field }) => (
                  <FormItem className={"md:w-2/5"}>
                    <FormLabel>att4</FormLabel>
                    <FormControl>
                      <Input placeholder="att4..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
            </div>
            <FormField
              control={form.control}
              name="garde"
              render={({ field }) => (
                <FormItem className={"md:w-2/5"}>
                  <FormLabel>Garde</FormLabel>
                  <FormControl>
                    <Input placeholder="garde..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className={"md:flex justify-between "}></div>

          <Button className={"w-full"} type="submit">
            <span>Edit Pharmacy</span>
          </Button>
        </form>
      </Form>
    </div>
  );
};


 export default EditPharmacy