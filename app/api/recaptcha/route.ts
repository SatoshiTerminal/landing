import { NextResponse } from 'next/server';
// import axios from 'axios';

const NEXT_PUBLIC_CAPTCHA_SECRET_KEY =
  process.env.NEXT_PUBLIC_CAPTCHA_SECRET_KEY || '6LdhWssoAAAAAIdM8gGLUQ0o16DseXvNx35t2sm9';

export async function POST(request: Request) {
  const { token } = await request.json();
  try {
    const res = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${NEXT_PUBLIC_CAPTCHA_SECRET_KEY}&response=${token}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await res.json();

    console.log(data)

    if (data.success === true) {
      return NextResponse.json({ success: 'Valid Captcha' }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Invalid Captcha' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
