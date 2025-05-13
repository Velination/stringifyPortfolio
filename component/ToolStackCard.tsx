import React from 'react';
import styles from '@/component/ToolStackCard.module.css'; // Fixed typo: 'component' -> 'components'
import Image from 'next/image';
import { Bruno_Ace  } from 'next/font/google';

const brunoAce = Bruno_Ace({
  subsets: ['latin'],
  weight: '400',
});


interface Tool {
  name: string;
  imageSrc: string;
}

interface ToolsStackProps {
  tools: Tool[];
}

const ToolsStack: React.FC<ToolsStackProps> = ({ tools }) => {
  return (
    <div className={styles.container}>
      <h2 className={`${styles.h2} ${brunoAce.className}`}>TOOLS STACK</h2>
      <div className={styles.tools}>
        {tools.map((tool, index) => (
          <div key={index} className={styles.toolItem}>
            <Image
              src={tool.imageSrc}
              alt={tool.name}
              width={40}
              height={40}
              className={styles.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsStack;
