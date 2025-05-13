// page.tsx
"use client";

import { useState } from "react";
import FullView from "@/component/FullLayout";
import DesignsView from "@/component/DesignLayout";
import HomePage from "@/component/NavBar";

const TantalizerHomePage = () => {
  const [currentSection, setCurrentSection] = useState<"caseStudy" | "design">("caseStudy");

  return (
    <div className="bg-black">
      
      <HomePage
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />

      
      {currentSection === "caseStudy" && <FullView />}
      {currentSection === "design" && <DesignsView />}
    </div>
  );
};

export default TantalizerHomePage;