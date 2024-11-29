'use client'

import { ToastAction } from "@/components/ui/toast"
import { toast as toaster } from "sonner"
import { Toaster as ToasterSonner } from "@/components/ui/sonner"
import { Toaster } from '@/components/ui/toaster';

export const GlobalToasters = () => {
    return (
        <Toaster />
    );
};
