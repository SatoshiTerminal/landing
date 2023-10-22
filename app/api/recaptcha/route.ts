import type { NextApiRequest, NextApiResponse } from 'next';

type RecaptchaRequestBody = {
  token: string;
  sitekey: string;
};

type RecaptchaResponseBody = {
  success: boolean;
  message?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RecaptchaResponseBody>
) {
  if (req.method === 'POST') {
    const { token, sitekey } = req.body as RecaptchaRequestBody;

    // TODO: Verify recaptcha token with sitekey

    // If token is valid, return success true
    res.status(200).json({ success: true });
    
    // If token is invalid or expired, return success false with message
    // res.status(200).json({ success: false, message: 'EXPIRED' });
  } else {
    res.status(405).end();
  }
}
