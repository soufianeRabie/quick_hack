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

import { CatchActionForForms } from "@/Library/index.jsx";
import { useGlobalContext } from "@/context/GlobalState.jsx";
import { toast } from "sonner";
import { ActionsApi } from "@/Services/Actions/ActionsApi.js";
import { EditLigneBudgetaireAction } from "@/context/Features/Actions.js";

const formSchema = z.object({
  name: z.string().nullable(),
  description: z.string().nullable(),
  budget: z.number().nullable(),
});

const EditLigneBudgetaire = ({ LigneBudgetaireId }) => {
  const { state, dispatch } = useGlobalContext();
  const CurrentLigneBudgetaire = state.ligneBudgetaires.find(
    (l) => l.id === LigneBudgetaireId
  );

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: CurrentLigneBudgetaire?.name || "",
      description: CurrentLigneBudgetaire?.description || "",
      budget: CurrentLigneBudgetaire?.budget || "",
    },
  });

  const onSubmit = async (values) => {
    const loading = toast.loading("Updating LigneBudgetaire...");
    values["id"] = LigneBudgetaireId; // Include LigneBudgetaireId in the request body for updating

    try {
      const response = await ActionsApi.EditLigneBudgetaire(values);

      if (response.status === 200 && response.data.ligneBudgetaire) {
        dispatch(
          EditLigneBudgetaireAction({ ligneBudgetaire: response.data.ligneBudgetaire })
        );
        toast.dismiss(loading);
        toast.success("LigneBudgetaire updated successfully");
      } else {
        throw new Error("Couldn't update LigneBudgetaire. Please try again later.");
      }
    } catch (e) {
      CatchActionForForms(e, form.setError, loading);
    }
  };

  return (
    <div className={"w-2/3 mx-auto my-10"}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className={"mt-4"}>
            <div className={"md:flex justify-between"}>
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
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className={"md:w-2/5"}>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Description..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className={"md:flex justify-between"}>
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem className={"md:w-2/5"}>
                    <FormLabel>Budget</FormLabel>
                    <FormControl>
                      <Input placeholder="Budget..." type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button className={"w-full"} type="submit">
            <span>Update LigneBudgetaire</span>
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EditLigneBudgetaire;
