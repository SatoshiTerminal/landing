import Image from 'next/image';
import styles from './HomePage.module.css';

// Sections
import RoadMap from '@/sections/RoadMap';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container">
        <h1 className={styles.title}>Next 13 Sarter template and components</h1>
        {/* Test navbar scroll to sections id start */}
        <section className={`${styles.section} ${styles.about}`} id="about">
          <h2>About</h2>
        </section>
        <section className={`${styles.section} ${styles.services}`} id="services">
          <h2>Servises</h2>
        </section>
         {/* Test navbar scroll to sections id end */}
      </div>
      {/* RoadMap section start */}
      <RoadMap />
      {/* RoadMap section end */}
    </main>
  );
}
