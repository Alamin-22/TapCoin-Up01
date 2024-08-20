
import BannerSection from "@/Component/BannerSection";
import EarnMore from "@/Component/EarnMore";
import Features from "@/Component/Features";
import Footer from "@/Component/Footer";
import Header from "@/Component/Header";
import Invitation from "@/Component/Invitation";
import Splash from "@/Component/Splash";

const HomePageOfTapCoin = () => {
  return (
    <div className="max-w-[120rem] mx-auto min-h-screen bg-black">
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