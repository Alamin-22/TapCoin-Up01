
import BannerSection from "@/Component/BannerSection";
import Features from "@/Component/Features";
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

    </div>
  );
};

export default HomePageOfTapCoin;