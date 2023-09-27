import Image from 'next/image';
import styles from './HomePage.module.css';

// Sections
import HeaderHome from '@/sections/home/HeaderHome';
export default function Home() {
  return (
    <main className={styles.main}>
      {/* Header */}
      <HeaderHome />
    </main>
  );
}
