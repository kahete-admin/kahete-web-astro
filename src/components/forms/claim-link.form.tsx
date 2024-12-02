"use client"
import { Button } from "../ui/button";

// const formSchema = z.object({
//     username: z.string().min(2).max(50),
// })


export const ClaimLinkForm = () => {
    // 1. Define your form.
    // const form = useFormImport<z.infer<typeof formSchema>>({
    //     resolver: zodResolver(formSchema),
    //     defaultValues: {
    //         username: "",
    //     },
    // })

    // 2. Define a submit handler.
    // function onSubmit(values: z.infer<typeof formSchema>) {
    //     // Do something with the form values.
    //     // ✅ This will be type-safe and validated.
    //     console.log(values)
    // }
    return (
        // <div className="items-center justify-center w-full pt-12 px-4">
        //     {/* With Icon and label */}
        //     <div className="pt-4">
        //         <div className="relative">
        //             <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm text-white peer-disabled:opacity-50">
        //                 kahete.com/
        //             </span>
        //             <Input className="peer ps-24" placeholder="your-name" type="text" maxLength={12} />
        //             {/* Check icon */}
        //             <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
        //                 <CircleCheck color="green" size={16} strokeWidth={2} aria-hidden="true" />
        //             </div>
        //         </div>
        //     </div>
        //     <Button>DASdas</Button>
        // </div >
            // <FormField
            //     control={form.control}
            //     name="username"
            //     render={({ field }) => (
            //         <FormItem>
            //             <FormLabel>Username</FormLabel>
            //             <FormControl>
            //                 <Input placeholder="shadcn" {...field} />
            //             </FormControl>
            //             <FormDescription>This is your public display name.</FormDescription>
            //             <FormMessage />
            //         </FormItem>
            //     )}
            // />
            <Button>DASdas</Button>
    );

};
