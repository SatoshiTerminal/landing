import {
  appendToSheet,
  createRecaptchaAssessment,
} from "@/utils/google-service";
import { NextResponse } from "next/server";
import { z, ZodError } from "zod";

const waitingListFormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phoneNumber: z.string(),
  country: z.string(),
  whoAreYou: z.string(),
  messageHearAbout: z.string().min(1, { message: "Please enter your message" }),
});

export async function POST(request: Request) {
  try {
    const { token, siteKey, ...formInput } = await request.json();
    const body = waitingListFormSchema.parse(formInput);

    // ReCAPTCHA assessment
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

    // append form data to google sheet
    const formResult = await appendToSheet(body);
    if (formResult.status !== 200) {
      throw formResult;
    }

    return NextResponse.json({
      success: true,
      data: body,
      message: "You're added to our waiting list. Thank you!",
    });
  } catch (err) {
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
