// app/component/NavBar.tsx or wherever your NavBar/HomePage file is
"use client";

import Sidebar from '@/component/SliderBar';
import ToggleSwitch from '@/component/ToggleButton';
import NextProjectButton from '@/component/ArrowButton';
import styles from '@/component/MyCareAssistants.module.css';
import type { Dispatch, SetStateAction } from "react";


type Props = {
  currentSection: "caseStudy" | "design";
  setCurrentSection: Dispatch<SetStateAction<"caseStudy" | "design">>;
};

const HomePage: React.FC<Props> = ({ currentSection, setCurrentSection }) => {
  return (
    <div>
      <Sidebar />
      
      <div className={styles.rowContainer}>
        <div className={styles.leftspace}></div>

        {/* 🔘 Center Toggle */}
        <div className={styles.centerToggle}>
          <ToggleSwitch
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />
        </div>

        <div>
          <NextProjectButton />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
