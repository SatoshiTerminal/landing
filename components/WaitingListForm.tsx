"use client";
import React from "react";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useImmer } from "use-immer";
import styles from "./WaitingListForm.module.css";
// Google captcha v2
import ReCAPTCHA from "react-google-recaptcha";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// Components
import { WaitingListSend } from "@/utils/waiting-list-send";

// Icons
import { AiOutlineClose } from "react-icons/ai";

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

// Who are you select options
const otions = [
  // option 1
  { value: "Private Investor", label: "Private Investor" },
  // option 2
  { value: "Market Maker", label: "Market Maker" },
  // option 3
  { value: "Hedge Fund", label: "Hedge Fund" },
  // option 4
  { value: "Bank", label: "Bank" },
  // option 5
  { value: "Exchange", label: "Exchange" },
  // option 6
  { value: "Venture Capital Fund", label: "Venture Capital Fund" },
  // option 7
  { value: "Student or Academic", label: "Student or Academic" },
  // option 8
  { value: "Journalist or Publisher", label: "Journalist or Publisher" },
  // option 9
  { value: "C-Suite or Executive", label: "C-Suite or Executive" },
  // option 10
  { value: 'Governance Platform"', label: "Governance Platform" },
  // option 11
  { value: "Node Operator", label: "Node Operator" },
  // option 12
  { value: "Exchange", label: "Exchange" },
  // option 13
  { value: "Protocol or Project", label: "Protocol or Project" },
  // option 14
  { value: "Fintech Company", label: "Fintech Company" },
  // option 15
  { value: "None of these/Other", label: "None of these/Other" },
];

export type WaitingListFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  country?: string;
  whoAreYou?: string;
  messageHearAbout: string;
  token?: string;
  siteKey?: string;
  // botcheck: boolean;
};

type FormResponse = {
  success: boolean;
  message: string;
  data?: WaitingListFormData;
  errors?: { field: string; message: string }[];
};

type CaptchaStatus = {
  token: string | null;
  status: boolean;
  message: string;
};

