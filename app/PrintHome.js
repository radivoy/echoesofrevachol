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
            src="/echoesofrevachol/drive.svg"
            //src="/drive.svg"
            width={28}
            height={28}
            alt="Download printables"
          />
          <span className={`${dobraBook.className} ${styles.btnSpan}`}>
            Now in <strong className={`${dobraMedium.className}`}>English</strong>, <strong className={`${dobraMedium.className}`}>Spanish</strong>, <strong className={`${dobraMedium.className}`}>Russian</strong> and <strong className={`${dobraMedium.className}`}>Turkish</strong>! 
          </span>
        </a>  
        <div className={styles.rules}>     
          <a
            href="/echoesofrevachol/EchoesOfRevachol_Rulebook.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.simpleLink}
            title="Download rules"
          >
            or download rules only
          </a>
          <a
            href="/echoesofrevachol/EchoesOfRevachol_Rulebook.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.simpleLink}
            title="Download rules"
          >
            <Image
              src="/echoesofrevachol/eng.svg"
              //src="/eng.svg"
              width={20}
              height={14}
              alt="English"
            />
          </a>
          <a
            href="/echoesofrevachol/EcosdeRevachol_Reglas.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.simpleLink}
            title="Download rules"
          >
            <Image
              src="/echoesofrevachol/esp.svg"
              //src="/esp.svg"
              width={20}
              height={14}
              alt="Español"
            />
          </a>
          <a
            href="/echoesofrevachol/Правила-Rulebook.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.simpleLink}
            title="Download rules"
          >
            <Image
              src="/echoesofrevachol/rus.svg"
              //src="/rus.svg"
              width={20}
              height={14}
              alt="Russian"
            />
          </a>
          <a
            href="/echoesofrevachol/Revachol_un_Yankıları_Kural_Kitabı.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.simpleLink}
            title="Download rules"
          >
            <Image
              src="/echoesofrevachol/tur.svg"
              //src="/tur.svg"
              width={20}
              height={14}
              alt="Türkiye"
            />
          </a>
        </div> 
        <div className={styles.dice}>
          <Image
            src="/echoesofrevachol/dice.svg"
            //src="/dice.svg"
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
        <div className={`${dobraBook.className} ${styles.credits}`}>
          Russian translation by <strong className={`${dobraMedium.className}`}>Ilya F.</strong> ❤️!
        </div>
        <div className={`${dobraBook.className} ${styles.credits}`}>
          Turkish translation by <strong className={`${dobraMedium.className}`}>B. Kelebekli</strong> ❤️!
        </div>

        <div className={`${styles.mpc}`}>
          <span>[SUGGESTION]</span> - Having trouble printing the cards? That’s alright — it’s nothing to worry about. We can share you the project on <a href="https://www.makeplayingcards.com" title="Make Playing Cards" target="_blank" rel="noopener noreferrer">makeplayingcards.com</a>, completely free. There’s nothing in it for us, just a chance to make things simpler for you. Email us to <a href="https://www.makeplayingcards.com" title="Make Playing Cards">echoesofrevachol@gmail.com</a>
        </div>
      </div>      
    </div>
  );
}