import React from 'react';
import styles from './OurProduct.module.css';
import Image from 'next/image';

// Components
import SectionHeader from '@/components/SectionHeader';

// Data
import { ourProductList } from '@/data/ourProductData';

export default function OurProduct() {
  return (
    <section className={`${styles.ourProduct} home-sect-p`}>
      <div className="container">
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
                <li key={index} className={styles.productItem}>
                  <Image
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
        </div>
      </div>
    </section>
  );
}
