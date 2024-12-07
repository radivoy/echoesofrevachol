import Image from "next/image";
import localFont from "next/font/local";
import styles from "./AboutUs.module.css";

const dobraMedium = localFont({
  src: "./fonts/Dobra-Medium.woff",
  weight: "600",
  display: "swap",
});

export default function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.aboutUsImg}></div>
      <div className={styles.aboutUsTxt}>
        <p>
          <span className={styles.int}>[CONCEPTUALIZATION]</span> - A labor of
          love. A tribute to the surreal streets of Revachol. This is not an
          official creation—but it could have been. In another world.
        </p>
        <p>
          We are <strong>Melina & Pedro</strong> from the far reaches of{" "}
          <strong>Argentina</strong>. This game? A fan-made tribute to the world
          of <strong>Disco Elysium</strong>.
        </p>
        <p>
          <strong>It’s free</strong>, because joy should be shared. Gather your
          friends, play, and most importantly—<strong>have a good time</strong>.
        </p>
      </div>

      <a href='https://ko-fi.com/Z8Z0170FD0' target='_blank' className={styles.pyrholidon}>
        <Image
          src="/kofi.png"
          width={20}
          height={20}
          alt="Buy us Pyrholidon"
          unoptimized
        /> 
        <span className={dobraMedium.className}>Buy us Pyrholidon</span>
      </a>

      <a href='mailto:echoesofrevachol@gmail.com' className={styles.linkMail}>
        echoesofrevachol@gmail.com
      </a>
    </div>
  );
}
