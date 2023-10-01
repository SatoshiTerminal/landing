'use client';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import styles from './OurVisionHome.module.css';

// Components
import SectionHeader from '@/components/SectionHeader';

// Data
import { ourVisionGoalsData } from '@/data/ourVisionGoalsData';

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
              Satoshi info
            </a>
          </div>
          <Image
            ref={ref}
            src="/images/home/our-vision/bull-run.svg"
            alt="our vision"
            width={600}
            height={428}
            quality={100}
            className={`${styles.headerImg} ${
              inView ? `rotateUp` : 'invisible'
            }`}
          />
        </div>
        {/* Header end */}

        {/* Goals start */}
        <div className={styles.ourGoals}>
          {/* Mobile title start */}
          <div className={`${styles.titleGoalsBox} ${styles.mobileTitle}`}>
            <div className={styles.mainSubtitleGoals}>Join us</div>
            <h3 className={styles.mainTitleGoals}>Our goals</h3>
          </div>
          {/* Mobile title end*/}
          {/* Line top start   */}
          <div className={`${styles.contentGoals} ${styles.lineTop}`}>
            {/*  first three elements from this array */}
            {ourVisionGoalsData.slice(0, 3).map((goal) => (
              <div key={goal.id} className={styles.goalsItem}>
                <Image
                  src="/images/home/our-vision/arrow.svg"
                  alt="icon"
                  quality={100}
                  width={70}
                  height={12}
                  className={styles.arrowIconRight}
                />
                <div className={styles.numberItem}>
                  <Image
                    src="/images/home/our-vision/number-bg.svg"
                    alt="icon"
                    quality={100}
                    fill
                    className={styles.numberBg}
                  />
                  <span className={styles.number}>{goal.id}</span>
                </div>

                <div className={styles.goalDesc}>
                  <h3 className={styles.goalDescTitle}>{goal.title}</h3>
                  <p>{goal.text}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Line top end */}
          {/* Center start */}
          <div className={`${styles.titleGoalsBox} ${styles.desktopTitle}`}>
            <div className={styles.mainSubtitleGoals}>Join us</div>
            <h3 className={styles.mainTitleGoals}>Our goals</h3>
          </div>
          {/* Center end */}

          {/* Line bottom start*/}
          <div className={`${styles.contentGoals} ${styles.lineBottom}`}>
            {/* next three elements reversed */}
            {ourVisionGoalsData
              .slice(3, 6)
              .reverse()
              .map((goal) => (
                <div key={goal.id} className={styles.goalsItem}>
                  <Image
                    src="/images/home/our-vision/arrow.svg"
                    alt="icon"
                    quality={100}
                    width={70}
                    height={12}
                    className={styles.arrowIconLeft}
                  />
                  <div className={styles.numberItem}>
                    <Image
                      src="/images/home/our-vision/number-bg.svg"
                      alt="icon"
                      quality={100}
                      fill
                      className={styles.numberBg}
                    />
                    <span className={styles.number}>{goal.id}</span>
                  </div>

                  <div className={styles.goalDesc}>
                    <h5 className={styles.goalDescTitle}>{goal.title}</h5>
                    <p>{goal.text}</p>
                  </div>
                </div>
              ))}
          </div>
          {/* Line bottom end*/}
        </div>
        {/* Goals end */}
      </div>
    </section>
  );
}
