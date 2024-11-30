import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Input } from "./input";

export const PhoneInput = forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({ className, ...props }, ref) => {
        return (
            <Input
                className={cn("-ms-px rounded-s-none shadow-none focus-visible:z-10", className)}
                ref={ref}
                {...props}
            />
        );
    },
);

PhoneInput.displayName = "PhoneInput";