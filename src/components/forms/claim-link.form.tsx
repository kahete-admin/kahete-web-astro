"use client"
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    username:
        z.string()
            .min(2, {
                message: "Username must be at least 2 characters.",
            })
            .refine((value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value ?? ""), 'Name should contain only letters'),
});



export const ClaimLinkForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div>
            <div
                className="flex flex-col items-start justify-center py-4 "
            >
                <h2 className="title">Claim your unique link</h2>
                <h4 className="subtitle">The good ones are still available!</h4>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <div className="pt-4">
                                        <div className="relative">
                                            <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-4 text-base text-white peer-disabled:opacity-50">
                                                kahete.com/
                                            </span>
                                            <Input className="peer ps-28 text-base" placeholder="johndoe" type="text" maxLength={12} required {...field} />
                                            {/* Check icon */}
                                            {/* <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                                            <CircleCheck color="green" size={16} strokeWidth={2} aria-hidden="true" />
                                        </div> */}
                                        </div>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="pt-[60svh]">
                        <Button type="submit" size={'full'}>Submit</Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};
