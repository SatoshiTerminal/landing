'use client';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
import styles from './WaitingListForm.module.css';

// Icons
import { AiOutlineClose } from 'react-icons/ai';

// Who are you select options
const otions = [
  // option 1
  { value: 'Private Investor', label: 'Private Investor' },
  // option 2
  { value: 'Market Maker', label: 'Market Maker' },
  // option 3
  { value: 'Hedge Fund', label: 'Hedge Fund' },
  // option 4
  { value: 'Bank', label: 'Bank' },
  // option 5
  { value: 'Exchange', label: 'Exchange' },
  // option 6
  { value: 'Venture Capital Fund', label: 'Venture Capital Fund' },
  // option 7
  { value: 'Student or Academic', label: 'Student or Academic' },
  // option 8
  { value: 'Journalist or Publisher', label: 'Journalist or Publisher' },
  // option 9
  { value: 'C-Suite or Executive', label: 'C-Suite or Executive' },
  // option 10
  { value: 'Governance Platform"', label: 'Governance Platform' },
  // option 11
  { value: 'Node Operator', label: 'Node Operator' },
  // option 12
  { value: 'Exchange', label: 'Exchange' },
  // option 13
  { value: 'Protocol or Project', label: 'Protocol or Project' },
  // option 14
  { value: 'Fintech Company', label: 'Fintech Company' },
  // option 15
  { value: 'None of these/Other', label: 'None of these/Other' },
];

export type WaitingListFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  country?: string;
  whoAreYou?: string;
  messageHearAbout: string;
  botcheck: boolean;
};

export default function WatingListForm() {
  // Waiting list form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<WaitingListFormData>({
    mode: 'onTouched',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');

   // !! apiKey for testing d99962bf-a294-4104-8ec5-d1109b340b23
  //  Api key for Deploy - mail: contact@satoshiterminal.io  40f64b6f-62f6-4e8d-86c6-3bf4adf7b196

  const apiKey =
    process.env.WEB3FORMS_ACCESS_KEY || '40f64b6f-62f6-4e8d-86c6-3bf4adf7b196';

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: 'Satoshiterminal.io - Waiting list',
      subject: ' Message from Satoshi Terminal - Waiting list',
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });
  // ============= Original code end =============

  // Wating list show hide
  const [show, setShow] = useState(false);
  // Show and disable scroll
  const handleShow = () => {
    setShow(true);
    document.body.style.overflow = 'hidden';
  };
  // Hide and disable scroll
  const handleClose = () => {
    setShow(false);
    document.body.style.overflow = 'unset';
  };

  // Select

  return (
    // Button show hide
    <React.Fragment>
      <button onClick={handleShow} className="primary-btn">
        Join waiting list
      </button>

      <div
        className={`${styles.watingList} ${
          show ? `${styles.show}` : `${styles.hide}`
        }`}
      >
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          {/* close button */}
          <div onClick={handleClose} aria-label="close form wating list">
            <AiOutlineClose className={styles.closeIcon} />
          </div>
          <h3 className={styles.formTitle}>Join the waiting list</h3>
          {/* Botcheck - hidden input */}
          <input
            type="checkbox"
            style={{ display: 'none' }}
            {...register('botcheck')}
          ></input>

          {/* Form Action start */}
          {/* First name */}
          <div className={styles.formItem}>
            <label className={styles.formLabel}>
              First name *
              <input
                autoComplete="false"
                className={`${styles.formInput} ${
                  errors.firstName
                    ? `${styles.formError}`
                    : ''
                }`}
                type="text"
                placeholder="First name*"
                {...register('firstName', {
                  required: 'First name is required',
                  maxLength: {
                    value: 25,
                    message: 'Maximum length should be 25',
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
                  errors.lastName
                    ? `${styles.formError}`
                    : ''
                }`}
                type="text"
                placeholder="Last name*"
                {...register('lastName', {
                  required: 'Last name is required',
                  maxLength: {
                    value: 25,
                    message: 'Maximum length should be 25',
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
                  errors.email ? `${styles.formError}` : ''
                }`}
                type="email"
                placeholder="Your email*"
                {...register('email', {
                  required: 'Please enter your email',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Please enter a valid email',
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
                  errors.phoneNumber
                    ? `${styles.formError}`
                    : ''
                }`}
                type="text"
                placeholder="Phone number (optional)"
                {...register('phoneNumber', {
                  required: false,
                  minLength: {
                    value: 6,
                    message: 'Minimum length should be 6',
                  },
                  maxLength: {
                    value: 12,
                    message: 'Maximum length should be 12',
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
                  errors.country
                    ? `${styles.formError}`
                    : ''
                }`}
                type="text"
                placeholder="Country (optional)"
                {...register('country', {
                  required: false,
                  maxLength: {
                    value: 25,
                    message: 'Maximum length should be 25',
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
                {...register('whoAreYou', {
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
                  errors.messageHearAbout
                    ? `${styles.formError}`
                    : ''
                }`}
                placeholder="How did you hear about us?*"
                {...register('messageHearAbout', {
                  required: 'Please enter your message',
                })}
              />
            </label>
            {errors.messageHearAbout && (
              <div className={styles.formError}>
                {' '}
                <small>{errors.messageHearAbout.message}</small>
              </div>
            )}
          </div>
          {/* How did you hear about us ? end */}

          {isSubmitSuccessful && isSuccess && (
            <div className={`${styles.formMsgSent} ${styles.formSuccess}`}>
              {message || 'Success. Message sent successfully'} 🚀
            </div>
          )}
          {isSubmitSuccessful && !isSuccess && (
            <div className={`${styles.formMsgSent} ${styles.formError}`}>
              {message || 'Something went wrong. Please try later.'} 😞
            </div>
          )}
          <button className={`primary-btn ${styles.formBtn}`}>
            Send Message
          </button>
          {/* Form Action end */}
        </form>
      </div>
    </React.Fragment>
  );
}
