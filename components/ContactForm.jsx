'use client';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { useForm, useWatch  } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
// Css
import styles from './contactForm.module.css';
// Icons
import { FaPhoneVolume } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';

export default function ContactForm() {
  // ============= Original code start =============
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
  const apiKey =
    process.env.WEB3FORMS_ACCESS_KEY || 'f9ccf471-689c-4d75-a9f7-73c4ca9e098a';

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: 'Client from My Website',
      subject: 'New Contact Message from My Website',
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
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input
        type="checkbox"
        id=""
        className="hidden"
        style={{ display: 'none' }}
        {...register('botcheck')}
      ></input>
      {/* Form top start */}

      <div className="form-top-item">
        <div className='form-icon-top'>
          <FaPhoneVolume />
        </div>
        <div className="form-top-text">
          <h5 className="form-top-title">Phone Number</h5>
          <a className="form-top-content" href="tel:+33766453319">+33-766-45-33-19</a>
        </div>
      </div>
      <div className="form-top-item">
        <div className='form-icon-top'>
          <ImLocation2 />
        </div>
        <div className="form-top-text">
          <h5 className="form-top-title">Address:</h5>
          <p className="form-top-content">France, Alpes Maritimes, <br /> Nice, 06000</p>
        </div>
      </div>

      {/* Form top end */}

      {/* Form Action start */}
      <div className="form-item">
        <input
          autoComplete="false"
          className={`form-input ${
            errors.name ? 'form-error' : 'form-success'
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
            errors.name ? 'form-error' : 'form-success'
          }`}
          type="email"
          placeholder="Your email*"
          name="email"
          {...register('email', {
            required: 'Enter your email',
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
            errors.name ? 'form-error' : 'form-success'
          }`}
          type="email"
          placeholder="Your Message*"
          name="message"
          {...register('message', {
            required: 'Enter your Message',
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
