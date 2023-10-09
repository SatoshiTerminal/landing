import React from 'react';
import styles from './ContactUs.module.css';
import Image from 'next/image';

// Components
import SectionHeader from '@/components/SectionHeader';
import ContactForm from '@/components/ContactForm';

// Data
import { docsData } from '@/data/contactUsData';

export default function ContactUs() {
  return (
    <section id="contact" className={`${styles.contactUs} home-sect-p`}>
      <div className="container">
        <SectionHeader
          subtitle="Contact us"
          titleBeforeAccent="Have any"
          titleAccent="questions"
          titleAfterAccent="?"
          description="We will be happy to answer any questions regarding our innovative product. You can use this form to contact us at any time."
        />
        <Image
          src="/images/home/contact-us/contact-us-bg.png"
          alt="mission-bg"
          className={styles.bgSectionImg}
          fill
          quality={100}
        />
        <div className={styles.bgSectionColor}></div>
        <div className={styles.content}>
          {/* Form width 60% all styles - /components/contactForm.css */}
          <ContactForm cssClass={styles.form} />
          {/* Documents */}
          <div className={styles.docsContent}>
            <h5 className={styles.docsTitle}>Read documents</h5>
            <div className={styles.docsContainer}>
              {docsData.map((item, index) => (
                <div key={index} className={styles.docsItem}>
                  <div className={styles.docsIconDecor}>
                    <a
                      className={styles.docsLink}
                      target="_blank"
                      href={item.linkUrl}
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={item.iconUrl}
                        alt="document icon"
                        width={32}
                        height={40}
                        quality={100}
                        className={styles.docsIconMain}
                      />
                    </a>
                  </div>

                  <div className={styles.docsItemTitle}>{item.title}</div>
                </div>
              ))}
            </div>
            <div className={styles.btnDownload}>
              {' '}
              <a
                className="primary-btn text-center"
                href="/images/home/header/Satoshi-Terminal-Pitchdeck.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download all
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
