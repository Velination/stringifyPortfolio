import { Figtree, Bruno_Ace } from 'next/font/google';
import ProficientCard from '@/component/ProficientAreaCard';
import styles from '@/component/ProficientAreaCard.module.css';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['900', '400'],
});

const brunoAce = Bruno_Ace({
    subsets: ['latin'],
    weight: [ '400'],
  });

  const cardData = [
    {
      icon: '/images/mobile.png',
      title: 'Mobile App Design',
      description: 'Crafting mobile applications that are user-friendly, visually appealing, and optimised for performance.',
    },
    {
      icon: '/images/devices.png',
      title: 'Web App Design',
      description: 'Building web applications that seamlessly blend form and function for a superior online experience.',
    },
    {
      icon: '/images/layer.png',
      title: 'Product Strategy',
      description: 'Charting the course for success with well-informed strategies that align product goals with market demands.',
    },
    {
      icon: '/images/pen-tool.png',
      title: 'User Interface (UI)',
      description: 'Creating appealing stand out user interfaces that distinguish your product from competitors and catches the attention of users.',
    },
    {
      icon: '/images/mouse-square.png',
      title: 'User Experience (UX)',
      description: 'Elevating user satisfaction through user-centric design, ensuring every interaction is meaningful and delightful.',
    },
    {
      icon: '/images/3square.png',
      title: 'Design Systems',
      description: 'Creating cohesive design ecosystems that ensure consistency and brand integrity across all touchpoints.',
    },
  ];

export default function AreaProfCard() {
  return (
    <section className={styles.container}>
      <div className={styles.titleRow}>
        <h2 className={`${styles.recent} ${figtree.className}`}>PROFICIENT</h2>
        <h2 className={`${styles.projects} ${figtree.className}`}>&nbsp;AREAS</h2>
      </div>
      <div className={`${styles.subLinks} ${brunoAce.className}`}>
        <span >SKILL NICHE</span>
        <div className={styles.line}></div>
        <span></span>
        <div className={styles.line}></div>
        <span>SPECIALTIES</span>
      </div>
      
      
      < div className={styles.gridWrapper}>
    <div className={styles.grid}>
      {cardData.map((card, index) => (
        <ProficientCard
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  </div>
    </section>
  );
}
