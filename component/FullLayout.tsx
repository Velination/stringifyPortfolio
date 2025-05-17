'use client';

import React from 'react';
import styles from './MyCareAssistants.module.css';


import MobileMockup from '@/component/MobileMockUp';

import ImageCardComponent from '@/component/ImageCardStructure';

import CaseStudyOverview from '@/component/MyCareCaseStudy';
import styless from '@/component/MyCareCaseStudy.module.css';
import CaseStudySection from '@/component/MyCareCaseStudySection';
import stylesss from '@/component/MyCareCaseStudySection.module.css';
import Storyboarding from "@/component/MyCareStory";
import TargetAudience from '@/component/TargetAudience';
import TargetAudiences from '@/component/TargetAudienceSandra';
import MyQuraClient from '@/component/MyQuraClient';
import MyQuraProfessional from '@/component/MyQuraProffessional';
import RetrospectComponent from "@/component/TimeCard";
import ProjectCard from '@/component/ProductCard';
import ThankYouFooter from '@/component/ThankYouCard';
import { Bruno_Ace, Poppins, Figtree } from 'next/font/google';
import StoryboardingHeader from '@/component/StoryBoardingheader';




// Fonts
const brunoAce = Bruno_Ace({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const figtree = Figtree({ subsets: ['latin'], weight: '900' });



const FullView: React.FC = () => {
  return (
   <>
     <div className={styles.wrapper}>
      <div className={styles.container}>
       
       
       {/* Logo */}
       <div className={styles.logoContainer}>
          <img src="/images/MCA LOGO SVG.png" alt="Logo" width={96} height={96} /> 
        </div>

        {/* Project Year */}
        <div className={`${brunoAce.className} ${styles.projectYear}`}>
          MYCARE ASSISTANT (MYQURA) - 2024
        </div>

        {/* Main Headings */}
        <h2 className={`${poppins.className} ${styles.mainHeading}`}>Care Service App for</h2>
        <span className={`${poppins.className} ${styles.subHeading}`}>
          Care Professionals & Patients
        </span>

        {/* Image Cards */}
        <div>
        <ImageCardComponent src="/images/Scene 18(first image).png" alt="Scene 1" width={1272} height={705} />
        </div>

        <CaseStudyOverview
      client="MyCare Assistant"
      role="Lead Designer"
      timeline="3 months"
      responsibilities={[
        "User Research",
        "User Flows & Wireframes",
        "Design Direction",
        "Storyboarding",
        "Visual Design",
        "Prototyping",
      ]}
      overviewTitle="Overview"
      overviewText={[
        <>
          <span className={styless.ife}>MyCare Assistant</span> is a leading Nigerian home <span className={styless.span}>healthcare service provider</span> dedicated to delivering <span className={styless.ife}>comprehensive and compassionate care.</span> 
          Driven by a vision of creating a robust and <span className={styless.ife}> accessible health solution,</span> MyCare Assistant offers a diverse range of services tailored to meet the <span className={styless.ife}>unique needs of individuals requiring care </span> in the comfort of their own homes. 
          This led to the foundation of the app: <span className={styless.ife}>“MyQura by MyCare Assistant”.</span>
        </>,
        <div className={styless.space}>
          These <span className={styless.ife}>services</span> are provided by a team of <span className={styless.ife}>highly trained and skilled care professionals</span>, ensuring the highest quality of care.  
          The spectrum of services offered includes, but is not limited to, <span className={styless.ife}>elderly care, specialised dementia care, mental health support, and creative support</span>, 
          demonstrating a commitment to addressing a wide array of care requirements.
        </div>
      ]}
      />



<div className={stylesss.wrapper}>
      <CaseStudySection
        title="The Problem"
        content={[
            <>
          The relative of the founder of MyCare Assistant suffered a major health challenge, 
          and the inadequate and costly support services led to her death. 
          This led to the birth of MyCare Assistant, 
          the company grew and handled all their operations manually.&nbsp;<strong>However, as the business grew and the volume of Clients and Care 
            Professionals increased, this manual approach became unsustainable. 
            To address the challenges with the manual approach, 
            MyCare Assistant recognised the necessity of transitioning from manual 
            operations to a digital platform.</strong>
          ,
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



<StoryboardingHeader
  title="STORY BOARDING"
  description="In order to seamlessly achieve the business and design goals, 
  the illustration below represents the process I went through:"
/>

<Storyboarding />

<StoryboardingHeader
  title="TARGET AUDIENCE"
  description="In order to seamlessly achieve the business and design goals, 
  the illustration below represents the process I went through:"
/>

<TargetAudience />


<TargetAudiences />

<MyQuraClient />


<MobileMockup/>


<MyQuraProfessional />



<RetrospectComponent />


<div className={styles.projectCardContainer}>
        <ProjectCard
        title="NEXT PROJECT"
        projectTitle="Restaurant Website"
        description="Redesign"
        imageSrc="/images/Scene 12 1.png"
      />
        </div>


<ThankYouFooter />


      </div>
    </div>
    </>

  );
};

export default FullView;
