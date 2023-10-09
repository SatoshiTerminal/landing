import React from 'react';
import styles from './OurPrice.module.css';
import Image from 'next/image';

// Components
import SectionHeader from '@/components/SectionHeader';

// Data
import { ourPriceData } from '@/data/ourPriceData';

export default function OurPrice() {
  return (
    <section id="pricing" className={`${styles.ourPrice} home-sect-p`}>
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
            <div className={styles.headerContentLeft}>
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

            <Image
              className={styles.headerImgRight}
              src="/images/home/our-price/svgman.svg"
              alt="price background"
              width={258}
              height={236}
            />
          </div>
        </div>
        {/* header end */}

        <div className={styles.contentBottom}>
          <div className={styles.contentBottomLeft}>
            <h4 className={styles.contentBottomTitle}>
              Available to small investment companies and private investors
            </h4>
            <p>
              The annual licensing fee for the Satoshi Terminal will be $840 per
              user compared to the Bloomberg Terminal’s annual licensing fee of
              $27,000 per user.
            </p>
            <div className={styles.contentBottomTabs}>
              {ourPriceData.map((item, index) => (
                <div key={index} className={styles.tabsItem}>
                  {item.title}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.contentBottomRight}>
            <Image
              className={styles.contentBottomImg}
              src="/images/home/our-price/brand-asset.png"
              alt="price background"
              width={558}
              height={495}
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
