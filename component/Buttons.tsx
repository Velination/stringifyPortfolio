"use client";
import React, { useState } from 'react';
import { RiFileCopyLine, RiFileCopyFill } from 'react-icons/ri';
import styles from './Button.module.css';

interface ButtonWithIconProps {
  email: string;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ email }) => {
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
    <div className={styles.buttonContainer}>
      {email}
      <div onClick={handleCopyClick}>
        {isCopied ? (
          <RiFileCopyFill className={styles.copyIcon} />
        ) : (
          <RiFileCopyLine className={styles.copyIcon} />
        )}
      </div>
      {isCopied && <span className={styles.copiedText}>Copied!</span>}
    </div>
  );
};

export default ButtonWithIcon;
