'use client';

import React from 'react';
import UxAuditResearch from '@/component/TheWebsite';
import ImageCardComponent from '@/component/ImageCardStructure';
import ProjectCard from '@/component/ProductCard';
import CaseStudySection from '@/component/MyCareCaseStudySection';
import CaseStudyOverview from '@/component/MyCareCaseStudy';
import styless from '@/component/MyCareCaseStudy.module.css';
import Image from 'next/image';
import UserGoals from '@/component/RockRealtyDifferentUser';
import HeroSection from '@/component/VideoCard';
import ImageCard from '@/component/ImageComponent';

import ShowCase from '@/component/RockRealtyshowcase';
import HomePageCard from '@/component/HomePageCard';
import VisitorPainpoints from '@/component/WebsiteVistoreforRockRealty';
import stylesss from '@/component/MyCareCaseStudySection.module.css';
import styles from '@/component/RockRealtyLimitedDesign.module.css';
import ThankYouFooter from '@/component/ThankYouCard';
import { Bruno_Ace, Poppins, Figtree } from 'next/font/google';
import DigitalExperience from '@/component/RockRealtyExperience';
import OutComeComponent from "@/component/OutComeCard"; 
import ProjectBannerCard from "@/component/imagelogo";


// Fonts
const brunoAce = Bruno_Ace({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const figtree = Figtree({ subsets: ['latin'], weight: '900' });

const images = [
  { src: '/images/Frame 114.png', alt: 'Light Theme Homepage' },
  { src: '/images/Frame 115 (1).png', alt: 'Dark Theme Homepage' },
];

const menuItems = [
    {
      src: '/images/Company Logo.png',
      alt: 'Light Theme Homepage',
      title: 'MENU',
    },
  ];

const RockRealtyFullLayout: React.FC = () => {
  return (
   <>
     <div className={styles.wrapper}>
      <div className={styles.container}>
        
      
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Image src="/images/image 2.png" 
          alt="Logo" 
          width={304} 
          height={96}
          className={styles.logo}/>
        </div>

        {/* Project Year */}
        <div className={`${brunoAce.className} ${styles.projectYear}`}>
          ROCK REALTY LIMITED - 2024
        </div>

        {/* Main Headings */}
        <h2 className={`${poppins.className} ${styles.mainHeading}`}>Real Estate Website</h2>
        <span className={`${poppins.className} ${styles.subHeading}`}>
          Redesign
        </span>

        {/* Image Cards */}
        <div>
        <ImageCardComponent src="/images/Rock Realty Main.png" alt="Scene 1" width={1072} height={505} />
        </div>
        
        
        <CaseStudyOverview
      client="Rock Realty Limited"
      role="Lead Designer"
      timeline=" 2 months"
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
           
          <span className={styless.ife}>Rock Realty Limited is a Nigerian real estate firm dedicated to democratizing property ownership
          and investment, focusing on accessibility for middle-income earners. </span>
          They offer a full spectrum of services,
         from development and advisory to investment planning, built on principles of transparency, integrity,
          and client-centricity.
        </>,
        <div className={styless.space}>
            Recognizing the critical importance of a user-friendly digital presence in today's market, 
            Rock Realty invested in a website redesign.
           <span className={styless.ife}>This redesign aimed to enhance user experience, build trust, and 
           simplify the often complex process of navigating the Nigerian real estate market online.</span>
           By creating a seamless 
          and informative platform, 
        Rock Realty empowers clients to make informed decisions and confidently pursue their real estate goals.
        </div>
      ]}
      />



<div className={stylesss.wrapper}>
      <CaseStudySection
        title="The Problem"
        content={[
            <>
               
                

          <ul className={`${styles.list} ${poppins.className}`}>
                  <li><strong className={styles.pan}>Lack of Clear Digital Presence:</strong>Rock Realty faces the need for a "strong digital presence",
                  a "user-friendly and informative online platform." Which the the current website doesn’t meet these standards.</li>
                  <li><strong className={styles.pan}>Need for Enhanced User Experience:</strong> The current website wasn’t well structured so the company experienced some 
                  usability issues that hinder user engagement.</li>
                  <li><strong className={styles.pan}>Building Trust: </strong>The current website has not been effectively 
                  establishing credibility and confidence among potential clients. </li>
                  <li><strong className={styles.pan}>Need to simplify the complex process of
                  navigating the Nigerian real estate market.</strong></li>
                </ul>
          </>
        ]}

      />
      <CaseStudySection
        title="The Solution"
        content={[
            <>

              To address these challenges, I redesigned Rock Realty's website. &nbsp;
          
            <strong>I redesigned Rock Realty's website. The goal was to create a seamless and 
                informative platform that simplifies the real estate process. This redesign focused on enhancing 
                user experience, building trust through clear communication, and reflecting Rock Realty's innovative
                 approach in the digital space. </strong>
Ultimately, I aimed to empower clients with easy access to information and a confident online journey.
          </>,
          
        ]}
      />
    </div>
    

    
 

  
      <ProjectBannerCard
  imageSrc="/images/Company Logo (1).png"
  altText="Rock Realty Limited Banner"
/>


    
    <UxAuditResearch />
  

    
    <VisitorPainpoints />
   

    
        <ImageCard items={menuItems} />
      
        
        
    <UserGoals />
  

    
    <DigitalExperience />
   

    
    

    <HeroSection />
    

    
    <ShowCase/>
    
      
      
      <HomePageCard images={images} />
   
    
    
    <OutComeComponent />
  

        <div className={styles.projectCardContainer}>
        <ProjectCard
        title="NEXT PROJECT"
        projectTitle="Courier Service App"
        description="for Delivery Service"
        imageSrc="/images/Scene 12 1 (2).png"
      />
        </div>

      
        <ThankYouFooter />
      </div>
    </div>
    </>

  );
};

export default RockRealtyFullLayout;
