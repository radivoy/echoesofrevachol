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
          Español
          <Image
            src="/echoesofrevachol/esp.svg"
            //src="/esp.svg"
            width={24}
            height={18}
            alt="Español"
          />
        </a>
        <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3385572414" target="_blank" className={`${encode.className} ${styles.tableTopBtn}`}>
          русский <span>(By <strong>Zverobob</strong> & <strong>AmaliaMoon</strong>)</span>
          <Image
            src="/echoesofrevachol/rus.svg"
            //src="/rus.svg"
            width={24}
            height={18}
            alt="Russian"
          />
        </a>
        <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3384766121" target="_blank" className={`${encode.className} ${styles.tableTopBtn}`}>
          中文 <span>(By <strong>18公斤的鳳梨</strong>)</span>
          <Image
            src="/echoesofrevachol/chi.svg"
            //src="/chi.svg"
            width={24}
            height={18}
            alt="Chinese"
          />
        </a>
      </div>
    </div>
  );
}
