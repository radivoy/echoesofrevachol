"use client";
import Image from "next/image";
import styles from "./page.module.css";
import HeroTextAnimation from "./HeroTextAnimation";
import PrintHome from "./PrintHome";
import Tabletop from "./Tabletop";
import AboutUs from "./AboutUs";


export default function Home() {
  const sentence =
    "[VOLITION] - You’ve solved worse cases. Or maybe not. But you’re still standing, and that counts for something. Come on. One more for the books.";

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Image
          src="/echoesofrevachol/logo.png"
          width={448}
          height={261}
          alt="Echos of Revachol A Disco Elysium Card Game"
          className={styles.logo}
          unoptimized
        />
      </header>
      <div className={styles.hero}>
        <div className={styles.cards}>
          <Image
            src="/echoesofrevachol/cards.png"
            width={592}
            height={443}
            alt="Echos of Revachol A Disco Elysium Card Game"
            className={styles.cardsImg}
            unoptimized
          />
        </div>
        <HeroTextAnimation sentence={sentence} />
      </div>
      <PrintHome />
      <Tabletop />
      <AboutUs />
    </div>
  );
}
