"use client"

import styles from './Banner.module.scss';
import { Routes } from '@/constants/routes';
import { useRouter } from 'next/navigation';

export default function Banner() {
  const router = useRouter();
  const click = () => {
    router.push(Routes.All)
  }
  return (
    <div className={styles.banner}>
      <div>
        <h1>Welcome to Our Store</h1>
        <p className="mt-4">Find the best products here!</p>
        <button onClick={click}>Shop all</button>
      </div>
        
    </div>
  );
}
