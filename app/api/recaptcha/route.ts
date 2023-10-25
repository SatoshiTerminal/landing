import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const NEXT_PUBLIC_CAPTCHA_SECRET_KEY = process.env.NEXT_PUBLIC_CAPTCHA_SECRET_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.body;

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${NEXT_PUBLIC_CAPTCHA_SECRET_KEY}&response=${token}`
    );

    if (response.data.success) {
      res.status(200).json({ message: 'Success' });
    } else {
      res.status(400).json({ message: 'Failed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
