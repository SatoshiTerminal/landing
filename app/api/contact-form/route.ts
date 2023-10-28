import { createRecaptchaAssessment } from "@/utils/google-service";
import { NextResponse } from "next/server";
import { z, ZodError } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required " }),
  email: z.string().email({ message: "Please enter a valid email" }),
  message: z.string().min(1, { message: "Please enter your message" }),
  botcheck: z.boolean(),
});

export async function POST(request: Request) {
  try {
    const { token, siteKey, ...formInput } = await request.json();
    const body = contactFormSchema.parse(formInput);

    const recaptchaResult = await createRecaptchaAssessment({
      token,
      siteKey,
    });

    if (
      recaptchaResult.status !== 200 ||
      !recaptchaResult.data.tokenProperties!.valid
    ) {
      throw {
        message: "recaptcha error",
      };
    }

    const formResult = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        from_name: "Client from satoshiterminal.io",
        subject: "New Contact Message from Satosthi Terminal",
        ...body,
      }),
    }).then((res) => res.json());

    if (!formResult.success) {
      throw formResult;
    }

    return NextResponse.json({
      success: true,
      data: body,
      message: "Success. Message sent successfully.",
    });
  } catch (err) {
    console.log(err);

    // ZodError
    if (err instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          errors: err.issues.map((e) => ({
            field: e.path[0],
            message: e.message,
          })),
          message: "Input validation failed.",
        },
        {
          status: 400,
        }
      );
    }

    // ReCAPTCHA error
    if ("message" in (err as { message?: string })) {
      const message = (err as { message?: string }).message;

      return NextResponse.json({
        success: false,
        message,
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}
