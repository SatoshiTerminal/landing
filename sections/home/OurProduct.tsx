'use client'
import React from 'react';
import styles from './OurProduct.module.css';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

// Components
import SectionHeader from '@/components/SectionHeader';

// Data
import { ourProductList } from '@/data/ourProductData';

export default function OurProduct() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });
  return (
    <section className={`${styles.ourProduct} home-sect-p`}>
      <div className="container-xl">
        {/* Header start */}
        <div className={styles.header}>
          <SectionHeader
            cssClassName={styles.headerTitle}
            subtitle="Our product"
            titleBeforeAccent="The world`s"
            titleAccent="First Blockchain"
            titleAfterAccent="keyboard"
            description="Our Bloomberg reminiscent crypto research platform provides Wall Street a digital environment they are familiar with, allowing them to analyze crypto assets the same way they analyze stocks and bonds."
          />
        </div>
        {/* Header end */}

        {/* Content Top start*/}
        <div className={styles.contentProduct}>
          <div className={styles.triangleTopLeft}></div>
          {/* Left */}
          <div className={styles.itemProduct}>
            <h5 className={styles.itemTitle}>Powerful Hardware</h5>
            <p className={styles.itemDesc}>
              The blockchain keyboard is a custom keyboard that can be used with
              the software.
            </p>
            <ul className={styles.productList}>
              {ourProductList.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <Image
                    className={styles.listItemIcon}
                    src="/images/home/our-product/mark.svg"
                    alt="icon product"
                    width={30}
                    height={30}
                  />
                  <span>{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div ref={ref} className={styles.productImagesGroup}>
            <Image
              className={`${styles.productImage} ${
                inView ? `animate__animated animate__flash animate__slow` : 'invisible'
              }`}
              src="/images/home/our-product/keyboard-satoshi-terminal.png"
              alt="Satoshi Terminal keyboard"
              width={638}
              height={410}
              quality={100}
            />
            <Image
              className={styles.productImageBg}
              src="/images/home/our-product/bg-dots.svg"
              alt="Satoshi Terminal keyboard"
              width={650}
              height={650}
              quality={90}
            />
          </div>
        </div>
        {/* Content Top end */}

        <div className={styles.imageCenter}></div>
      </div>
      {/* end container-xl */}
    </section>
  );
}
