'use client';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
// Css import normal
import './contactForm.css';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
  botcheck: boolean;
};

type ContactFormProps = {
  cssClass: string;
}


export default function ContactForm(  {cssClass} : ContactFormProps ) {
  // ============= Original code start =============
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    mode: 'onTouched',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');

  // Please update the Access Key in the .env

     // !! apiKey for testing d99962bf-a294-4104-8ec5-d1109b340b23
  //  Api key for Deploy - mail: contact@satoshiterminal.io  40f64b6f-62f6-4e8d-86c6-3bf4adf7b196
  const apiKey =
    process.env.WEB3FORMS_ACCESS_KEY || '40f64b6f-62f6-4e8d-86c6-3bf4adf7b196';

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: 'Client from satoshiterminal.io',
      subject: 'New Contact Message from Satoshi Terminal',
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


  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`form ${cssClass}`}>
      <h3 className="form-title">Get in touch now</h3>
      <input
        type="checkbox"
        id=""
        className="hidden"
        style={{ display: 'none' }}
        {...register('botcheck')}
      ></input>     

      {/* Form Action start */}
      <div className="form-item">
        <input
          autoComplete="false"
          className={`form-input ${
            errors.name ? 'form-error' : 'form-success'
          }`}
          type="text"
          placeholder="Your name*"
          {...register('name', {
            required: 'Full name is required',
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
            errors.email ? 'form-error' : 'form-success'
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
        {errors.email && (
          <div className="form-error">
            <small>{errors.email.message}</small>
          </div>
        )}
      </div>
      <div className="form-textarea">
        <textarea
          className={`form-input form-textarea-iput ${
            errors.message ? 'form-error' : ''
          }`}
          placeholder="Your Message*"
          {...register('message', {
            required: 'Please enter your message',
          })}
        />
        {errors.message && (
          <div className="form-error">
            {' '}
            <small>{errors.message.message}</small>
          </div>
        )}
      </div>
      {isSubmitSuccessful && isSuccess && (
        <div className="form-msg-sent form-success">
          {message || 'Success. Message sent successfully'} 🚀
        </div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div className="form-msg-sent form-error">
          {message || 'Something went wrong. Please try later.'} 😞
        </div>
      )}
      <button className="primary-btn form-btn">Send Message</button>
      {/* Form Action end */}
    </form>
  );
}
