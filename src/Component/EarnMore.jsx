import HeaderBg from "@/Images/Effects/glow background.png"
import EarMoreText from "@/Images/Text/earn more.png"
import CartoonYellow from "@/Images/yellow character.png"
import Btc5 from "@/Images/btcm 5.png"
import Image from "next/image";

const EarnMore = () => {
    return (
        <div className=" w-full border">
            <div className=" relative h-[15rem] md:h-[25rem] lg:h-[30rem] xl:h-[38rem] ">
                <div className=" pt-10 md:pt-28 lg:pt-36 xl:pt-40 flex justify-evenly items-center">
                    <Image src={EarMoreText} alt="Text" className=" ml-8 w-[40%] z-50" />

                    <Image src={CartoonYellow} alt="Banner Effect" className="w-[40%] z-50" />
                </div>
                <figure className=" ">
                    <Image src={HeaderBg} alt="Banner Effect" className="absolute top-0 w-full" />

                    <Image src={Btc5} alt="Banner Effect" className=" w-20  absolute bottom-4 right-6 md:right-12 xl:right-20  " />
                </figure>
            </div>
        </div>
    );
};

export default EarnMore;