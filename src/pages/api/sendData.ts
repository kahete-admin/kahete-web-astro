import post from "axios";
import { Props } from "./send_form";

export const sendData = async ({ name, email, phone, country }: Props) => {
  try {
    // Send data to backend route
    const response = await post("http://localhost:3000/users/pre-release", {
      name,
      email,
      country,
      phone_number: phone,
    });

    // Handle success response
    console.log("Email sent successfully:", response.data);
    alert("Email sent successfully!");

    // Optionally, reset the form
    document.getElementById("contactForm").reset();
  } catch (error) {
    // Handle error
    console.error("Error sending email:", error);
    alert("Error sending email. Please try again later.");
  }
};
