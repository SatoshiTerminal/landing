'use client';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import styles from './OurVisionHome.module.css';

// Components
import SectionHeader from '@/components/SectionHeader';

export default function OurVision() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  return (
    <section className={`${styles.ourVision} home-sect-p`}>
      <div className="container">
        {/* Header start */}
        <div className={styles.header}>
          <div className={styles.headerDesc}>
            <SectionHeader
              subtitle="Our vision & goals"
              titleBeforeAccent="We want to change the negative perception of the crypto market to help start the next"
              titleAccent="bull run"
              description="Our vision is a reimagining of the industry in the eyes of Wall Street, the mass media and the financial regulators who inhibit blockchain’s boundless potential."
            />

            <a
              className="primary-btn"
              target="_blank"
              href="/images/home/header/Satoshi-Terminal-Pitchdeck.pdf"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
          <div ref={ref} className={styles.headerImg}>
            <Image
              src="/images/home/our-vision/bull-run.svg"
              alt="our vision"
              width={600}
              height={428}
              quality={100}
              className={inView ? `rotateUp` : 'invisible'}
            />
          </div>
        </div>
        {/* Header end */}

        {/* Content start */}
      </div>
    </section>
  );
}
