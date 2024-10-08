import HeaderBg from "@/Images/Effects/glow background.png"
import EarMoreText from "@/Images/Text/earn more.png"
import CartoonYellow from "@/Images/yellow character.png"
import VSPhoto from "@/Images/vs photo.png"
import VSTitle from "@/Images/vs title.png"
import Coin6 from "@/Images/btcm 6.png"
import Btc5 from "@/Images/btcm 5.png"
import Join from "@/Images/join title.png"
import WhiteCartoon from "@/Images/white character.png"
import jOINbG from "@/Images/join background.png"
import Image from "next/image";
import Link from "next/link"

const EarnMore = () => {
    return (
        <div className=" w-full mb-4 ">
            <div className=" relative h-[12rem] md:h-[25rem] lg:h-[30rem] xl:h-[38rem] ">
                <div className=" pt-12 md:pt-28 lg:pt-36 xl:pt-40 flex justify-evenly items-center">
                    <Image src={EarMoreText} alt="Text" draggable={false} className=" ml-8 w-[40%] z-50" />

                    <Image src={CartoonYellow} alt="Banner Effect" className="w-[40%] z-50" />
                </div>
                <figure className=" ">
                    <Image src={HeaderBg} alt="Banner Effect" className="absolute top-0 w-full" />

                    <Image src={Btc5} alt="Banner Effect" className="animate-float w-8  md:w-20   absolute md:bottom-4 right-6 md:right-12 xl:right-20  " />
                </figure>

            </div>
            {/* second */}
            <div className=" relative h-[10rem] md:h-[25rem] lg:h-[30rem] xl:h-[38rem] ">
                <div className=" flex justify-evenly items-center">
                    <Image src={VSPhoto} alt="Banner Effect" className="w-[40%] z-50" />

                    <Image src={VSTitle} alt="Text" draggable={false} className="  ml-8 w-[40%] z-50" />
                </div>
                <figure className=" ">

                    <Image src={Coin6} alt="Coin Effect" className="animate-float w-8 md:w-20 lg:w-15`  absolute md:bottom-4 left-6 md:left-12 xl:left-20  " />
                </figure>

            </div>
            {/* Third One */}
            <div className="  relative xl:h-[40rem]  ">
                <div className=" flex justify-evenly items-center">
                    <Link href={"https://t.me/Tapcoincash_bot"} target="_blank" className="z-50" >
                        <Image src={Join} alt="Text" draggable={false} className="w-40 md:w-96 lg:w-[30rem] ml-8 z-50" />
                    </Link>

                    <Image src={WhiteCartoon} alt="cartoon Effect" className=" w-[40%] xl:w-[32%] z-50" />

                </div>
                <figure className=" ">
                    <Image src={jOINbG} alt="join Effect" draggable={false} className="  absolute top-0 mx-auto w-full" />
                </figure>

            </div>
        </div>
    );
};

export default EarnMore;