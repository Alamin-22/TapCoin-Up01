import Image from "next/image";
import BlueBgLeft from "@/Images/Effects/Vector (1).png"
import LeftBigCoin from "@/Images/btcm3.png"
import CenterCoin from "@/Images/btcm 4.png"
import InviteText from "@/Images/invite friends.png"
import GreenEmoji from "@/Images/green character 1.png"

const Invitation = () => {
    return (
        <>
            <div className=" relative h-[15rem] md:h-[28rem] xl:h-[35rem] ">

                <figure className=" ">
                    <Image src={BlueBgLeft} alt="Banner Effect" className="animate-float h-[15rem] md:h-[28rem] xl:h-[35rem] absolute top-0 left-0 " />
                    <Image src={LeftBigCoin} alt="Banner Effect" className="animate-float w-[25%] absolute top-16 md:top-36 left-0 " />
                    <Image src={CenterCoin} alt="Banner Effect" className=" animate-float w-[60%] md:w-[70%]  absolute top-14 md:top-24 lg:top-8  xl:top-0 left-9  md:left-12 xl:left-24 " />
                    <Image src={InviteText} alt="Banner Effect" className=" w-[35%] md:w-[25%] absolute top-24 md:top-40 right-12 md:right-48 xl:right-72  " />
                    <Image src={GreenEmoji} alt="Banner Effect" className=" animate-float max-w-7xl mx-auto w-20 md:w-40 xl:w-72 absolute top-20 xl:top-28 right-0  " />
                </figure>
            </div>
        </>
    );
};

export default Invitation;