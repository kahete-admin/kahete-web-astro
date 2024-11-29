// TODO: !IMPORTANT DELETE THIS FILE

import { toast as sonner } from "sonner"
import { Toaster as ToasterSonner } from "@/components/ui/sonner"
import { Toaster } from '@/components/ui/toaster';
import { useToast } from "@/hooks/use-toast"
import { AtSign, Mail, MessageCircleMore, MessagesSquare, Phone } from "lucide-react";

import { Button } from "@/components/ui/button"
import { ToastAction } from "@radix-ui/react-toast";

export const ButtonVariants = () => {
    const { toast } = useToast()

    return (
        <div className="flex flex-col gap-4 px-4 lg:max-w-screen-sm mx-auto pt-12 pb-25">
            <Button>Default</Button>
            <Button variant="disabled">Disabled</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="action">Action</Button>
            <Button variant="destructive">Destructive</Button>
            <Button
                variant="link"
                onClick={() => {
                    toast({
                        title: "Scheduled: Catch up ",
                        description: "Friday, February 10, 2023 at 5:57 PM",
                        action: (
                            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                        ),
                    })
                }}
            >
                Link
            </Button>
            <Button variant="ghost" onClick={() =>
                sonner("Event has been created", {
                    description: "Sunday, December 03, 2023 at 9:00 AM",
                    action: {
                        label: "Undo",
                        onClick: () => console.log("Undo"),
                    },
                })}> Open sonner</Button>
            {/* ADD */}
            <Button>
                <Phone size={16} strokeWidth={2} aria-hidden="true" />
                <span className="">Add new</span>
            </Button>
            <div className="flex gap-4 mx-auto">
                <Button size='icon' variant='action'>
                    <Phone size={16} strokeWidth={2} aria-hidden="true" />
                </Button>
                <Button size='icon' variant='action'>
                    <AtSign size={16} strokeWidth={2} aria-hidden="true" />
                </Button>
                <Button size='icon' variant='action'>
                    <Mail size={16} strokeWidth={2} aria-hidden="true" />
                </Button>
                <Button size='icon' variant='action'>
                    <MessageCircleMore size={16} strokeWidth={2} aria-hidden="true" />
                </Button>
                <Button size='icon' variant='action'>
                    <MessagesSquare size={16} strokeWidth={2} aria-hidden="true" />
                </Button>
            </div>
        </div >
    );
};