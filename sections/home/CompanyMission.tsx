import React from 'react';
import styles from './CompanyMission.module.css';
import Image from 'next/image';

// Components
import SectionHeader from '@/components/SectionHeader';

// Data
import { companyMissionData } from '@/data/companyMissionData';

export default function CompanyMission() {
  return (
    <section id="mission" className={`${styles.companyMission} home-sect-p`}>
      <Image
        src="/images/home/company-mission/mission-bg.png"
        alt="mission-bg"
        className={styles.bgSectionImg}
        fill
        quality={100}
      />
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerImgBox}>
            <Image
              src="/images/home/company-mission/circle-crypto.png"
              alt="Crypto currency"
              width={324}
              height={329}
              className={styles.headerImg}
            />
          </div>

          <SectionHeader
            cssClassName={styles.headerTitle}
            subtitle="Company mission"
            titleBeforeAccent="Our mission is to help facilitate the next bull run
            for "
            titleAccent="cryptocurrency"
            description="Our company is building the world`s first cryptocurrency research platform. We`ve established world-class strategic partnerships – which provides us with unrivaled data libraries and best-in-class industry research. We stand to be a multi-billion dollar Bloomberg Terminal equivalent for cryptocurrency."
          />
        </div>

        <div className={styles.mission}>
          {companyMissionData.map((item, index) => (
            <div className={styles.missionItem} key={index}>
              <Image
                src={item.iconUrl}
                alt="icon"
                width={100}
                height={100}
                className={styles.missionIcon}
              />

              <div className={styles.missionItemTitle}>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
