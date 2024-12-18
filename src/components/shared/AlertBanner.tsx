// Dependencies: pnpm install lucide-react

import { CheckCircle, CheckIcon, CircleAlertIcon, InfoIcon, ShieldAlert, TriangleAlert } from "lucide-react";

interface Props {
    type: "success" | "error" | "warning" | "info" | "default";
    message: string;
}

export default function AlertBanner({ type, message }: Props) {

    const renderIconType = (type: string) => {
        switch (type) {
            case "success":
                return <CheckCircle className="-mt-0.5 me-3 inline-flex text-success-700" size={16} strokeWidth={2} aria-hidden="true" />;
            case "error":
                return <CircleAlertIcon className="-mt-0.5 me-3 inline-flex text-danger-700" size={16} strokeWidth={2} aria-hidden="true" />;
            case "warning":
                return <TriangleAlert className="-mt-0.5 me-3 inline-flex text-warning-700" size={16} strokeWidth={2} aria-hidden="true" />;
            case "info":
                return <InfoIcon className="-mt-0.5 me-3 inline-flex text-primary-700" size={16} strokeWidth={2} aria-hidden="true" />;
            default:
                return <ShieldAlert className="-mt-0.5 me-3 inline-flex text-white" size={16} strokeWidth={2} aria-hidden="true" />;
        }
    };

    const renderBannerStyle = (type: string) => {
        switch (type) {
            case "success":
                return "bg-success-900/10 border-success-700";
            case "error":
                return "bg-danger-900/10 border-danger-700";
            case "warning":
                return "bg-warning-900/10 border-warning-700";
            case "info":
                return "bg-primary-900/10 border-primary-700";
            default:
                return "bg-white/10 border-white-700";
        }
    };

    return (
        <div className={`rounded-lg border px-4 py-3 my-3 ${renderBannerStyle(type)}`}>
            <p className="text-sm text-white mb-0 line-clamp-1">
                {renderIconType(type)}
                {message}
            </p>
        </div>
    );
}
