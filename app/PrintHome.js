import localFont from "next/font/local";
import styles from "./PrintHome.module.css";
import { encode } from "@/app/ui/fonts";
import Image from "next/image";

// Load the Dobra fonts
const dobraBook = localFont({
  src: "./fonts/Dobra-Book.woff",
  weight: "400",
  display: "swap", // Optional, but recommended for better performance
});
const dobraMedium = localFont({
  src: "./fonts/Dobra-Medium.woff",
  weight: "600",
  display: "swap",
});

export default function PrintHome() {
  return (
    <div id="printandplay" className={styles.printHome}>
      <div className={styles.printHomeContent}>
        <span>
          <strong>Download</strong> and <strong>print</strong> the <strong>card files</strong>.
        </span>
        You'll also find the <strong>rulebook</strong>, an optional <strong>game board</strong>, and printing recommendations.
        <a
          href="https://drive.google.com/drive/folders/1xk_9m8xACwRvrX64NG8cCiAC9WJfPs8T?usp=sharing"
          target="_blank"
          rel="noopener noreferrer" // Security best practice for external links
          className={`${encode.className} antialiased ${styles.btn}`}
          title="Download printables"
        >
          Download printables
          <Image
            src="/drive.svg"
            width={28}
            height={28}
            alt="Download printables"
          />
        </a>
        <a
          href="/EchoesOfRevachol_Rulebook.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.simpleLink}
          title="Download rules"
        >
          or download rules only
        </a>
        <div className={styles.dice}>
          <Image
            src="/dice.svg"
            width={32}
            height={32}
            alt="Two six-sided dice"
          />
          <span className={dobraBook.className}>
            <strong className={dobraMedium.className}>
              Remember — You’ll need two six-sided dice.
            </strong>
            <br />
            The kind detectives always keep in their pockets—just in case.
          </span>
        </div>
      </div>
    </div>
  );
}
