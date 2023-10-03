'use client';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
import styles from './WatingListForm.module.css';

// Icons
import { AiOutlineClose } from 'react-icons/ai';

export default function WatingListForm() {
  // Waiting list form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    mode: 'onTouched',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');

  // Please update the Access Key in the .env

  // Just for testing purpose, you can use the following Access Key
  // It send to my email 0vqe5z6q@duck.com , but not to the client email
  const apiKey =
    process.env.WEB3FORMS_ACCESS_KEY || 'd99962bf-a294-4104-8ec5-d1109b340b23';

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

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    // Button show hide
    <React.Fragment>
      <button onClick={handleShow} className="primary-btn">
        Join wating list
      </button>

      <div
        className={`${styles.watingList} ${
          show ? `${styles.show}` : `${styles.hide}`
        }`}
      >
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div onClick={handleClose} aria-label="close form wating list">
            <AiOutlineClose className={styles.closeIcon} />
          </div>
          <h3 className={styles.formTitle}>Join the waiting list</h3>
          <input
            type="checkbox"
            style={{ display: 'none' }}
            {...register('botcheck')}
          ></input>

          {/* Form Action start */}
          <div className={styles.formItem}>
            <input
              autoComplete="false"
              className={`${styles.formInput} ${
                errors.name ? `${styles.formError}` : `${styles.formSuccess}`
              }`}
              type="text"
              placeholder="Your name*"
              name="name"
              {...register('name', {
                required: 'Full name is required',
                maxLength: 80,
              })}
            />
            {errors.name && (
              <div className={styles.formError}>
                <small>{errors.name.message}</small>
              </div>
            )}
          </div>
          <div className={styles.formItem}>
            <input
              id="email_address"
              autoComplete="false"
              className={`${styles.formInput} ${
                errors.name ? `${styles.formError}` : `${styles.formSuccess}`
              }`}
              type="email"
              placeholder="Your email*"
              name="email"
              {...register('email', {
                required: 'Please enter your email',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Please enter a valid email',
                },
              })}
            />
            {errors.email && (
              <div className={styles.formError}>
                <small>{errors.email.message}</small>
              </div>
            )}
          </div>
          <div className={styles.formTextarea}>
            <textarea
              className={`${styles.formInput} ${styles.formTextareaIput} ${
                errors.name ? 'form-error' : 'form-success'
              }`}
              type="email"
              placeholder="Your Message*"
              name="message"
              {...register('message', {
                required: 'Please enter your message',
              })}
            />
            {errors.message && (
              <div className={styles.formError}>
                {' '}
                <small>{errors.message.message}</small>
              </div>
            )}
          </div>
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
