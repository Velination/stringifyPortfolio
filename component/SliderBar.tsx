"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./SlideBar.module.css";

const Sidebar: React.FC = () => {
  const [hoveredIcon, setHoveredIcon] = useState("");

  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "info@rockrealty.com";

  const handleCopyClick = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true);
        alert("Copied!");
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Copy failed:", err);
      });
  };

  let imageSrc = "/images/Copy.png";
  if (copied) {
    imageSrc = "/images/Copied-Hover.png";
  } else if (hovered) {
    imageSrc = "/images/Copy-Hover.png";
  }
 

  return (
    <div className={styles.sidebar}>
      {/* Vertical Line */}
      <div className={styles.line}></div>

      {/* Logo */}
      <div className={styles.logo}>
        <Image
          src="/images/LAJ Logo 3.png"
          alt="Logo"
          width={24}
          height={24}
        />
      </div>

      {/* Sidebar Icons */}
      <div className={styles.icons}>

         <Link href="/">
    <div
    role="button"
  tabIndex={0}
     onMouseOver={() => setHoveredIcon("home")}
onMouseOut={() => setHoveredIcon("")}
className={styles.icon}
    >
      <Image
        src={hoveredIcon === "home" ? "/images/Home-Hover.png" : "/images/Home.png"}
        alt="Home"
        width={34}
        height={34}
      />
    </div>
  </Link>
         <Link href="/AboutPage">
    <div
    role="button"
  tabIndex={0}
         onMouseOver={() => setHoveredIcon("about")}
onMouseOut={() => setHoveredIcon("")}
className={styles.icon}
    >
      <Image
        src={hoveredIcon === "about" ? "/images/Profile-Hover.png" : "/images/Profile.png"}
        alt="About"
        width={24}
        height={24}
      />
    </div>
  </Link>
          <Link href="/ProjectPage">
    <div
    role="button"
  tabIndex={0}
         onMouseOver={() => setHoveredIcon("projects")}
onMouseOut={() => setHoveredIcon("")}
className={styles.icon}
    >
      <Image
        src={hoveredIcon === "projects" ? "/images/Monitor-Hover.png" : "/images/Monitor.png"}
        alt="Projects"
        width={24}
        height={24}
      />
    </div>
  </Link>
    

      {/* Copy Icon with Text */}
       

    <div
      onClick={handleCopyClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "pointer" }}
      className={styles.mobileMenuItem}
    >
      <Image
        src={imageSrc}
        alt="Copy Email"
        width={24}
        height={24}
      />
    </div>
  
        
      </div>
      </div>
    
  );
};

export default Sidebar;

