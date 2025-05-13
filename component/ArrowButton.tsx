"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { RxArrowRight } from "react-icons/rx";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./ArrowButton.module.css";
import { RiFileCopyLine, RiFileCopyFill, RiHomeLine } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";
import { RxDesktop } from "react-icons/rx";
import Link from "next/link";

interface NextProjectButtonProps {
  disableMobile?: boolean;
}

const NextProjectButton: React.FC<NextProjectButtonProps> = ({ disableMobile }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const email = "info@rockrealty.com"; // ✅ Define your email here

  const router = useRouter();
  const pathname = usePathname();

  const pages = ["/MyCare", "/tantalizer", "/RockRealty", "/Kawts"];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleCopyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  const handleNextProject = () => {
    const currentIndex = pages.indexOf(pathname || "/");
    const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % pages.length : 0;
    router.push(pages[nextIndex]);
  };

  const shouldShowMobile = isMobile && !disableMobile;

  return (
    <div className={styles.container}>
      {shouldShowMobile ? (
        <>
          <div className={styles.hamburger} onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>


          

          {isMenuOpen && (
            <div className={styles.mobileMenu}>
              
              <Link href="/">
          <div className={styles.mobileMenuItem}>
              <RiHomeLine />
                Home
                </div>
            </Link>
            <Link href="/AboutPage">
            <div className={styles.mobileMenuItem}>
              <RxPerson />
              About
              </div>
            </Link>
            <Link href="/ProjectPage">
            <div className={styles.mobileMenuItem}>
              <RxDesktop />
                Projects
                </div>
            </Link>
            
            <div className={styles.mobileMenuItem} onClick={handleCopyClick}>
                {isCopied ? (
                  <RiFileCopyFill className={styles.copyIcon} />
                ) : (
                  <RiFileCopyLine className={styles.copyIcon} />
                )}
                &nbsp;Email
              </div>
              
            </div>
          )}
        </>
      ) : (
        <div
          className={`${styles.nextProjectButton} ${
            disableMobile ? styles.forceDesktopMargin : ""
          }`}
          onClick={handleNextProject}
        >
          <h1 className={styles.nextProjectText}>Next Project</h1>
          <RxArrowRight className={styles.arrowIcon} />
        </div>
      )}
    </div>
  );
};

export default NextProjectButton;