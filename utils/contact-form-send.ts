import { ContactFormData } from "@/components/ContactForm";

export async function ContactFormSend(data: ContactFormData) {
  const apiEndpoint = "/api/contact-form";

  return fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}
