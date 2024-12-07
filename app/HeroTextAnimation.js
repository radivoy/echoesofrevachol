"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { encode } from "@/app/ui/fonts";
import { enableSmoothScroll } from "@/app/utils/smoothScroll";

export default function HeroTextAnimation({ sentence }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showLink, setShowLink] = useState(false);

  //Smooth Scroll
  useEffect(() => {
    const cleanupSmoothScroll = enableSmoothScroll();
    return cleanupSmoothScroll; // Cleanup on unmount
  }, []);

  useEffect(() => {
    const words = document.querySelectorAll(`.${styles.word}`);
    let timeoutId;
    const animateWords = (index) => {
      if (index >= words.length) {
        setShowLink(true); // Show the link when all words are animated
        return;
      }
      const word = words[index];
      word.classList.add(styles.visible);
      if (index === 0) {
        word.classList.add(styles.psy); // Add the "psy" class to the first word
      }
      const isDot = word.textContent.includes(".");
      const delay = isDot ? 750 : 100; // Extra delay after words with a dot
      timeoutId = setTimeout(() => {
        setCurrentWordIndex(index + 1); // Update state for tracking progress
        animateWords(index + 1);
      }, delay);
    };
    animateWords(currentWordIndex); // Start animation
    return () => clearTimeout(timeoutId); // Cleanup on component unmount
  }, [currentWordIndex]);

  return (
    <div className={styles.herotext}>
      <div>
        {sentence.split(" ").map((word, index) => (
          <span key={index} className={styles.word} style={{ marginRight: "4px" }}>
            {word}
          </span>
        ))}
        <a
          href="#printandplay"
          className={`${encode.className} antialiased ${styles.btn} ${showLink ? styles.visible : ""}`}
          title="Print and Play"
        >
          Print and Play
        </a>
      </div>
    </div>
  );
}
