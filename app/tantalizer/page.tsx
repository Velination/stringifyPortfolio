// page.tsx
"use client";

import { useState } from "react";
import TantalizerFullLayout from "@/component/TantalizersFullLayout";
import TantalizerDesignLayout from "@/component/TantalizerDesignLayout";
import HomePage from "@/component/NavBar";

const TantalizerHomePage = () => {
  const [currentSection, setCurrentSection] = useState<"caseStudy" | "design">("caseStudy");

  return (
    <div className="bg-black">
      
      <HomePage
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />

      
      {currentSection === "caseStudy" && <TantalizerFullLayout />}
      {currentSection === "design" && <TantalizerDesignLayout />}
    </div>
  );
};

export default TantalizerHomePage;