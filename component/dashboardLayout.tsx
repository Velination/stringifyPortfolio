'use client';

import { motion } from 'framer-motion';
import styles from '@/component/dashboardLayout.module.css';
import AboutMeCard from '@/component/AboutMeFirstCard';
import AboutMe from '@/component/AboutMeCard';
import AboutMePictureCard from '@/component/AboutMePictureCard';
import ImageSlider from '@/component/SlidingImageCardForAboutPage';
import Experience from '@/component/ExperienceCard';
import Education from '@/component/EducationCard';
import ToolsStack from '@/component/ToolStackCard';


  const experience = [
    { title: 'Product Designer', company: 'Strengthy Consulting', date: '2024 - Present' },
    { title: 'Intern Product Designer', company: 'Fiducia Data Services', date: '2023 - 2024' },
    { title: 'Intern Product Designer', company: 'Handmaster Tech', date: '2022 - 2023' }
  ];

  const education = [
    { title: 'B.Sc (Ed)Computer Science', company: 'University of Nigeria,Nsukka', date: '2016 - 2019' },
    { title: 'Figma UI UX Design', company: 'Udemy . Daniel Walter Scott', date: '2024' },
    { title: 'User Experience Design Fundamentals', company: 'Udemy . Joe Natoli', date: '2024' },
    { title: 'Google UX Design', company: 'Coursera', date: '2022' }
  ];

const images = [
  '/images/image1.png',
  '/images/image2.png',
  '/images/image3.png',
  '/images/image4.png',
  '/images/image5.png',
  '/images/image6.png',
  '/images/image7.png',
  '/images/image8.png',
  '/images/image9.png',
  '/images/image10.png',
];

const tools = [
    { name: 'Figma', imageSrc: "/images/figma.png" },
    { name: 'UserTesting', imageSrc: "/images/UserTesting.png" },
    { name: 'GoogleMeet', imageSrc: "/images/GoogleMeet.png" },
    { name: 'trello', imageSrc: "/images/trello.png" },
    { name: 'Miro', imageSrc: "/images/Miro.png" },
    { name: 'Krita', imageSrc: "/images/Krita.png" },
    { name: 'whimsical', imageSrc: "/images/whimsical.png" },
    { name: 'looker Studio', imageSrc: "/images/looker Studio.png" },
    { name: 'Google sheets & Analytics', imageSrc: "/images/Google sheets&analytics.png" },
  ]

const DashboardLayout: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
     
        {/* Top Left - Hero Text */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={styles.profileCard}
        >
          <AboutMeCard/>
        </motion.div>

        {/* Top Middle - Profile Card */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={styles.heroCard}
        >
          <AboutMePictureCard  />
        </motion.div>

        {/* Top Right - Experience */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={styles.experienceCard}
        >
          <Experience experience={experience} />
        </motion.div>

        {/* Bottom Left - About Me */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.aboutMeCard}
        >
          <AboutMe />
        </motion.div>

        {/* Bottom Middle - Bottom Photo */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.photoCard}
        >
          
          <ImageSlider images={images} />
        </motion.div>

        {/* Bottom Right - Education & Tools */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.educationToolsCard}
        >
          <div className={styles.educationToolsWrapper}>
            <div className={styles.education}><Education experience={education} /></div>
            <div className={styles.tools}><ToolsStack tools={tools} /></div>
          </div>


        </motion.div>
      </div>
    </div>
  );
};

export default DashboardLayout;
