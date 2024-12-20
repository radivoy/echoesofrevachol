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
          src="/echoesofrevachol/tabletop.png"
          //src="/tabletop.png"
          width={273}
          height={101}
          alt="Tabletop Simulator"
        />
      </a>
      <div className={styles.tableTopBtns}>
        <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3363215363" target="_blank" className={`${encode.className} ${styles.tableTopBtn}`}>
          English
          <Image
            src="/echoesofrevachol/eng.svg"
            //src="/eng.svg"
            width={24}
            height={18}
            alt="English"
          />
        </a>
        <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3386925048" target="_blank" className={`${encode.className} ${styles.tableTopBtn}`}>
          Spanish
          <Image
            src="/echoesofrevachol/esp.svg"
            //src="/esp.svg"
            width={24}
            height={18}
            alt="Spanish"
          />
        </a>
        <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3385572414" target="_blank" className={`${encode.className} ${styles.tableTopBtn} ${styles.tableTopBtnTxt}`}>
          русский
          <Image
            src="/echoesofrevachol/rus.svg"
            //src="/rus.svg"
            width={24}
            height={18}
            alt="Russian"
          />
          <span>By <strong>Zverobob</strong> & <strong>AmaliaMoon</strong></span>
        </a>
        <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3384766121" target="_blank" className={`${encode.className} ${styles.tableTopBtn} ${styles.tableTopBtnTxt}`}>
          中文
          <Image
            src="/echoesofrevachol/chin.svg"
            //src="/chi.svg"
            width={24}
            height={18}
            alt="Chinese"
          />
          <span>By <strong>18公斤的鳳梨</strong></span>
        </a>
      </div>
    </div>
  );
}
