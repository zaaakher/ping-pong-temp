import Head from "next/head";
import PPLogo from "../components/PPLogo";
import SlideUp from "../components/SlideUp";
import styles from "../styles/Home.module.css";
import PingLogo from "../components/PingLogo";
import PongLogo from "../components/PongLogo";
import StyledButton from "../components/StyledButton";
import {
  GithubIcon,
  InstagramIcon,
  TelegramIcon,
  TwitterIcon,
} from "../components/SocialIcons";
import BGAnimation from "../components/BGAnimation";
import { useWindowSize } from "react-use";
import { useState } from "react";
export default function Home() {
  const screenSize = useWindowSize();
  const [theme, setTheme] = useState("light");
  return (
    <div className={styles.container}>
      <Head>
        <title>Ping Pong Token</title>
        <meta name="description" content="Ping Pong Token" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo}>
          <PPLogo />
        </div>

        <p
          className={styles.description}
          style={{ fontSize: 25, maxWidth: 400 }}
        >
          The first ever interconnected pair tokens that buy back from each
          other.
        </p>
        <h1 className={styles.description}>Coming Soon</h1>

        <div className={styles.grid}>
          <SlideUp randomDelay>
            <PingLogo />
            <h2 style={{ fontFamily: "Sooblack" }}>Ping</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <StyledButton label="Whitelist" buttonColor="#DB4437" />
          </SlideUp>
          <SlideUp randomDelay>
            <PongLogo />
            <h2 style={{ fontFamily: "Sooblack" }}>Pong</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>{" "}
            <StyledButton label="Whitelist" buttonColor="#4285F4" />
          </SlideUp>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <a
            href="https://t.me/OfficialPingPong_Ann"
            style={{ textAlign: "center", padding: 10 }}
          >
            <TelegramIcon height={40} />
            <div style={{ fontSize: 11 }}>Channel</div>
          </a>
          <a
            href="https://t.me/OFFICIALPINGPONG"
            style={{ textAlign: "center", padding: 10 }}
          >
            <TelegramIcon height={40} />
            <div style={{ fontSize: 11 }}>Group</div>
          </a>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <a
            href="https://www.instagram.com/pingpongtoken/"
            style={{ textAlign: "center", padding: 10 }}
          >
            <InstagramIcon height={40} />
          </a>
          <a
            href="https://twitter.com/PingPongToken"
            style={{ textAlign: "center", padding: 10 }}
          >
            <TwitterIcon height={40} />
          </a>
          {/* <a
            href="https://github.com/Falak-games"
            style={{ textAlign: "center", padding: 10 }}
          >
            <GithubIcon height={40} />
          </a> */}
        </div>
      </div>
      <div
        style={{
          backgroundColor: "red",
          width: "100%",
          height: screenSize.height,
          display: "flex",
          flexDirection: "row",
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            margin: 50,
            backgroundColor: "green",
            height: "90%",
            width: screenSize.width / 2,
          }}
        >
          testing
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          display: "flex",
          flexDirection: "row",
          // padding: 10,
          backgroundColor: "orange",
          marginBottom: 10,
          borderRadius: 10,
          zIndex: 900,
        }}
      >
        <div
          style={{
            padding: 10,
            backgroundColor: "white",
            color: "black",
            borderRadius: 10,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            fontSize: 11,
          }}
          onClick={() => {
            console.log("switching to dark");
            setTheme("dark");
          }}
        >
          DARK
        </div>
        <div
          style={{
            padding: 10,
            // backgroundColor: "white",
            backgroundColor: "blue",
            // color: "black",
            color: "white",
            borderRadius: 10,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            fontSize: 11,
          }}
          onClick={() => {
            console.log("slight");
            setTheme("light");
          }}
        >
          LIGHT
        </div>
      </div>
      <BGAnimation />
    </div>
  );
}
