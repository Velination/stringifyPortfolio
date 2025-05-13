// components/UserGoals.tsx
import React from 'react';
import styles from '@/component/DifferentUser.module.css';
import { Poppins, Figtree } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '400'],
});

const figtree = Figtree({
    subsets: ['latin'],
    weight: ['400', '900'],
  });

const users = [
  {
    title: 'The Aspiring Homeowner',
    description:
      'New to the real estate market, they seek a trusted partner like Rock Realty to guide them through the home buying process. They aim to find affordable properties, understand financing options, and gain confidence in their first major investment.',
  },
  {
    title: 'The Savvy Investor',
    description:
      'These users are busy individuals, often office workers or students, who need a fast and convenient meal solution during their lunch break or on the go.',
  },
  {
    title: 'The Nostalgic Regular',
    description:
      'Experienced investors looking to expand their portfolio, they rely on Rock Realty to identify lucrative opportunities. Their goal is to access detailed property information, evaluate potential returns, and streamline the acquisition process for optimal investment growth.',
  },
  {
    title: 'The Family Seeker',
    description:
      ' Families looking for a better living situation. They want to find family-friendly properties that meet their needs and budget, access information about neighbourhoods and amenities, and explore flexible payment plans to secure a comfortable and secure home',
  },
];

const UserGoals: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={`${styles.heading} ${figtree.className}`}>Different Users and Their Goals</h2>
      <div className={styles.userList}>
        {users.map((user, index) => (
          <div className={styles.userRow}  key={index}>
            <div className={`${styles.userTitle} ${figtree.className}`}>{user.title}</div>
            <div className={`${styles.userDescription} ${figtree.className}`}>{user.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserGoals;