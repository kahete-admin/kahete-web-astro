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
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { FlagComponent, CountrySelect } from "@/components/ui/country-select";
import * as RPNInput from "react-phone-number-input";
import { PhoneInput } from "@/components/ui/phone-input";
import { useState } from "react";
import { CircleUserRound } from "lucide-react";

const formSchema = z.object({
    username:
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
    phone: z.string(),
    title:
        z.string()
            .min(3, {
                message: "Username must be at least 3 characters.",
            }),
    bio:
        z.string()
            .min(3, {
                message: "Username must be at least 3 characters.",
            })
});

export const Step1Form = () => {
    // TODO: CREATE CUSTOM HOOK
    const [value, setValue] = useState("");
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            phone: "",
            title: "",
            bio: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        window.alert(JSON.stringify(values));
        image ? window.alert('HAS IMAGE') : window.alert('No IMAGE');
        window.location.href = '/profile-creation/step-2';
    }

    const [image, setImage] = useState<string | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]; // Safe access to the first file

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                // FileReader returns a string (base64) or null
                if (typeof reader.result === 'string') {
                    setImage(reader.result); // Set the base64 image string
                }
            };

            reader.readAsDataURL(file);
        } else {
            // If no file is selected, reset image state to null
            setImage(null);
        }
    };

    return (
        <div className="pb-24">
            <div
                className="flex flex-col items-start justify-center pt-8 pb-4 "
            >
                <h2 className="title">Add profile details</h2>
                <h4 className="subtitle">Enter essential information</h4>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <label className="text-base text-white">
                        Photo </label>
                    <div className="space-y-2 flex gap-6 pb-4 ">
                        <div
                            className="image-container flex-shrink-0 relative"
                            style={{
                                width: '100px',
                                height: '100px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: image ? 'transparent' : '#FFFFFF',
                                borderRadius: '20px',
                                overflow: 'hidden',
                            }}
                        >
                            {image ? (
                                <img src={image} alt="Uploaded" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            ) : (
                                <CircleUserRound size={50} color="#8D8D8F" />
                            )}
                        </div>
                        <div>
                            <p className="text-sm text-[#9CA3AF] pb-2">
                                For the best results on all devices, use an image that's at least 800 x 800 pixels and 6MB or less.
                            </p>
                            <label
                                htmlFor="image-upload"
                                style={{
                                    padding: '10px 20px',
                                    backgroundColor: '#3D3D3F',
                                    color: 'white',
                                    border: 'none',
                                    cursor: 'pointer',
                                    marginTop: '20px',
                                    borderRadius: '20px',
                                    fontSize: '16px',
                                }}
                            >
                                Upload photo
                            </label>
                            <input
                                type="file"
                                id="image-upload"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ display: 'none' }}
                            />
                        </div>
                    </div>

                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <div className="space-y-2">
                                        <Label htmlFor="input-02">
                                            Name <span className="text-destructive">*</span>
                                        </Label>
                                        <Input autoCapitalize="off" placeholder="Enter your name" type="text" maxLength={12} {...field} />
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
                    {/* PHONE NUMBER */}
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <div className="space-y-2">
                                        <Label htmlFor="input-02">
                                            Phone number <span className="text-destructive">*</span>
                                        </Label>
                                        <RPNInput.default
                                            className="flex rounded-lg shadow-sm shadow-black/5 bg-[#191E21]"
                                            international
                                            flagComponent={FlagComponent}
                                            countrySelectComponent={CountrySelect}
                                            inputComponent={PhoneInput}
                                            placeholder="Enter phone number"
                                            {...field}
                                            onChange={(newValue) => setValue(newValue ?? "")}
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <div className="space-y-2">
                                        <Label htmlFor="input-02">
                                            Title <span className="text-destructive">*</span>
                                        </Label>
                                        <Input placeholder="Founder and CEO" type="text" maxLength={12} {...field} />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="bio"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <div className="space-y-2">
                                        <Label htmlFor="input-02">
                                            Bio <span className="text-destructive">*</span>
                                        </Label>
                                        <Textarea placeholder="Tell us about yourself" {...field} />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* TODO: Check the button position when error is shown */}
                    <Button type="submit" size={'full'} style={{ marginTop: 30 }}>Next</Button>
                </form>
            </Form>
        </div>
    );
};