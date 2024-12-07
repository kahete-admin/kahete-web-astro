import { Button } from "@/components/ui/button";
import { RiWhatsappLine } from "@remixicon/react";
import { CircleUserRound, Link, Mail, Phone } from "lucide-react";
import type { ReactNode } from "react";

interface Props {
    primaryButtonType: string | null;
    primaryButtonText?: string;
    secondaryButtonType?: string | null;
    tertiaryButtonType?: string | null;
    isPrimaryActionSelected?: boolean;
    isSecondaryActionSelected?: boolean;
    isTertiaryActionSelected?: boolean;

}

export const ProfilePreview = ({ primaryButtonType, secondaryButtonType, tertiaryButtonType, primaryButtonText, isPrimaryActionSelected, isSecondaryActionSelected, isTertiaryActionSelected }: Props) => {
    const iconMapLarge: Record<string, JSX.Element> = {
        "Whatsapp": <RiWhatsappLine aria-hidden="true" className="-ms-1 me-2" />,
        "Call": <Phone aria-hidden="true" className="-ms-1 me-2" />,
        "Email": <Mail aria-hidden="true" className="-ms-1 me-2" />,
        "Link": <Link aria-hidden="true" className="-ms-1 me-2" />,
        null: <span></span>,
    };

    const iconMap: Record<string, JSX.Element> = {
        "Whatsapp": <RiWhatsappLine aria-hidden="true" className="h-4 w-4" />,
        "Call": <Phone aria-hidden="true" className="h-4 w-4" />,
        "Email": <Mail aria-hidden="true" className="h-4 w-4" />,
        "Link": <Link aria-hidden="true" className="h-4 w-4" />,
        null: <span></span>,
    };

    const dummyData = {
        image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        username: "aaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaad iausiodpaspodioapsidoa psdaisd jioasjd ioasjdoiasj diopasj dopasjdpoasjdasoipdjaiosdjasoijdasoidjasoid asoidjoaisjdioasj dioasjdoiasj doipasjd aipsojdaiospdjasiodjasoid has dhasijdhaskldhaskjldhask ljdhas jkdhasjk dhasd jakshd aklsdhaskjldhasl kdhaskjdhas ljdkhas dlakhsjdhas aaa",
        title: "bbbbbbbbbbbb bbbbbb dsadasdasdsadhasdhjassadsak jdklasjd klasjdkl asjdklasjdaklsjdlkas dj aksljdaskljdalsk djaskldjaslkjd askljdaskldjas kldjaslkdjaslkdjasljdaskldjalskjdlaksjdasdbbbbbbbbbbb bbbbbbbbbbbbb bbbbbbbbb bbbbbb bbbbbbb bbbbbb bbbbbbb bbbbbb bbbbbbb bbbbbb bbbbbbb bbbbbb bbbbb bbbb bbb bbb bbb bbb bbb bbb bbb bbb bbbb bbbb bbbb bbbb bbbb bbbbb bbbbbb",
        bio: "ccccccccccccccccccc ccccccccccccccccccc ccccccccccccccccc cccccccccc cccccc cccccc ccccccc cccccccc ccccccc dausdjasijdiasohjdio sajdoi asj iodjasoidjas oidj apsodjopasjdoi asjd poiasjdpioasjdoipasjd oasijdaopi sdj asopdascccccc ccccccc cccc cccc cccc cccc cccc cccc cccc cccc cccc cccc ccccc ccccc ccccc ccccc ccccc ccccc cccccc"
    }

    const buttonIconType = (buttonType: string | undefined): JSX.Element | undefined => {
        if (buttonType === null) return;
        return iconMapLarge[buttonType!];
    };

    const iconTypeSecondary = (buttonType: string | undefined): JSX.Element | undefined => {
        if (buttonType === null) return;
        return iconMap[buttonType!];
    };

    const iconTypeTertiary = (buttonType: string | undefined): JSX.Element | undefined => {
        if (buttonType === null) return;
        return iconMap[buttonType!];
    };

    const renderButtons = (): ReactNode => {
        return (
            <div className="w-full p-4 flex justify-center gap-4">
                <Button
                    className="group max-w-full min-w-[60%]"
                    variant={isPrimaryActionSelected ? "secondarySelected" : "secondary"}
                    size="full"
                >
                    {buttonIconType(primaryButtonType!)}
                    {primaryButtonText ? primaryButtonText : <div className="bg-[#999999] h-4 w-32 rounded-full" />}
                </Button>

                {primaryButtonText && primaryButtonType && (
                    <Button
                        className="group max-w-12 w-full justify-center align-middle items-center"
                        variant={isSecondaryActionSelected ? "actionSelected" : "action"}
                        size="icon"
                    >
                        {secondaryButtonType ? iconTypeSecondary(secondaryButtonType!) : <div className="bg-[#999999] h-4 w-4 rounded-full" />}
                    </Button>
                )}

                {secondaryButtonType && (
                    <Button
                        className="group max-w-12 w-full justify-center align-middle items-center"
                        variant={isTertiaryActionSelected ? "actionSelected" : "action"}
                        size="icon"
                    >
                        {tertiaryButtonType ? iconTypeTertiary(tertiaryButtonType!) : <div className="bg-[#999999] h-4 w-4 rounded-full" />}
                    </Button>
                )}
            </div>
        );
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
                    backgroundColor: dummyData.image ? 'transparent' : '#FFFFFF',
                    borderRadius: '55px',
                    overflow: 'hidden',
                }}
            >
                {dummyData.image ? (
                    <img src={dummyData.image} alt="Uploaded" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                    <CircleUserRound size={40} color="#8D8D8F" />
                )}
            </div>

            {/* Information */}
            <div className="flex flex-col text-center justify-center pt-4 px-4 text-white w-full">
                <h1 className="text-base text-white font-semibold capitalize truncate">{dummyData.username}</h1>
                <h6 className="text-sm text-white/80 font-thin line-clamp-2">{dummyData.title}</h6>
                <p className="text-sm text-white/50 font-thin pt-2 line-clamp-4">{dummyData.bio}</p>
            </div>

            {/* Buttons */}
            {renderButtons()}
        </div >
    )
}



