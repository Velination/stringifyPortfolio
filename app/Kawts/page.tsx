// page.tsx
"use client";

import { useState } from "react";
import KwatsDesign from "@/component/KwatsDesignPage";

import HomePage from "@/component/NavBar";

const KwatsHomePage = () => {
  const [currentSection, setCurrentSection] = useState<"caseStudy" | "design">("caseStudy");

  return (
    <div className="bg-black">
      
      <HomePage
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />

      
      {currentSection === "caseStudy" && <KwatsDesign />}
      {currentSection === "design" && <KwatsDesign />}
    </div>
  );
};

export default KwatsHomePage;