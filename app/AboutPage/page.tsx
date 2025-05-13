import Link from 'next/link';
import Head from "next/head";
import styles from "./AboutPage.module.css";
import Sidebar from '@/component/SliderBar';
import AboutSection from '@/component/AboutSection';
import AnimatedDivider from '@/component/AnimatedDivider';
import WorkTogether from '@/component/LetsWorkTogetherCard';
import AreaProfCard from '@/component/AreaProfCard';
import ThankYouFooter from '@/component/ThankYouCard';
import DashboardLayout from '@/component/dashboardLayout';


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
<AboutSection  />
</div>

<div style={{marginBottom: '150px'}}>
<AnimatedDivider  />
</div>



<div className={styles.space}>
<DashboardLayout />
</div>

<div >
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

