import { WaitingListFormData } from "@/components/WaitingListForm";

export async function WaitingListSend(data: WaitingListFormData) {
  const apiEndpoint = "/api/waiting-list";

  return fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
    // Dont delete header 'Content-Type' because it will cause an error POST 400 (Bad Request)
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}
