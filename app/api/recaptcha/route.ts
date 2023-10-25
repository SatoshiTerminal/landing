import {  NextResponse } from 'next/server';
import axios from 'axios';

const NEXT_PUBLIC_CAPTCHA_SECRET_KEY =
  process.env.NEXT_PUBLIC_CAPTCHA_SECRET_KEY;

export default async function checkRecaptcha(token: any) {

  try {
    const res = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${NEXT_PUBLIC_CAPTCHA_SECRET_KEY}&response=${token}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (res.data.success) {
      return "success!"
    } else {
      return NextResponse.json(
        { error: 'Invalid Captcha' },
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
