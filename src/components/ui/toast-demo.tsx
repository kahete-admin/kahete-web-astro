"use client"
import { useToast } from "@/hooks/use-toast"
import { Button } from "./button"

export const ToastDemo = () => {
    const { toast } = useToast()

    return (
        <Button
            variant='destructive'
            onClick={() => {
                toast({
                    title: "Scheduled: Catch up",
                    description: "Friday, February 10, 2023 at 5:57 PM",
                })
            }}
        >
            Show Toast
        </Button>
    )
}