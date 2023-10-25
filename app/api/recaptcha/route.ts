import {  NextResponse } from 'next/server';
import axios from 'axios';

const NEXT_PUBLIC_CAPTCHA_SECRET_KEY =
  process.env.NEXT_PUBLIC_CAPTCHA_SECRET_KEY;

export default async function checkRecaptcha(token: string | null) {

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${NEXT_PUBLIC_CAPTCHA_SECRET_KEY}&response=${token}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (response.data.success) {
      NextResponse.json({
        success: true,
      });
    } else {
      NextResponse.json(
        { error: 'Captcha verification failed' },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
