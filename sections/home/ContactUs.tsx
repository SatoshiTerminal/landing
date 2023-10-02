import React from 'react';
import styles from './ContactUs.module.css';
import Image from 'next/image';

// Components
import SectionHeader from '@/components/SectionHeader';
import ContactForm from '@/components/ContactForm';

export default function ContactUs() {
  return (
    <section className={`${styles.contactUs} home-sect-p`}>
      <div className="container">
        <SectionHeader
          cssClassName={styles.ourRoadmapHeader}
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
        <div className={styles.content}>
          <ContactForm />
          
        </div>
      </div>
    </section>
  );
}
