'use client';
import React from 'react';
import styles from './OverviewHome.module.css';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

// Data
import { overviewHomeList } from '@/data/overviewHomeData';
import { overviewHomeList2Left } from '@/data/overviewHomeData';
import { overviewHomeList2Right } from '@/data/overviewHomeData';

// Components
import SectionHeader from '@/components/SectionHeader';

export default function OverviewHome() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  });
  return (
    <section className={`${styles.overview} home-sect-p`}>
      <Image
        src="/images/home/overview/bitcoin-left.png"
        alt="bitcoin"
        height={240}
        width={240}
        className={styles.imgAbsolute1}
        quality={100}
      />
      <Image
        src="/images/home/overview/shield-right.png"
        alt="bitcoin"
        height={240}
        width={240}
        className={styles.imgAbsolute2}
        quality={100}
      />
      <div className="container">
        {/* Content top start */}
        <div className={styles.contentTop}>
          {/* Left side */}
          <div className={styles.contentLeft}>
            <SectionHeader
              subtitle="Overview"
              titleBeforeAccent="The Satoshi Terminal is the first"
              titleAccent="crypto"
              titleAfterAccent="research platform"
              description="Billions are poured into cryptocurrency and blockchain companies by Wall Street. Yet, a less-than-positive perception of the industryremains a significant challenge. We want to change that."
            />

            <ul className={styles.list1}>
              {overviewHomeList.map((item, index) => {
                return (
                  <li key={index} className={styles.listItem1}>
                    <Image
                      src={item.url}
                      alt={item.title}
                      height={42}
                      width={42}
                      quality={100}
                      className={styles.listItem1Icon}
                    />
                    <div className={styles.item1Title}>{item.title}</div>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* contentLeft end */}
          {/* Right side */}
          <div className={styles.contentRight}>
            <div ref={ref} className={styles.imagesGroup}>
              <Image
                src="/images/home/overview/rectangle-cut-small.svg"
                alt="overview"
                width={417}
                height={331}
                className={`${styles.imgReactangle1} ${
                  inView
                    ? `animate__animated animate__fadeIn animate__slower`
                    : 'invisible'
                }`}
              />
              <Image
                src="/images/home/overview/rectangle-cut-large.svg"
                alt="overview"
                fill={true}
                className={`${styles.imgReactangle2} ${
                  inView
                    ? `animate__animated animate__flash animate__slower`
                    : 'invisible'
                }`}
              />
              <Image
                src="/images/home/overview/satoshi-keyboard.png"
                alt="overview"
                width={466}
                height={231}
                className={`${styles.imgMain} ${
                  inView
                    ? `animate__animated animate__flipInX animate__slower`
                    : 'invisible'
                }`}
              />
            </div>
          </div>
          {/* contentRight end */}
        </div>
        {/* Content top end */}
        {/* Content bottom start */}
        <div className={styles.contentBottom}>
          {/* Left side */}
          <div className={styles.contentLeft}>
            <div className={styles.imagesGroup}>
              <Image
                src="/images/home/overview/rectangle-cut-small.svg"
                alt="overview"
                width={417}
                height={331}
                className={styles.imgReactangle1}
              />
              <Image
                src="/images/home/overview/rectangle-cut-large.svg"
                alt="overview"
                fill={true}
                className={styles.imgReactangle2}
              />
              <Image
                src="/images/home/overview/satoshi-terminal-monitor.png"
                alt="overview"
                width={422}
                height={333}
                className={styles.imgMain2}
              />
            </div>
          </div>
          {/* contentLeft end */}
          {/* Right side */}
          <div className={styles.contentRight}>
            <div className={styles.headerOvervier}>
              <h2 className={styles.titleContent}>
                Engineered and designed by former
                <span> Bloomberg Terminal</span> engineers
              </h2>
              <p className={styles.descOverview}>
                The Satoshi Terminal is a groundbreaking financial research and
                trading platform. It is a first-of-its-kind product that
                combines features and functionality like those of the Bloomberg
                Terminal with the inclusion of data on the cryptocurrency
                industry.
              </p>
            </div>

            <div className={styles.listBox}>
              {/* list left */}
              <ul className={styles.list2}>
                {overviewHomeList2Left.map((item, index) => {
                  return (
                    <li key={index} className={styles.listItem2}>
                      <Image
                        src="/images/home/overview/icons/star.svg"
                        alt={item.title}
                        height={27}
                        width={27}
                        quality={100}
                        className={styles.listItem2Icon}
                      />
                      <div className={styles.item2Title}>{item.title}</div>
                    </li>
                  );
                })}
              </ul>
              {/* list right */}
              <ul className={styles.list2}>
                {overviewHomeList2Right.map((item, index) => {
                  return (
                    <li key={index} className={styles.listItem2}>
                      <Image
                        src="/images/home/overview/icons/star.svg"
                        alt={item.title}
                        height={27}
                        width={27}
                        quality={100}
                        className={styles.listItem2Icon}
                      />
                      <div className={styles.item2Title}>{item.title}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* contentRight end */}
        </div>
        {/* Content bottom end */}
      </div>
    </section>
  );
}
