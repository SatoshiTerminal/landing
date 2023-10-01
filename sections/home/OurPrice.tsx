import React from 'react';
import styles from './OurPrice.module.css';
import Image from 'next/image';

// Components
import SectionHeader from '@/components/SectionHeader';

export default function OurPrice() {
  return (
    <section className={`${styles.ourPrice} home-sect-p`}>
      <div className="container">
        <SectionHeader
          subtitle="Our pricing"
          titleAccent="Pricing"
          titleAfterAccent="strategy"
          description="Our industry low price can save institutional investors thousands each month by switching to us instead of the Bloomberg Terminal."
        />

        <div className={styles.header}>
          <div className={styles.price}>
            <Image
              className={styles.imageBg}
              src="/images/home/our-price/crypto-money.png"
              alt="price background"
              fill
            />
            <div className={styles.priceItem}>
              <div className={styles.priceNumber}>$840</div>
              <h5 className={styles.priceTitle}>
                Annually per user subscription
              </h5>
            </div>
          </div>

          <div className={styles.headerContent}>
            <Image
              className={styles.imageBg}
              src="/images/home/our-price/bg_choose.png"
              alt="price background"
              fill
            />
            <h3 className={styles.headerContentTitle}>
              Stocks, Bonds, and Derivatives 
            </h3>
            <p>
              Our hardware (blockchain keyboard + monitor hardware) is still
              in the planning stage. 
            </p>
            <p>
              Once we have completed prototyping, we will pursue a strategic
              partnership with a peripherals manufacturer to facilitate a
              highly-afford one-time price for the hardware.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
