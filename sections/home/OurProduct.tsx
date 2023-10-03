'use client';
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
    <section id="section-4" className={`${styles.ourProduct} home-sect-p`}>
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
                inView
                  ? `animate__animated animate__flash animate__slow`
                  : 'invisible'
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
        {/* Image center start       */}
        <div className={styles.imageCenterBox}>
          <Image
            className={styles.imgCenter}
            src="/images/home/our-product/microprocessor.png"
            alt="Satoshi Terminal keyboard"
            width={452}
            height={452}
            quality={90}
          />
        </div>
        {/* Image center end */}
        {/* Comparison bottom start */}
        <div className={styles.comparisonBottom}>
          <div className={styles.triangleBottomRight}></div>
          <h5 className={styles.comparisionTitle}>
            Bloomberg Terminal Keyboard for comparison
          </h5>
          <div className={styles.imagesBottomBox}>
            {/* Image 1 start */}
            <div className={styles.imagesBottomItem}>
              <Image
                className={styles.imgProductBottom}
                src="/images/home/our-product/blomberg-keyboard.png"
                alt="Bloomberg keyboard"
                width={500}
                height={177}
                quality={90}
              />
              <p className={styles.descImagesBottom}>
                Tailored for quick access to Stocks, Bonds, and Derivatives  
              </p>
            </div>
            {/* Image 1 end */}
            <div className={styles.dividingLine}>
              <span>l</span>
            </div>
            {/* Image 2 start */}
            <div className={styles.imagesBottomItem}>
              <Image
                className={styles.imgProductBottom2} 
                src="/images/home/our-product/keyboard-satoshi-bottom.png"
                alt="Bloomberg keyboard"
                width={500}
                height={245}
                quality={90}
              />
              <p className={styles.descImagesBottom}>
                Tailored for quick access to Stocks, Bonds, Derivatives,{' '}
                <span>Crypto Assets, Blockchain Projects,</span> and more   
              </p>
            </div>
            {/* Image 2 end */}
          </div>
        </div>
        {/* Comparison bottom end */}
      </div>
      {/* end container-xl */}
    </section>
  );
}
