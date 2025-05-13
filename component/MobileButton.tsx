"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./ArrowButton.module.css";
import { RiFileCopyLine, RiFileCopyFill, RiHomeLine } from "react-icons/ri";
import { RxPerson, RxDesktop } from "react-icons/rx";
import Link from "next/link";

interface NextProjectButtonProps {
  disableMobile?: boolean;
}

const NextProjectButton: React.FC<NextProjectButtonProps> = ({ disableMobile }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const email = "info@rockrealty.com";

  // ✅ Detect screen size and update isMobile state
  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth <= 768);
    updateIsMobile(); // run on mount
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleCopyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  // ✅ Render only mobile menu (no next project button)
  if (!isMobile || disableMobile) {
    return null; // Render nothing if not mobile or disableMobile is true
  }

  return (
    <div className={styles.container}>
      {/* Hamburger Menu for mobile */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/">
            <div className={styles.mobileMenuItem}>
              <RiHomeLine /> Home
            </div>
          </Link>
          <Link href="/AboutPage">
            <div className={styles.mobileMenuItem}>
              <RxPerson /> About
            </div>
          </Link>
          <Link href="/ProjectPage">
            <div className={styles.mobileMenuItem}>
              <RxDesktop /> Projects
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
    </div>
  );
};

export default NextProjectButton;
