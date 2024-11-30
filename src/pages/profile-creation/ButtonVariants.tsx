// TODO: !IMPORTANT DELETE THIS FILE


import { Input } from "@/components/ui/input";
import { AtSign, CircleCheck, Mail } from "lucide-react";
import { PhoneInput } from "@/components/ui/phone-input";
import { useState } from "react";
import { FlagComponent, CountrySelect } from "@/components/ui/country-select";
import * as RPNInput from "react-phone-number-input";

export const ButtonVariants = () => {
    const [value, setValue] = useState("");
    return (
        <div className="items-center justify-center w-full pt-12 px-4">
            {/* Regular */}
            <Input placeholder="Email" type="email" />
            {/* With icon */}
            <div className="pt-4">
                <div className="relative">
                    <Input id="input-09" className="peer ps-9" placeholder="Email" type="email" />
                    <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                        <AtSign size={16} strokeWidth={2} aria-hidden="true" />
                    </div>
                </div>
            </div>

            {/* With label */}
            <div className="pt-4">
                <div className="relative">
                    <Input className="peer ps-24" placeholder="your-name" type="text" maxLength={12} />
                    <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm text-white peer-disabled:opacity-50">
                        kahete.com/
                    </span>
                </div>
            </div>

            {/* With Icon at the end  */}
            <div className="pt-4">
                <div className="relative">
                    <Input id="input-10" className="peer pe-9" placeholder="Email" type="email" />
                    <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                        <Mail size={16} strokeWidth={2} aria-hidden="true" />
                    </div>
                </div>
            </div>

            {/* With Icon and label */}
            <div className="pt-4">
                <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm text-white peer-disabled:opacity-50">
                        kahete.com/
                    </span>
                    <Input className="peer ps-24" placeholder="your-name" type="text" maxLength={12} />
                    {/* Check icon */}
                    <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                        <CircleCheck color="green" size={16} strokeWidth={2} aria-hidden="true" />
                    </div>
                </div>
            </div>

            {/* PHONE */}
            <div className="pt-4" dir="ltr">
                <RPNInput.default
                    className="flex rounded-lg shadow-sm shadow-black/5 bg-[#191E21]"
                    international
                    flagComponent={FlagComponent}
                    countrySelectComponent={CountrySelect}
                    inputComponent={PhoneInput}
                    id="input-46"
                    placeholder="Enter phone number"
                    value={value}
                    onChange={(newValue) => setValue(newValue ?? "")}
                />
            </div>

        </div >
    );
};
