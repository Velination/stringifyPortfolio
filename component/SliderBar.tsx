"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxPerson, RxHome, RxDesktop } from "react-icons/rx";
import { RiFileCopyLine, RiFileCopyFill } from "react-icons/ri";
import styles from "./SlideBar.module.css";

const Sidebar: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);

  const email = "info@rockrealty.com";

  const handleCopyClick = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <div className={styles.sidebar}>
      {/* Vertical Line */}
      <div className={styles.line}></div>

      <Link href="/">
      <div className={styles.logo}>
        <Image
          src="/images/LAJ Logo 3.png"
          alt="Logo"
          width={24}
          height={24}
        />
      </div>
 
      </Link>
      
      {/* Sidebar Icons */}
      <div className={styles.icons}>
        <Link href='/'><RxHome className={styles.icon} /></Link>
        <Link href='/AboutPage'><RxPerson className={styles.icon} /></Link>
        <Link href='/ProjectPage'><RxDesktop className={styles.icon} /></Link>
    

      {/* Copy Icon with Text */}
      <div className={styles.mobileMenuItem} onClick={handleCopyClick}>
        {isCopied ? (
          <RiFileCopyFill className={styles.icon} />
        ) : (
          <RiFileCopyLine className={styles.icon} />
        )}
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
