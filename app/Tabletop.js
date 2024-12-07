import localFont from "next/font/local";
import styles from "./Tabletop.module.css";
import { encode } from "@/app/ui/fonts";
import Image from "next/image";

const dobraBook = localFont({
  src: "./fonts/Dobra-Book.woff",
  weight: "400",
  display: "swap",
});

export default function tableTop() {
  return (
    <div className={styles.tableTop}>
      <span className={dobraBook.className}> Available also on</span>
      <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3363215363" target="_blank">
        <Image
          src="/tabletop.png"
          width={273}
          height={101}
          alt="Tabletop Simulator"
        />
      </a>
      <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3363215363" target="_blank" className={`${encode.className} ${styles.tableTopBtn}`}>
        Workshop on Steam
        <Image
          src="/steam.svg"
          width={24}
          height={24}
          alt="Workshop on Steam"
        />
      </a>
    </div>
  );
}
