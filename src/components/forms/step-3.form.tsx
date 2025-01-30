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
import { useState, type ChangeEvent } from "react";
import { RiAddLine, RiDiscordFill, RiFacebookCircleFill, RiImage2Line, RiInstagramLine, RiLinkedinBoxFill, RiSpotifyFill, RiTwitterXFill, RiYoutubeFill } from "@remixicon/react";
import { Textarea } from "../ui/textarea";
import { BottomSheetContainer } from "../shared/BottomSheetContainer";
import { X } from "lucide-react";

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
    phone: z.string(),
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

export const Step3Form = () => {
    // TODO: CREATE CUSTOM HOOK
    const [value, setValue] = useState("");
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            phone: "",
            title: "",
            bio: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        window.alert(JSON.stringify(values));
        image ? window.alert('HAS IMAGE') : window.alert('No IMAGE');
        window.location.href = '/profile-creation/step-2';
    }

    const [image, setImage] = useState<string | null>(null);
    const [websiteTitle, setWebsiteTitle] = useState('');
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setWebsiteTitle(event.target.value);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]; // Safe access to the first file

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                // FileReader returns a string (base64) or null
                if (typeof reader.result === 'string') {
                    setImage(reader.result); // Set the base64 image string
                }
            };

            reader.readAsDataURL(file);
        } else {
            // If no file is selected, reset image state to null
            setImage(null);
        }
    };

    const [openDropdown, setOpenDropdown] = useState<boolean>(false);

    return (
        <div className="pb-24">
            <div className="flex flex-col items-start justify-center pt-8 pb-4">
                <h2 className="title">Add Links</h2>
                <h4 className="subtitle">Enter essential information</h4>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <Label>Social media</Label>
                    <div className="flex gap-2">
                        <RiFacebookCircleFill className="h-10 w-10 p-1 text-white/70"></RiFacebookCircleFill>
                        <Input className="text-base" placeholder="https://www.facebook.com/" type="text" />
                    </div>
                    <div className="flex gap-2">
                        <RiLinkedinBoxFill className="h-10 w-10 p-1 text-white/70"></RiLinkedinBoxFill>
                        <Input className="text-base" placeholder="https://www.facebook.com/" type="text" />
                    </div>
                    <div className="flex gap-2">
                        <RiYoutubeFill className="h-10 w-10 p-1 text-white/70"></RiYoutubeFill>
                        <Input className="text-base" placeholder="https://www.facebook.com/" type="text" />
                    </div>
                    <div className="flex gap-2">
                        <RiInstagramLine className="h-10 w-10 p-1 text-white/70"></RiInstagramLine>
                        <Input className="text-base" placeholder="https://www.facebook.com/" type="text" />
                    </div>
                    <div className="flex gap-2">
                        <RiSpotifyFill className="h-10 w-10 p-1 text-white/70"></RiSpotifyFill>
                        <Input className="text-base" placeholder="https://www.facebook.com/" type="text" />
                    </div>
                    <div className="flex gap-2">
                        <RiDiscordFill className="h-10 w-10 p-1 text-white/70"></RiDiscordFill>
                        <Input className="text-base" placeholder="https://www.facebook.com/" type="text" />
                    </div>
                    <div className="flex gap-2">
                        <RiTwitterXFill className="h-10 w-10 p-1 text-white/70"></RiTwitterXFill>
                        <Input className="text-base" placeholder="https://www.facebook.com/" type="text" />
                    </div>
                    {/*  */}
                    <div className="pt-4 space-y-4">
                        <Label className="block">Add your own links</Label>
                        <Button variant="action" size={'sm'} className="pr-4" onClick={() => setOpenDropdown(true)}>
                            <RiAddLine className="-ms-1 me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
                            Add Link
                        </Button>
                    </div>

                    {/* BOTTOM SHEET */}
                    <BottomSheetContainer open={openDropdown}>
                        {/* TODO: EXPORT TO A SEPARATE COMPONENT */}
                        <X className="text-white/50 absolute right-4" onClick={() => setOpenDropdown(false)}></X>
                        <div className="space-y-4 px-8 max-w-lg mx-auto cursor-pointer">
                            <div className="flex flex-col items-start justify-center pt-8">
                                <h2 className="title">Add Links</h2>
                                <h4 className="subtitle">Enter essential information</h4>
                            </div>
                            <FormItem>
                                <FormControl>
                                    <div className="space-y-2">
                                        <Label htmlFor="input-02">
                                            Title
                                        </Label>
                                        <div className="relative">
                                            <Input
                                                id="input-34"
                                                className="peer pe-14"
                                                type="text"
                                                placeholder="Enter title"
                                                value={websiteTitle}
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
                                                {websiteTitle.length}/{15}
                                            </div>
                                        </div>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            <FormItem>
                                <FormControl>
                                    <div className="space-y-2">
                                        <Label htmlFor="input-02">
                                            Link
                                        </Label>
                                        <Input placeholder="Enter website URL" type="text" />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            <FormItem>
                                <FormControl>
                                    <div className="space-y-2">
                                        <Label htmlFor="input-02">
                                            Description
                                        </Label>
                                        <Textarea placeholder="Tell us about yourself" />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            {/* THUMBNAIL */}
                            <div>
                                <Label>Thumbnail</Label>
                                <p className="text-sm text-white/50">For the best results on all devices, use an image that’s at least 1920 x 1080 pixels and 6MB or less. </p>
                            </div>
                            <div className="space-y-2 flex gap-6">
                                <div
                                    className="image-container flex-shrink-0 relative"
                                    style={{
                                        width: '100%',
                                        height: '200px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: image ? 'transparent' : 'transparent',
                                        border: '1px dashed #FFFFFF',
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                    }}
                                >
                                    {image ? (
                                        <div>
                                            <img src={image} alt="Uploaded" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                    ) : (
                                        <div>
                                            <Label
                                                htmlFor="image-upload"
                                                style={{
                                                    padding: '10px 20px',
                                                    backgroundColor: '#3D3D3F',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    color: 'white',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    marginTop: '20px',
                                                    borderRadius: '20px',
                                                    fontSize: '16px',
                                                    width: '100%',
                                                    display: 'flex',
                                                    gap: '10px',
                                                }}
                                            >
                                                <RiImage2Line />
                                                Add Image
                                            </Label>
                                            <input
                                                type="file"
                                                id="image-upload"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                style={{ display: 'none' }}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            {
                                image ?
                                    <div>
                                        <Label
                                            htmlFor="image-upload"
                                            className="w-4/6"
                                            style={{
                                                padding: '10px 20px',
                                                backgroundColor: '#3D3D3F',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                color: 'white',
                                                border: 'none',
                                                cursor: 'pointer',
                                                marginTop: '20px',
                                                borderRadius: '20px',
                                                fontSize: '16px',
                                                display: 'flex',
                                                gap: '10px',
                                            }}
                                        >
                                            <RiImage2Line />
                                            Change Image
                                        </Label>
                                        <input
                                            type="file"
                                            id="image-upload"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            style={{ display: 'none' }}
                                        />
                                    </div> : <div />}
                            {/* SAVE BUTTON */}
                            <Button type="submit" size={'full'} style={{ marginTop: 30, marginBottom: 50 }} onClick={() => setOpenDropdown(false)}>Save</Button>
                        </div>
                    </BottomSheetContainer>

                    {/* TODO: Check the button position when error is shown */}
                    <Button type="submit" size={'full'} style={{ marginTop: 50 }}>Next</Button>
                </form>
            </Form>
        </div >
    );
};
