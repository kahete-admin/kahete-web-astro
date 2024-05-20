export default interface ContactButtonProps {
    buttonType: "WhatsApp" | "Phone" | "Email";
    email?: string;
    phone?: string;
    whatsapp?: string;
}
