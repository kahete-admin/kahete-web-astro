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
import { FlagComponent, CountrySelect } from "@/components/ui/country-select";
import * as RPNInput from "react-phone-number-input";
import { PhoneInput } from "@/components/ui/phone-input";
import { useState, type ChangeEvent } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ProfilePreview } from "../shared/profile/ProfilePreview";

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

    const [text, setText] = useState('');
    const [buttonType, setButtonType] = useState<string | null>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };
    const handleButtonType = (value: string) => {
        setButtonType(value);
    };

    const placeholderValue = (): string => {
        if (buttonType === "Link") return "Enter link";
        if (buttonType === "Email") return "Enter email";
        return "Enter data";

    }

    // TODO: Refactor the code below
    return (
        <div className="pb-12">
            <div className="flex flex-col items-start justify-center pt-8 pb-4">
                <h2 className="title">Add primary action</h2>
                <h4 className="subtitle">Enter essential information</h4>
            </div>

            {/* PREVIEW PROFILE */}
            <div className="border-2 border-white rounded-2xl mt-4 mb-6 py-4 px-2">
                <ProfilePreview image={"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                    username={"aaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaad iausiodpaspodioapsidoa psdaisd jioasjd ioasjdoiasj diopasj dopasjdpoasjdasoipdjaiosdjasoijdasoidjasoid asoidjoaisjdioasj dioasjdoiasj doipasjd aipsojdaiospdjasiodjasoid has dhasijdhaskldhaskjldhask ljdhas jkdhasjk dhasd jakshd aklsdhaskjldhasl kdhaskjdhas ljdkhas dlakhsjdhas aaa"}
                    title={"bbbbbbbbbbbb bbbbbb dsadasdasdsadhasdhjassadsak jdklasjd klasjdkl asjdklasjdaklsjdlkas dj aksljdaskljdalsk djaskldjaslkjd askljdaskldjas kldjaslkdjaslkdjasljdaskldjalskjdlaksjdasdbbbbbbbbbbb bbbbbbbbbbbbb bbbbbbbbb bbbbbb bbbbbbb bbbbbb bbbbbbb bbbbbb bbbbbbb bbbbbb bbbbbbb bbbbbb bbbbb bbbb bbb bbb bbb bbb bbb bbb bbb bbb bbbb bbbb bbbb bbbb bbbb bbbbb bbbbbb"}
                    bio={"ccccccccccccccccccc ccccccccccccccccccc ccccccccccccccccc cccccccccc cccccc cccccc ccccccc cccccccc ccccccc dausdjasijdiasohjdio sajdoi asj iodjasoidjas oidj apsodjopasjdoi asjd poiasjdpioasjdoipasjd oasijdaopi sdj asopdascccccc ccccccc cccc cccc cccc cccc cccc cccc cccc cccc cccc cccc cccc ccccc ccccc ccccc ccccc ccccc ccccc cccccc"}
                    buttonType={buttonType}
                    buttonTitle={text} />
            </div>

            {/* FORM INFO */}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    {/* TITLE */}
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
                                value={text}
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
                                {text.length}/{15}
                            </div>
                        </div>
                    </div>

                    {/* Button type */}
                    <div className="space-y-2">
                        <Label htmlFor="input-02">
                            Button type <span className="text-destructive">*</span>
                        </Label>
                        <Select onValueChange={handleButtonType}>
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

                    <div className={`space-y-2 ${buttonType === "Call" || buttonType === "Whatsapp" ? "shown" : "hidden"}`}>
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

                    <div className={`space-y-2 ${buttonType === "Email" || buttonType === "Link" ? "shown" : "hidden"}`}>
                        <div className={"space-y-2"}>
                            <Label htmlFor="input-02">
                                Button value
                                <span className="text-destructive">*</span>
                            </Label>
                            <Input placeholder={placeholderValue()} type="text" maxLength={12} />
                        </div>
                    </div>

                    {/* TODO: Check the button position when error is shown */}
                    <Button type="submit" size={'full'} >Next</Button>
                </form>
            </Form>
        </div >
    );
};