
import BannerSection from "@/Component/BannerSection";
import EarnMore from "@/Component/EarnMore";
import Features from "@/Component/Features";
import Footer from "@/Component/Footer";
import Header from "@/Component/Header";
import Invitation from "@/Component/Invitation";
import Splash from "@/Component/Splash";
import Head from "next/head";


const HomePageOfTapCoin = () => {
  return (
    <div className="max-w-[120rem] mx-auto min-h-screen bg-black">
      <Head>
        <title>Tap Coins - Leading Bitcoin Mining Solutions & TapCoin Rewards</title>
        <meta name="description" content="Explore cutting-edge Bitcoin mining solutions at Tap Coins. Join our platform to mine Bitcoin efficiently and earn TapCoin rewards." />
        <meta name="keywords" content="Bitcoin mining, cryptocurrency, blockchain, mining solutions, TapCoin, rewards" />
        <meta name="author" content="Tap Coins" />
        <meta property="og:title" content="Tap Coins - Leading Bitcoin Mining Solutions & TapCoin Rewards" />
        <meta property="og:description" content="Explore cutting-edge Bitcoin mining solutions and earn TapCoin rewards with Tap Coins." />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourwebsite.com" />
      </Head>

      <Header />
      <BannerSection />
      <Features />
      <Invitation />
      <Splash />
      <EarnMore />
      <Footer />

    </div>
  );
};

export default HomePageOfTapCoin;