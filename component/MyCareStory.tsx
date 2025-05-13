// components/Storyboarding/Storyboarding.tsx
import React from "react";
import styles from "@/component/MyCareStory.module.css";
import { Figtree, Poppins } from 'next/font/google';


const figtree = Figtree({
  subsets: ['latin'],
  weight: ['900', '400'],
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400'],
  });


export interface StoryCardProps {
  image: string;
  description: string;
}

const storyData: StoryCardProps[] = [
  {
    image: "/images/Rectangle 17.png",
    description: "Oluwatobi is living in Canada with her family."
  },
  {
    image: "/images/Rectangle 18.png",
    description: "Oluwatobi's Dad has been sick with an ailment. And he has been rushed to the hospital."
  },
  {
    image: "/images/Rectangle 19.png",
    description: "Oluwatobi's Dad condition has gotten better. And has been discharged from the hospital."
  },
  {
    image: "/images/Rectangle 20.png",
    description: "Oluwatobi’s needs a care professional to look after her Dad. In search for a health care service provider. Her friend introduced her to MyQura."
  },
  {
    image: "/images/Rectangle 21.png",
    description: "Oluwatobi’s signs up, registers her Dad as a patient and requests for care professionals."
  },
  {
    image: "/images/Rectangle 22.png",
    description: "Care Professionals logs into their app to accept care services best suited to their skills set and location. "
  },
  {
    image: "/images/Rectangle 23.png",
    description: "Care professionals attends to the patient for the stipulated number of days or months. "
  },
  {
    image: "/images/Rectangle 24.png",
    description: "Oluwatobi is happy that her Dad is well taken care of, even in her absence. "
  },
  {
    image: "/images/Rectangle 25.png",
    description: "The Care Professional is excited that offer her skills and the result is evident."
  }
];

const Storyboarding: React.FC = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.grid}>
        {storyData.map((story, index) => (
          <div key={index} className={styles.card}>
            <img src={story.image} alt="storyboard" className={styles.image} />
            <p className={styles.text}>{story.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Storyboarding;
