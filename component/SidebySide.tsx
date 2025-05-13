import React from 'react';
import styles from '@/component/SidebySide.module.css';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  colorClass: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, colorClass }) => (
  <div className={`${styles.serviceCard} ${colorClass}`}>
    <div className={styles.icon}>{icon}</div>
    <div className={styles.title}>{title}</div>
  </div>
);

const UserDashboard: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      {/* Left Side - Explanatory Text */}
      <div className={styles.imageColumn}>
        <Image src="/images/MyCare Home 1.png" alt="User dashboard screen 1" width={100} height={200} className={styles.mockupImage} />
        <Image src="/images/MyCare Home 2.png" alt="User dashboard screen 2" width={100} height={200} className={styles.mockupImage} />
      </div>
      
      <div className={styles.icon}>
        <Image src="/images/Vector 12.png" alt="User dashboard screen 1" width={800} height={800} />

      </div>

      {/* Right Side - Dashboard UI Mockup */}
      <div className={styles.textColumn}>
        <ol className={styles.instructions}>
          <li>
            <span className={styles.number} >
            <Image src="/images/Number.png" alt="User dashboard screen 1" width={60} 
            height={60}  />
            </span>
             A warm welcome from the home screen to help personalise the experience.</li>
          <li>
          <span className={styles.number} >
            <Image src="/images/Number (1).png" alt="User dashboard screen 1" width={60} 
            height={60}  />
            </span>
            The messages can be easily accessible in the case of support cases.</li>
          <li>
          <span className={styles.number} >
            <Image src="/images/Number (2).png" alt="User dashboard screen 1" width={60} 
            height={60}  />
            </span>
             There’s no second guessing of how to get started – the card explains the first thing to do.</li>
          <li>
          <span className={styles.number} >
            <Image src="/images/Number (3).png" alt="User dashboard screen 1" width={60} 
            height={60}  />
            </span>
             The services the user orders for more is placed before them so it’s easily accessible.</li>
          <li>
          <span className={styles.number} >
            <Image src="/images/Number (4).png" alt="User dashboard screen 1" width={60} 
            height={60}  />
            </span>
             After a patient has been added, the card changes based on what’s next for the user.</li>
        </ol>
      </div>
    </div>
  );
};

export default UserDashboard;
