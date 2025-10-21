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
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  password: z.string().min(6, "6 aas deesh bichde").max(10),
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
    console.log(values);
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
                <FormLabel className="text-xl">
                  Create a strong password
                </FormLabel>
                <FormDescription>
                  Create a strong password with letters, numbers.
                </FormDescription>
                <FormControl>
                  <div>
                    <Input
                      placeholder="Password"
                      {...field}
                      type={isPassword}
                    />
                    {isPassword === "password" ? (
                      <Eye onClick={togglePassword} />
                    ) : (
                      <EyeClosed onClick={togglePassword} />
                    )}
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
                  <Input placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-gray-400">
            Let's go
          </Button>
        </form>
      </Form>
    </div>
  );
};
