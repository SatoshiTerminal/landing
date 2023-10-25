'use server';

import axios from 'axios';

export async function verifyCaptcha(token: string | null) {
  const res = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}&response=${token}`
  );
  if (res.data.success) {
    console.log(res.data);
    return 'success!';
  } else {
    throw new Error('Failed Captcha');
  }
}
