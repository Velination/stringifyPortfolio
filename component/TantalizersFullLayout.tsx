'use client';

import React from 'react';
import CaseStudySection from '@/component/MyCareCaseStudySection';
import stylesss from '@/component/MyCareCaseStudySection.module.css';
import ImageCardComponent from '@/component/ImageCardStructure';
import ProjectCard from '@/component/ProductCard';
import styless from '@/component/MyCareCaseStudy.module.css';
import UxAuditResearch from '@/component/TheWebsite';
import DigitalExperience from '@/component/Curating';
import UserGoals from '@/component/DifferentUser';
import Image from 'next/image';
import VisitorPainpoints from '@/component/WebsiteVistor';
import HomePageCard from '@/component/HomePageCard';
import styles from '@/component/TantalizerDesign.module.css';
import CaseStudyOverview from '@/component/MyCareCaseStudy';
import ThankYouFooter from '@/component/ThankYouCard';
import { Bruno_Ace, Poppins, Figtree } from 'next/font/google';
import ImageCard from '@/component/ImageComponent';
import BrowseToBite from '@/component/Browser';
import OutComeComponent from "@/component/OutComeCard"; 
import ProjectBannerCard from "@/component/imagelogo";
import TantilazerImageCard from '@/component/TantilazerHomePageCard';

// Fonts
const brunoAce = Bruno_Ace({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const figtree = Figtree({ subsets: ['latin'], weight: '900' });


const images = [
    { src: '/images/Tantalizer Home Page 2.png', alt: 'Light Theme Homepage' },
    { src: '/images/Frame 115.png', alt: 'Dark Theme Homepage' },
  ];

const menuItems = [
    {
      src: '/images/Tantalizer Home Page 1.png',
      alt: 'Light Theme Homepage',
      title: 'MENU',
    },
  ];

  
const menusItems = [
  {
    src: '/images/Frame 116.png',
    alt: 'Light Theme Homepage',
    title: 'MENU',
  },
];


const TantalizerFullLayout: React.FC = () => {
  return (
   <>
     <div className={styles.wrapper}>
      <div className={styles.container}>
       

        
      
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Image src="/images/tantalizer_logo.png" alt="Logo" width={96} height={96} />
        </div>

        {/* Project Year */}
        <div className={`${brunoAce.className} ${styles.projectYear}`}>
          TANTALIZERS - 2023
        </div>

        {/* Main Headings */}
        <h2 className={`${poppins.className} ${styles.mainHeading}`}>Restaurant Website</h2>
        <span className={`${poppins.className} ${styles.subHeading}`}>
          Redesign
        </span>

        {/* Image Cards */}
        
        <ImageCardComponent src="/images/MOCKUP 5.jpg" alt="Scene 1" width={1072} height={505} />
        
        
        <CaseStudyOverview
      client="Tantalizer"
      role="Lead Designer"
      timeline="3 months"
      responsibilities={[
        "User Research",
        "User Flows & Wireframes",
        "Design Direction",
        "Storyboarding",
        "Visual Design",
      ]}
      overviewTitle="Overview"
      overviewText={[
        <>
           Tantalizers PLC stands as one of Nigeria's pioneering quick-service restaurant chains, established in May 1997. 
          <span className={styless.ife}>For over two decades, Tantalizers has been a household name, offering a diverse menu of fast food options, including both 
          Nigerian delicacies and international dishes, to cater to the evolving tastes of Nigerians. </span>
        </>,
        <div className={styless.space}>
           <span className={styless.ife}>As the world of technology  revolves, Tantalizers recognised the need to evolve, 
            particularly in making it easier for customers to order their food.</span>
             Which led to optimising outlets, revising product offerings, and most importantly adopting new digital strategies to appeal 
           to Nigeria's increasingly tech-savvy consumer base.
        </div>
      ]}
      />


<div style={{marginBottom: '150px'}}>
<div className={stylesss.wrapper}>
      <CaseStudySection
        title="The Problem"
        content={[
            <>
     


         <ul className={`${styles.list} ${poppins.className}`}>
                  <li><strong className={styles.pan}>Increased Competition: </strong>Tantalizers faces stiff competition from international chains like KFC and Domino's, 
                  as well as local competitors such as Chicken Republic.</li>
                  <li><strong className={styles.pan}>Lack of Modernization:</strong> Competitors have adapted to changing 
              consumer preferences by offering lower-cost options and robust digital ordering systems, areas where Tantalizers has 
                  struggled to modernize.</li>
                  <li><strong className={styles.pan}>Financial Challenges: </strong> Tantalizers has recorded losses since 2020.</li>
                  <li><strong className={styles.pan}>Need for 
                  Digital Strategy:</strong> Tantalizers needs to adopt new digital strategies to appeal to Nigeria's increasingly tech-savvy 
                  consumer base.</li>
                </ul>
          </>
        ]}

      />
      <CaseStudySection
        title="The Solution"
        content={[
            <>
          After thoroughly understanding MyCare Assistant’s business processes, 
          we determined that a mobile application for both clients and care 
          professionals was the ideal solution.&nbsp;
          
            <strong>This app empowers clients to monitor care professional 
                activities, including clock-in and clock-out times, providing 
                transparency and peace of mind. Care professionals, in turn, 
                can use the app to manage their schedules, accepting or 
                declining care service requests based on their availability and 
                preferences.Furthermore, the Care Professional app provides access
                 to affordable courses designed to enhance their skill sets and 
                 professional development. </strong>
          </>,
          
        ]}
      />
    </div>
    </div>

    <ProjectBannerCard
  imageSrc="/images/Frame 112.png"
  altText="Rock Realty Limited Banner"
/>

    
    <UxAuditResearch />
    

    
   
    <VisitorPainpoints />
    

  

    
    <UserGoals />
    

    <DigitalExperience />
    

    
    <ImageCard items={menuItems} />
    
    <HomePageCard images={images} />
   

   
    <BrowseToBite />
    

    
    <TantilazerImageCard items={menusItems} />
  
    
   
    <OutComeComponent />

    

    

    
        <div className={styles.projectCardContainer}>
        <ProjectCard
        title="NEXT PROJECT"
        projectTitle="Real Estate Website"
        description="Redesign"
        imageSrc="/images/Scene 12 1 (1).png"
      />
        </div>

        {/* Thank You Footer */}
        <ThankYouFooter />
      </div>
    </div>
    
    </>

  );
};

export default TantalizerFullLayout;