export default function WaitingListForm() {
  // Waiting list form
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, errors, isSubmitSuccessful, isSubmitting },
  } = useForm<WaitingListFormData>({
    mode: "onTouched",
  });
  const [isErrMsgActive, setIsErrMsgActive] = useState(false);

  // Waiting list show hide
  const [show, setShow] = useState(false);
  // Show and disable scroll
  const handleShow = () => {
    setShow(true);
    document.body.style.overflow = "hidden";
  };
  // Hide and disable scroll
  const handleClose = () => {
    setShow(false);
    document.body.style.overflow = "unset";
    updateCaptchaStatus((captchaStatus) => {
      captchaStatus.token = null;
      captchaStatus.status = false;
      captchaStatus.message = "";
    });
    captchaRef.current?.reset();
    setIsErrMsgActive(false);
    reset();
  };

  // ========== ReCAPTCHA and onSubmit Function start ==========
  const captchaRef = useRef<ReCAPTCHA>(null);
  const [captchaStatus, updateCaptchaStatus] = useImmer<CaptchaStatus>({
    token: null,
    status: false,
    message: "",
  });

  async function onSubmit(data: WaitingListFormData) {
    try {
      if (!captchaStatus.token) {
        return updateCaptchaStatus((captchaStatus) => {
          captchaStatus.status = false;
          captchaStatus.message = "Please complete the captcha";
        });
      }

      const formResponse = await WaitingListSend({
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
        captchaStatus.status = true;
        captchaStatus.message = "";
      });
      captchaRef.current?.reset();
      reset();
    } catch (err) {
      if ("message" in (err as FormResponse)) {
        const message = (err as FormResponse).message;

        if (message.includes("recaptcha")) {
          updateCaptchaStatus((captchaStatus) => {
            captchaStatus.token = null;
            captchaStatus.status = false;
            captchaStatus.message = "Please retry the captcha";
          });
          captchaRef.current?.reset();
          return;
        }
      }

      setIsErrMsgActive(true);
      updateCaptchaStatus((captchaStatus) => {
        captchaStatus.token = null;
        captchaStatus.status = false;
        captchaStatus.message = "";
      });
      captchaRef.current?.reset();
      reset();
    }
  }

  const onRecaptchaChange = (token: string | null) => {
    updateCaptchaStatus((captchaStatus) => {
      captchaStatus.token = token;
    });
  };

  return (
    // Button show hide
    <React.Fragment>
      <button onClick={handleShow} className="primary-btn">
        Join waiting list
      </button>

      <div
        className={`${styles.waitingList} ${
          show ? `${styles.show}` : `${styles.hide}`
        }`}
      >
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          {/* close button */}
          <div onClick={handleClose} aria-label="close form Waiting list">
            <AiOutlineClose className={styles.closeIcon} />
          </div>
          <h3 className={styles.formTitle}>Join the waiting list</h3>
          {/* Botcheck - hidden input */}
          {/* <input
            type="checkbox"
            style={{ display: 'none' }}
            {...register('botcheck')}
          ></input> */}

          {/* Form Action start */}
          {/* First name */}
          <div className={styles.formItem}>
            <label className={styles.formLabel}>
              First name *
              <input
                autoComplete="false"
                className={`${styles.formInput} ${
                  errors.firstName ? `${styles.formError}` : ""
                }`}
                type="text"
                placeholder="First name*"
                {...register("firstName", {
                  required: "First name is required",
                  maxLength: {
                    value: 25,
                    message: "Maximum length should be 25",
                  },
                })}
              />
            </label>
            {errors.firstName && (
              <div className={styles.formError}>
                <small>{errors.firstName.message}</small>
              </div>
            )}
          </div>
          {/* First name end */}
          {/* Last name */}
          <div className={styles.formItem}>
            <label className={styles.formLabel}>
              Last name *
              <input
                autoComplete="false"
                className={`${styles.formInput} ${
                  errors.lastName ? `${styles.formError}` : ""
                }`}
                type="text"
                placeholder="Last name*"
                {...register("lastName", {
                  required: "Last name is required",
                  maxLength: {
                    value: 25,
                    message: "Maximum length should be 25",
                  },
                })}
              />
            </label>
            {errors.lastName && (
              <div className={styles.formError}>
                <small>{errors.lastName.message}</small>
              </div>
            )}
          </div>
          {/* Last name end */}
          {/* Email start */}
          <div className={styles.formItem}>
            <label className={styles.formLabel}>
              Email Address*
              <input
                autoComplete="false"
                className={`${styles.formInput} ${
                  errors.email ? `${styles.formError}` : ""
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
            </label>
            {errors.email && (
              <div className={styles.formError}>
                <small>{errors.email.message}</small>
              </div>
            )}
          </div>
          {/* Email end */}

          {/* Phone start */}
          <div className={styles.formItem}>
            <label className={styles.formLabel}>
              Phone number (optional)
              <input
                autoComplete="false"
                className={`${styles.formInput} ${
                  errors.phoneNumber ? `${styles.formError}` : ""
                }`}
                type="text"
                placeholder="Phone number (optional)"
                {...register("phoneNumber", {
                  required: false,
                  minLength: {
                    value: 6,
                    message: "Minimum length should be 6",
                  },
                  maxLength: {
                    value: 12,
                    message: "Maximum length should be 12",
                  },
                })}
              />
            </label>
            {errors.phoneNumber && (
              <div className={styles.formError}>
                <small>{errors.phoneNumber.message}</small>
              </div>
            )}
          </div>
          {/* Phone end */}
          {/* Country start */}
          <div className={styles.formItem}>
            <label className={styles.formLabel}>
              Country (optional)
              <input
                autoComplete="false"
                className={`${styles.formInput} ${
                  errors.country ? `${styles.formError}` : ""
                }`}
                type="text"
                placeholder="Country (optional)"
                {...register("country", {
                  required: false,
                  maxLength: {
                    value: 25,
                    message: "Maximum length should be 25",
                  },
                })}
              />
            </label>
            {errors.country && (
              <div className={styles.formError}>
                <small>{errors.country.message}</small>
              </div>
            )}
          </div>
          {/* Country end */}

          {/* Who are you? start */}
          <div className={styles.formItem}>
            <label className={styles.formLabel}>
              Who are you (optional)
              <select
                className={styles.formSelect}
                {...register("whoAreYou", {
                  required: false,
                })}
              >
                <option value="">None</option>
                {otions.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            {/* Uncomment if this will be required (this is message for select) */}
            {/* {errors.whoAreYou && (
              <div className={styles.formError}>
                <small>{errors.whoAreYou.message}</small>
              </div>
            )} */}
          </div>
          {/* Who are you? end */}
          {/* How did you hear about us ? start */}
          <div className={styles.formTextarea}>
            <label className={styles.formLabel}>
              How did you hear about us ? *
              <textarea
                className={`${styles.formInput} ${styles.formTextareaIput} ${
                  errors.messageHearAbout ? `${styles.formError}` : ""
                }`}
                placeholder="How did you hear about us?*"
                {...register("messageHearAbout", {
                  required: "Please enter your message",
                })}
              />
            </label>
            {errors.messageHearAbout && (
              <div className={styles.formError}>
                {" "}
                <small>{errors.messageHearAbout.message}</small>
              </div>
            )}
          </div>
          {/* How did you hear about us ? end */}
          {/* Google reCAPTCHA */}

          {/* Google reCAPTCHA error message */}

          <div className={styles.captcha}>
            {!captchaStatus.token && captchaStatus.message.length > 0 && (
              <div className={` ${styles.formError}`}>
                {captchaStatus.message}
              </div>
            )}
            <ReCAPTCHA
              sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
              ref={captchaRef}
              theme="dark"
              onChange={onRecaptchaChange}
            />
          </div>

          {/* Message sent */}
          {!isDirty &&
            !captchaStatus.token &&
            isSubmitSuccessful &&
            captchaStatus.status && (
              <div className={`${styles.formMsgSent} ${styles.formSuccess}`}>
                You&apos;re added to our waiting list. Thank you!
              </div>
            )}

          {!isDirty && !captchaStatus.token && isErrMsgActive && (
            <div className={`${styles.formMsgSent} ${styles.formError}`}>
              Something went wrong. Please try again later.
            </div>
          )}

          <button
            className={`primary-btn ${styles.formBtn}`}
            disabled={isSubmitting}
          >
            {isSubmitting && (
              <AiOutlineLoading3Quarters className="loadingRotate" />
            )}
            Send Message
          </button>
          {/* Form Action end */}
        </form>
      </div>
    </React.Fragment>
  );
}
