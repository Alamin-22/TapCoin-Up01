
import BannerSection from "@/Component/BannerSection";
import Features from "@/Component/Features";
import Header from "@/Component/Header";

const HomePageOfTapCoin = () => {
  return (
    <div className="max-w-[120rem] mx-auto min-h-screen bg-black">
      <Header />
      <BannerSection />
      <Features />
    </div>
  );
};

export default HomePageOfTapCoin;