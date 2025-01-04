import { Button } from "@/components/ui/button";
import { BottomSheetContainer } from "../BottomSheetContainer";
import { useState } from "react";
import { Ellipsis, Link, X } from "lucide-react";
import QRCode from "react-qr-code";
import { toast } from "@/hooks/use-toast";

// TODO: Create a profile interface for easier destructuring
interface Props {
    profile_url: string;
    profile_image?: string;
    username: string;
    title: string;
}


export const ShareProfile = ({ profile_url, username, title, profile_image }: Props) => {
    const [openDropdown, setOpenDropdown] = useState<boolean>(false);
    const copyToClipboard = () => {
        navigator.clipboard.writeText(profile_url);
        return toast({
            title: "Copied to clipboard",
        });
    };
    return (
        <>
            <Button variant="secondary" size="icon" onClick={() => setOpenDropdown(true)}>
                <Ellipsis className="h-4 w-4" />
            </Button>
            <BottomSheetContainer open={openDropdown}>
                <X className="text-white/50 absolute right-4 cursor-pointer" onClick={() => setOpenDropdown(false)}></X>
                <div className="space-y-4 px-8 max-w-lg mx-auto cursor-pointer">
                    <div className="space-y-4 pt-12 pb-4">
                        <div className="flex">
                            {profile_image ? <img src={profile_image} alt="Profile" className="bg-[#999999] min-h-24 min-w-24 max-h-24 max-w-24 rounded-3xl object-cover" /> : <div className="bg-[#999999] h-24 w-24 rounded-3xl" />}
                            <div className="flex flex-col pl-4 items-start">
                                <p className="text-start text-white font-semibold capitalize line-clamp-1">{username}</p>
                                <h6 className="text-start text-white/80 font-thin line-clamp-1">{title}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center p-12 space-y-4 bg-white rounded-3xl">
                        <div style={{ height: "auto", width: "100%" }}>
                            <QRCode
                                size={256}
                                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                value={JSON.stringify(profile_url)}
                                viewBox={`0 0 256 256`}
                            />
                        </div>
                    </div>
                    <Button variant={"action"} size={"full"} onClick={copyToClipboard}>
                        <Link className="h-4 w-4" />
                        Copy Link</Button>
                </div>
            </BottomSheetContainer>
        </>

    )
}