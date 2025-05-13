"use client";
import React, { useState } from 'react';
import styles from './AllProjectButton.module.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
});

interface ButtonWithIconProps {
  email: string;
}

const AllProjectButton: React.FC<ButtonWithIconProps> = ({ email }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className={`${styles.buttonContainer} ${poppins.className}`}>
      {email}
     
    </div>
  );
};

export default AllProjectButton;
