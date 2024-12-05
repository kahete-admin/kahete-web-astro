import { Button } from "@/components/ui/button";
import { RiGoogleFill, RiWhatsappFill, RiWhatsappLine, type RemixiconComponentType } from "@remixicon/react";
import { ArrowRight, CircleUserRound, Link, Mail, Phone, PhoneCall } from "lucide-react";

interface Props {
    image: string | null;
    title: string;
    bio: string;
    username: string;
    buttonType: string | null;
    buttonTitle: string;

}

export const ProfilePreview = ({ image, title, bio, username, buttonType, buttonTitle }: Props) => {
    const iconMap: Record<string, JSX.Element> = {
        "Whatsapp": <RiWhatsappLine aria-hidden="true" className="-ms-1 me-2" />,
        "Call": <Phone aria-hidden="true" className="-ms-1 me-2" />,
        "Email": <Mail aria-hidden="true" className="-ms-1 me-2" />,
        "Link": <Link aria-hidden="true" className="-ms-1 me-2" />,
        null: <span></span>,
    };

    const buttonIconType = (buttonType: string | undefined): JSX.Element | undefined => {
        if (buttonType === null) return;
        return iconMap[buttonType!];
    };

    return (
        <div className="flex flex-col items-center justify-center">

            {/* IMAGE */}
            <div
                className="image-container flex-shrink-0 relative"
                style={{
                    width: '150px',
                    height: '150px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: image ? 'transparent' : '#FFFFFF',
                    borderRadius: '55px',
                    overflow: 'hidden',
                }}
            >
                {image ? (
                    <img src={image} alt="Uploaded" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                    <CircleUserRound size={40} color="#8D8D8F" />
                )}
            </div>

            {/* Information */}
            <div className="flex flex-col text-center justify-center pt-4 px-4 text-white w-full">
                <h1 className="text-base text-white font-semibold capitalize truncate">{username}</h1>
                <h6 className="text-sm text-white/80 font-thin line-clamp-2">{title}</h6>
                <p className="text-sm text-white/50 font-thin pt-2 line-clamp-4">{bio}</p>
            </div>

            {/* Buttons */}
            <div className="w-full p-4 flex justify-center">
                <Button className="group w-full" variant="secondarySelected">
                    {/* ICONS */}
                    {buttonIconType(buttonType!)}
                    {/* BUTTON TITLE  */}
                    {buttonTitle ? buttonTitle : <div className="bg-[#999999] h-4 w-48 rounded-full" />}
                </Button>
            </div>
        </div>
    )
}



