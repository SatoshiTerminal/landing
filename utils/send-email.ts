
import { WaitingListFormData } from '@/components/WaitingListForm';

export function sendEmail(data: WaitingListFormData) {
  const apiEndpoint = '/api/waitinglist';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response.message, response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}