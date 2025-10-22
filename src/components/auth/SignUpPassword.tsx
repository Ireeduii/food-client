"use client";

import { z } from "zod";
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
import { ChevronLeft, Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  password: z.string().min(6).max(10),
  confirmPassword: z.string().min(6).max(10),
});

export const SignUpPassword = () => {
  const [isPassword, setIsPassword] = useState("password");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const togglePassword = () => {
    setIsPassword((prev) => {
      if (prev === "password") {
        return "text";
      } else {
        return "password";
      }
    });
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("values", values);
  }
  function stepBeforePage() {
    //
  }

  return (
    <div className="border rounded-xl max-w-2xl border-none">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <ChevronLeft
                  onClick={stepBeforePage}
                  className="w-5 h-5 border mb-4"
                />
                <FormLabel className="text-xl">Create new password</FormLabel>
                <FormDescription>
                  Set a new password with a combination of letters and numbers
                  for better security.
                </FormDescription>
                <FormControl>
                  <div>
                    <Input
                      placeholder="Password"
                      {...field}
                      type={isPassword}
                      className="mt-4"
                    />
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Confirm"
                    type={isPassword}
                    className="mt-4"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-3 mt-2">
            {isPassword === "password" ? (
              <Eye onClick={togglePassword} />
            ) : (
              <EyeClosed onClick={togglePassword} />
            )}
            <FormDescription>Show Password</FormDescription>
          </div>

          <Button type="submit" className="w-full bg-gray-400 mt-5">
            Create password
          </Button>
        </form>
      </Form>
    </div>
  );
};
