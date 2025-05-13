// page.tsx
"use client";

import { useState } from "react";
import RockRealtyFullLayout from "@/component/RockRealtyFullLayout";
import RockRealtyDesignLayout from "@/component/RockRealtyDesignLayout";
import HomePage from "@/component/NavBar";

const TantalizerHomePage = () => {
  const [currentSection, setCurrentSection] = useState<"caseStudy" | "design">("caseStudy");

  return (
    <div className="bg-black">
      
      <HomePage
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />

      
      {currentSection === "caseStudy" && <RockRealtyFullLayout />}
      {currentSection === "design" && <RockRealtyDesignLayout />}
    </div>
  );
};

export default TantalizerHomePage;