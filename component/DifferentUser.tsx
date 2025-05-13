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
    title: 'The Quick Bite',
    description:
      'These users are busy individuals, often office workers or students, who need a fast and convenient meal solution during their lunch break or on the go.',
  },
  {
    title: 'The Family Meal Planner',
    description:
      'These users are busy individuals, often office workers or students, who need a fast and convenient meal solution during their lunch break or on the go.',
  },
  {
    title: 'The Nostalgic Regular',
    description:
      'These users are loyal Tantalizers customers who have been enjoying their food for years. They have their favorite dishes and appreciate the familiar taste.',
  },
  {
    title: 'The New Food Explorer',
    description:
      'These users are new to Tantalizers or are looking to try new food options. They are curious about the menu and want to explore different flavors.',
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