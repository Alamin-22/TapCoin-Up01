import Link from "next/link";
import tapCoinLogo from "@/Images/footer tapcoin logo.png"
import TwitterLogo from "@/Images/twitter.png"
import InstaLogo from "@/Images/instaLogo.png"
import TeleLogo from "@/Images/teleLogo.png"
import bannerEffect from "@/Images/Effects/effect banner.png"
import bannerVector from "@/Images/Effects/VectorRightBanner.png"
import bannerVectorLeft from "@/Images/Effects/Vector.png"
import ExtraCoinRight from "@/Images/btcm2Right.png"
import ExtraCoinLeft from "@/Images/btcm1Left.png"

import Image from "next/image";

const Header = () => {
    return (
        <>
            <header className="pt-11 ">
                <div className="navbar max-w-6xl mx-auto  px-6">
                    <div className="flex-1 z-50">
                        <a href="#">
                            <Image width={500} height={500} src={tapCoinLogo}
                                alt="Tapcoin Logo"
                                className="w-32"
                            />
                        </a>
                    </div>
                    <div className="flex-none  z-50">
                        <ul className="flex gap-3 ">
                            <li>
                                <Link href={"https://t.me/tapcoincash"} target="_blank">
                                    <Image src={TeleLogo} alt="Twitter"
                                        className="w-6 md:w-8"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href={"https://www.instagram.com/tapcoingames/"} target="_blank">
                                    <Image src={InstaLogo} alt="Insta Logo"
                                        className="w-6 md:w-8"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href={"https://x.com/tapcoingames"} target="_blank">
                                    <Image src={TwitterLogo} alt="Twitter"
                                        className="w-6 md:w-8"
                                    />
                                </Link>
                            </li>


                        </ul>
                    </div>
                </div>
                <figure className=" ">
                    <Image src={bannerEffect} alt="Banner Effect" className="  absolute top-0 right-0 " />
                    <Image src={bannerVector} alt="Banner Effect" className="h-screen absolute top-0 right-0 " />
                    <Image src={bannerVectorLeft} alt="Banner Effect" className="h-screen absolute top-0 left-0 " />
                    <Image src={ExtraCoinRight} alt="Banner Effect" className="animate-float w-20 md:w-24 xl:w-32 absolute 
                    top-[22rem] md:top-[20rem] xl:top-[30rem] right-0 " />
                    <Image src={ExtraCoinLeft} alt="Banner Effect" className="animate-float w-20 md:w-24 xl:w-32 absolute 
                    top-[20rem] md:top-[23rem] xl:top-[35rem] left-0 " />
                </figure>

            </header >



        </>
    );
};

export default Header;