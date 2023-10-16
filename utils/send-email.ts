
import { WaitingListFormData } from '@/components/WaitingListForm';

export function sendEmail(data: WaitingListFormData) {
  const apiEndpoint = 'http://localhost:3000/api/waiting-list';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response.message);
    })
    .catch((err) => {
      console.log(err);
    });
}