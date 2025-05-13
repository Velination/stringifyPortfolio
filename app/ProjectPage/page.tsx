import Link from 'next/link';
import Head from "next/head";
import styles from "./ProjectPage.module.css";
import Sidebar from '@/component/SliderBar';
import ProjectHeroSection from '@/component/ProjectHeroSection';
import AnimatedDivider from '@/component/AnimatedDivider';
import WorkTogether from '@/component/LetsWorkTogetherCard';
import ThankYouFooter from '@/component/ThankYouCard';
import RecentProjectsForAll from '@/component/RecentProjectsForAll';


const About = () => {
  return (
    <>
    <Head>
      <title>About Page</title>
    </Head>
         
      
     <div className={styles.background}>
        <div className={styles.overlay}>
   
        {/* SideBar */}
        <Sidebar />
<div>
<ProjectHeroSection  />
</div>

<div style={{marginBottom: '150px'}}>
<AnimatedDivider  />
</div>



<div style={{marginBottom: '50px',
   
}}>
<RecentProjectsForAll />
</div>

<div style={{marginBottom: '50px'}}>
<WorkTogether />
</div>

<div>
<ThankYouFooter/>
</div>

</div>
</div>
</>

);
}
export default About;

