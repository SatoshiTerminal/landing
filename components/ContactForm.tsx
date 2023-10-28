"use client";
import React, { useRef } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import useWeb3Forms from "@web3forms/react";
import ReCAPTCHA from "react-google-recaptcha";
// Css import normal
import "./contactForm.css";
import { useImmer } from "use-immer";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ContactFormSend } from "@/utils/contact-form-send";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
  botcheck: boolean;
  token?: string;
  siteKey?: string;
};

type ContactFormProps = {
  cssClass: string;
};

type CaptchaStatus = {
  token: string | null;
  message: string;
};

type FormResponse = {
  success: boolean;
  message: string;
  data?: ContactFormData;
};

declare global {
  interface Window {
    recaptchaOptions: {
      enterprise: true;
    };
  }
}

if (typeof window !== "undefined") {
  window.recaptchaOptions = {
    enterprise: true,
  };
}

export default function ContactForm({ cssClass }: ContactFormProps) {
  // ============= Original code start =============
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  // Please update the Access Key in the .env

  // !! apiKey for testing d99962bf-a294-4104-8ec5-d1109b340b23
  //  Api key for Deploy - mail: contact@satoshiterminal.io  40f64b6f-62f6-4e8d-86c6-3bf4adf7b196
  // const apiKey =
  //   process.env.WEB3FORMS_ACCESS_KEY || "40f64b6f-62f6-4e8d-86c6-3bf4adf7b196";

  // const { submit: onSubmit } = useWeb3Forms({
  //   access_key: apiKey,
  //   settings: {
  //     from_name: "Client from satoshiterminal.io",
  //     subject: "New Contact Message from Satoshi Terminal",
  //   },
  //   onSuccess: (msg) => {
  //     setIsSuccess(true);
  //     setMessage(msg);
  //     reset();
  //   },
  //   onError: (msg) => {
  //     setIsSuccess(false);
  //     setMessage(msg);
  //   },
  // });
  // ============= Original code end =============

  // ReCAPTCHA
  const captchaRef = useRef<ReCAPTCHA>(null);
  const [captchaStatus, updateCaptchaStatus] = useImmer<CaptchaStatus>({
    token: null,
    message: "",
  });

  const onRecaptchaChange = (token: string | null) => {
    updateCaptchaStatus((captchaStatus) => {
      captchaStatus.token = token;
    });
  };

  async function onSubmit(data: ContactFormData) {
    try {
      if (!captchaStatus.token) {
        return updateCaptchaStatus((captchaStatus) => {
          captchaStatus.message = "Please complete the captcha";
        });
      }

      const formResponse = await ContactFormSend({
        ...data,
        token: captchaStatus.token,
        siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      });

      if (!formResponse.success) {
        throw formResponse;
      }

      // Reset form
      updateCaptchaStatus((captchaStatus) => {
        captchaStatus.token = null;
        captchaStatus.message = "";
      });
      captchaRef.current?.reset();
      setIsSuccess(true);
      reset();
    } catch (err: any) {
      if ("message" in (err as FormResponse)) {
        const message = (err as FormResponse).message;

        if (message.includes("recaptcha")) {
          setIsSuccess(false);
          updateCaptchaStatus((captchaStatus) => {
            captchaStatus.token = null;
            captchaStatus.message = "Please retry the captcha";
          });
          captchaRef.current?.reset();
          return;
        }
      }

      setIsSuccess(false);
      updateCaptchaStatus((captchaStatus) => {
        captchaStatus.token = null;
        captchaStatus.message = "";
      });
      captchaRef.current?.reset();
      reset();
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`form ${cssClass}`}>
      <h3 className="form-title">Get in touch now</h3>
      <input
        type="checkbox"
        id=""
        className="hidden"
        style={{ display: "none" }}
        {...register("botcheck")}
      ></input>

      {/* Form Action start */}
      <div className="form-item">
        <input
          autoComplete="false"
          className={`form-input ${
            errors.name ? "form-error" : "form-success"
          }`}
          type="text"
          placeholder="Your name*"
          {...register("name", {
            required: "Full name is required",
            maxLength: 80,
          })}
        />
        {errors.name && (
          <div className="form-error">
            <small>{errors.name.message}</small>
          </div>
        )}
      </div>
      <div className="form-item">
        <input
          id="email_address"
          autoComplete="false"
          className={`form-input ${
            errors.email ? "form-error" : "form-success"
          }`}
          type="email"
          placeholder="Your email*"
          {...register("email", {
            required: "Please enter your email",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Please enter a valid email",
            },
          })}
        />
        {errors.email && (
          <div className="form-error">
            <small>{errors.email.message}</small>
          </div>
        )}
      </div>
      <div className="form-textarea">
        <textarea
          className={`form-input form-textarea-iput ${
            errors.message ? "form-error" : ""
          }`}
          placeholder="Your Message*"
          {...register("message", {
            required: "Please enter your message",
          })}
        />
        {errors.message && (
          <div className="form-error">
            {" "}
            <small>{errors.message.message}</small>
          </div>
        )}
      </div>
      <div className="form-recaptcha-wrapper_outer">
        {!captchaStatus.token && captchaStatus.message && (
          <div className="form-error">{captchaStatus.message}</div>
        )}
        <ReCAPTCHA
          className="form-recaptcha-wrapper_inner"
          sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          ref={captchaRef}
          theme="dark"
          onChange={onRecaptchaChange}
        />
      </div>
      {!isDirty && !captchaStatus.token && isSubmitSuccessful && isSuccess && (
        <div className="form-msg-sent form-success">
          Success. Message sent successfully. 🚀
        </div>
      )}
      {!isDirty &&
        !captchaStatus.token &&
        isSubmitSuccessful &&
        !isSuccess &&
        !captchaStatus.message && (
          <div className="form-msg-sent form-error">
            Something went wrong. Please try later. 😞
          </div>
        )}
      <button className="primary-btn form-btn" disabled={isSubmitting}>
        {isSubmitting && (
          <AiOutlineLoading3Quarters className="loadingRotate" />
        )}
        Send Message
      </button>
      {/* Form Action end */}
    </form>
  );
}
