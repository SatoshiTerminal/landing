
import { WaitingListFormData } from '@/components/WaitingListForm';

export function sendEmail(data: WaitingListFormData) {
  // const apiEndpoint = '/api/waiting-list';
  const apiEndpoint = 'https://satoshiterminal.io/api/waiting-list';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
    // Dont delete header 'Content-Type' because it will cause an error POST 400 (Bad Request)
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response.message, response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}