"use client";

import { file, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";

const formSchema = z.object({
  email: z.email(),
});

export const NextPage = ({ email, setEmail, handleNextStep }: any) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setEmail(values.email);
    handleNextStep();
  }

  return (
    <div className=" max-w-2xl -mt-6 ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <ChevronLeft type="prevSubmit" className="w-5 h-5 border mb-4 " />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-xl mt-2">
                  Log in
                </FormLabel>
                <FormDescription className="w-full">
                  Log in to enjoy your favorite dishes.
                </FormDescription>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your email address"
                    className="mt-4"
                    type={email}
                  />
                </FormControl>

                <FormControl>
                  <Input {...field} placeholder="Password" className="mt-5" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormDescription className="underline text-[14px] mt-3 text-gray-600">
            Forgot password ?
          </FormDescription>
          <Button type="submit" className="bg-gray-300 w-full mt-5">
            Let's go
          </Button>
          <FormLabel className="mt-5 flex justify-evenly text-gray-500">
            Don’t have an account?
            <a className="text-blue-400">Sign up</a>
          </FormLabel>
        </form>
      </Form>
    </div>
  );
};
// Iree123@
