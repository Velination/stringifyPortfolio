
import Head from "next/head";
import styles from "@/component/home.module.css";
import Sidebar from '@/component/SliderBar';
import Hero from '@/component/HeroHeader';
import DesignSection from '@/component/QuoteSection';
import AnimatedDivider from '@/component/AnimatedDivider';
import WorkTogether from '@/component/LetsWorkTogetherCard';
import AreaProfCard from '@/component/AreaProfCard';
import ThankYouFooter from '@/component/ThankYouCard';
import RecentProjects from '@/component/WriteHeader';
import AnimatedButton from '@/component/AnimatedButton';
import NextProjectButton from '@/component/MobileButton';


const Home = () => {
  return (
    <>
    <Head>
      <title>Home Page</title>
    </Head>
         
      
     <div className={styles.background}>
        <div className={styles.overlay}>
   
        {/* SideBar */}
        <Sidebar />
       
        <NextProjectButton />

<div style={{marginBottom: '50px'}}>
<Hero  />
</div>

<div style={{marginBottom: '150px'}}>
<AnimatedDivider  />
</div>

<div style={{marginBottom: '50px'}}>
<DesignSection />
</div>

<div style={{marginBottom: '50px'}}>
<RecentProjects />
</div>

  <AnimatedButton  />

<div style={{marginBottom: '50px'}}>
<AreaProfCard />
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
export default Home;

