"use client"
import * as RPNInput from "react-phone-number-input";
import { Button } from "../ui/button";
import { FlagComponent, CountrySelect } from "@/components/ui/country-select";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import { ProfilePreview } from "../shared/profile/ProfilePreview";
import { useForm } from "react-hook-form";
import { useState, type ChangeEvent } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


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

export const Step2Form = () => {
    // TODO: CREATE CUSTOM HOOK
    const [value, setValue] = useState("");
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            title: "",
            bio: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        window.alert(JSON.stringify(values));
    }

    const [primaryButtonText, setPrimaryButtonText] = useState('');
    const [primaryButtonType, setPrimaryButtonType] = useState<string | null>(null);
    const [secondaryButtonType, setSecondaryButtonType] = useState<string | null>(null);
    const [tertiaryButtonType, setTertiaryButtonType] = useState<string | null>(null);

    const handlePrimaryButtonType = (value: string) => {
        setPrimaryButtonType(value);
    };

    const handleSecondaryButtonType = (value: string) => {
        setSecondaryButtonType(value);
    };

    const handleTertiaryButtonType = (value: string) => {
        setTertiaryButtonType(value);
    };


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPrimaryButtonText(event.target.value);
    };

    const placeholderValue = (): string => {
        if (primaryButtonType === "Link") return "Enter link";
        if (primaryButtonType === "Email") return "Enter email";
        return "Enter data";

    }

    const [openIndex, setOpenIndex] = useState('1'); // Track the open accordion item by index

    const handleAccordionChange = (value: string) => {
        if (value === '0') setOpenIndex('1');
        setOpenIndex(value);
    };

    // TODO: Refactor the code below
    return (
        <div className="pb-12">
            <div className="flex flex-col items-start justify-center pt-8 pb-4">
                <h2 className="title">Add actions</h2>
                <h4 className="subtitle">Enter essential information</h4>
            </div>

            {/* PREVIEW PROFILE */}
            <div className="border-2 border-white rounded-2xl mt-4 mb-6 py-4 px-2">
                <ProfilePreview
                    primaryButtonText={primaryButtonText}
                    primaryButtonType={primaryButtonType}
                    secondaryButtonType={secondaryButtonType}
                    tertiaryButtonType={tertiaryButtonType}
                    isPrimaryActionSelected={openIndex === '1' ? true : false}
                    isSecondaryActionSelected={openIndex === '2' ? true : false}
                    isTertiaryActionSelected={openIndex === '3' ? true : false}
                />
            </div>

            {/* FORM INFO */}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="">
                    <Accordion type="single" className="w-full" value={openIndex} onValueChange={handleAccordionChange} >
                        <AccordionItem value="1">
                            <AccordionTrigger><span>Primary action <span className="text-destructive">*</span></span></AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-6 pb-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="input-02">
                                            Title <span className="text-destructive">*</span>
                                        </Label>
                                        <div className="relative">
                                            <Input
                                                id="input-34"
                                                className="peer pe-14"
                                                type="text"
                                                placeholder="Enter title"
                                                value={primaryButtonText}
                                                maxLength={15}
                                                onChange={handleChange}
                                                aria-describedby="character-count"
                                            />
                                            <div
                                                id="character-count"
                                                className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-xs tabular-nums text-muted-foreground peer-disabled:opacity-50"
                                                aria-live="polite"
                                                role="status"
                                            >
                                                {primaryButtonText.length}/{15}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Button type */}
                                    <div className="space-y-2">
                                        <Label htmlFor="input-02">
                                            Button type <span className="text-destructive">*</span>
                                        </Label>
                                        <Select onValueChange={handlePrimaryButtonType}>
                                            <SelectTrigger id="select-15">
                                                <SelectValue placeholder="Select action type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Whatsapp">Whatsapp</SelectItem>
                                                <SelectItem value="Call">Call</SelectItem>
                                                <SelectItem value="Email">Email</SelectItem>
                                                <SelectItem value="Link">Link</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className={`space-y-2 ${primaryButtonType === "Call" || primaryButtonType === "Whatsapp" ? "shown" : "hidden"}`}>
                                        <div className={"space-y-2"}>
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
                                                value={''}
                                                onChange={(newValue) => setValue(newValue ?? "")}
                                            />
                                        </div>
                                    </div>

                                    <div className={`space-y-2 ${primaryButtonType === "Email" || primaryButtonType === "Link" ? "shown" : "hidden"}`}>
                                        <div className={"space-y-2"}>
                                            <Label htmlFor="input-02">
                                                Button value
                                                <span className="text-destructive">*</span>
                                            </Label>
                                            <Input placeholder={placeholderValue()} type="text" maxLength={12} />
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        {primaryButtonText && primaryButtonType && (
                            <AccordionItem value="2">
                                <AccordionTrigger>Secondary action</AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-6 pb-4">
                                        {/* Button type */}
                                        <div className="space-y-2">
                                            <Label htmlFor="input-02">
                                                Button type
                                            </Label>
                                            <Select onValueChange={handleSecondaryButtonType}>
                                                <SelectTrigger id="select-15">
                                                    <SelectValue placeholder="Select action type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Whatsapp">Whatsapp</SelectItem>
                                                    <SelectItem value="Call">Call</SelectItem>
                                                    <SelectItem value="Email">Email</SelectItem>
                                                    <SelectItem value="Link">Link</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className={`space-y-2 ${secondaryButtonType === "Call" || secondaryButtonType === "Whatsapp" ? "shown" : "hidden"}`}>
                                            <div className={"space-y-2"}>
                                                <Label htmlFor="input-02">
                                                    Phone number
                                                </Label>
                                                <RPNInput.default
                                                    className="flex rounded-lg shadow-sm shadow-black/5 bg-[#191E21]"
                                                    international
                                                    flagComponent={FlagComponent}
                                                    countrySelectComponent={CountrySelect}
                                                    inputComponent={PhoneInput}
                                                    placeholder="Enter phone number"
                                                    value={''}
                                                    onChange={(newValue) => setValue(newValue ?? "")}
                                                />
                                            </div>
                                        </div>

                                        <div className={`space-y-2 ${secondaryButtonType === "Email" || secondaryButtonType === "Link" ? "shown" : "hidden"}`}>
                                            <div className={"space-y-2"}>
                                                <Label htmlFor="input-02">
                                                    Button value
                                                </Label>
                                                <Input placeholder={placeholderValue()} type="text" maxLength={12} />
                                            </div>
                                        </div>

                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        )}

                        {secondaryButtonType && (
                            <AccordionItem value="3">
                                <AccordionTrigger>Tertiary action</AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-6 pb-4">
                                        {/* Button type */}
                                        <div className="space-y-2">
                                            <Label htmlFor="input-02">
                                                Button type
                                            </Label>
                                            <Select onValueChange={handleTertiaryButtonType}>
                                                <SelectTrigger id="select-15">
                                                    <SelectValue placeholder="Select action type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Whatsapp">Whatsapp</SelectItem>
                                                    <SelectItem value="Call">Call</SelectItem>
                                                    <SelectItem value="Email">Email</SelectItem>
                                                    <SelectItem value="Link">Link</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className={`space-y-2 ${tertiaryButtonType === "Call" || tertiaryButtonType === "Whatsapp" ? "shown" : "hidden"}`}>
                                            <div className={"space-y-2"}>
                                                <Label htmlFor="input-02">
                                                    Phone number
                                                </Label>
                                                <RPNInput.default
                                                    className="flex rounded-lg shadow-sm shadow-black/5 bg-[#191E21]"
                                                    international
                                                    flagComponent={FlagComponent}
                                                    countrySelectComponent={CountrySelect}
                                                    inputComponent={PhoneInput}
                                                    placeholder="Enter phone number"
                                                    value={''}
                                                    onChange={(newValue) => setValue(newValue ?? "")}
                                                />
                                            </div>
                                        </div>

                                        <div className={`space-y-2 ${tertiaryButtonType === "Email" || tertiaryButtonType === "Link" ? "shown" : "hidden"}`}>
                                            <div className={"space-y-2"}>
                                                <Label htmlFor="input-02">
                                                    Button value
                                                </Label>
                                                <Input placeholder={placeholderValue()} type="text" maxLength={12} />
                                            </div>
                                        </div>

                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        )}


                    </Accordion>

                    {/* TODO: Check the button position when error is shown */}
                    <Button type="submit" size={'full'} disabled={!primaryButtonType || !primaryButtonText}>Next</Button>
                </form>
            </Form>
        </div >
    );
};