import Link from 'next/link';
import Image from 'next/image';
import styles from './notFound.module.css';

// Icons
import { FaHome } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <Image
        src='/images/404/page-not-found.png'
        alt='page not found'
        width={500}
        height={350}
      />
      <h2 className={styles.title}>404 Not Found</h2>
      <p className={styles.description}>
        And if curiosity gets the best of you, fear not the &quot;Back&quot; button. It&apos;s
        a trusty compass in this digital expanse, always ready to guide you back
        to familiar territory.
      </p>
      <Link className={`primary-btn ${styles.link}`} href="/">
        {' '}
        <span className={styles.icon}>
          <FaHome />
        </span>
        Back to home
      </Link>
    </div>
  );
}
