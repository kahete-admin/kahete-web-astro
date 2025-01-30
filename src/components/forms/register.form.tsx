import { Label } from "../ui/label";
import { z } from "astro:content";
import { FormField, FormItem, FormControl, FormMessage, Form } from "../ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import axios from "axios";

export const PASSWORD_REGEX =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\.\-\=])[A-Za-z\d!@#$%^&*()_+\.\-\=]{8,}$/;

const formSchema = z.object({
    firstName:
        z.string()
            .min(4, {
                message: "Username must be at least 4 characters.",
            })
            .refine((value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value ?? ""), 'Name should contain only letters')
            .transform(username => username.trim().toLowerCase()),
    lastName:
        z.string()
            .min(4, {
                message: "Username must be at least 4 characters.",
            })
            .refine((value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value ?? ""), 'Name should contain only letters')
            .transform(username => username.trim().toLowerCase()),
    email:
        z.string()
            .refine((value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value ?? ""), 'Not a valid email')
            .transform(email => email.trim().toLowerCase()),
    password: z.custom((val) => {
        return typeof val === "string" ? PASSWORD_REGEX.test(val) : false;
    }, "Password must contain a minimum of 8 characters, including at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 symbol."),

});

export const RegisterForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",

        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        try {
            // TODO: delete dev url
            axios.post("RENDER/api/auth", values).then((response) => {
                console.log(response.data);
            });
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <div className="flex flex-col items-center justify-center py-4 ">
                <h2 className="title">Join Kahete</h2>
                <h4 className="subtitle">Create an account to get started</h4>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-base text-white">
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="space-y-2">
                                            <Label htmlFor="input-02">
                                                First Name <span className="text-destructive">*</span>
                                            </Label>
                                            <Input autoCapitalize="off" placeholder="Enter your name" type="text"{...field} />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="space-y-2">
                                            <Label htmlFor="input-02">
                                                Last Name <span className="text-destructive">*</span>
                                            </Label>
                                            <Input autoCapitalize="off" placeholder="Enter your name" type="text" {...field} />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="space-y-2">
                                            <Label htmlFor="input-02">
                                                Email address <span className="text-destructive">*</span>
                                            </Label>
                                            <Input autoCapitalize="off" placeholder="johndoe@gmail.com" type="email" {...field} />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="space-y-2">
                                            <Label htmlFor="input-02">
                                                Password <span className="text-destructive">*</span>
                                            </Label>
                                            <Input autoCapitalize="off" placeholder="Enter your password" type="password" {...field} />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="space-y-4">
                        <Button type="submit" size={'full'}>Register</Button>
                    </div>
                    <div className="flex flex-col items-center space-y-6 text-xs text-white/50">
                        <div className="text-center">
                            <span>
                                By clicking continue, you agree to Kahete's{' '}
                                <a href="/login" className="text-white underline">
                                    Terms of Service
                                </a>{' '}
                                and{' '}
                                <a href="/login" className="text-white underline">
                                    Privacy Policy
                                </a>.
                            </span>
                        </div>

                        <span className="text-center">
                            Already have an account?{' '}
                            <a href="/login" className="text-white underline">
                                Log in
                            </a>
                        </span>
                    </div>

                </form>
            </Form >
        </div >
    );
};