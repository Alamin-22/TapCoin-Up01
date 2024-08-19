import Link from "next/link";
import tapCoinLogo from "@/Images/footer tapcoin logo.png"
import TwitterLogo from "@/Images/twitter.png"
import InstaLogo from "@/Images/instaLogo.png"
import TeleLogo from "@/Images/teleLogo.png"
import bannerEffect from "@/Images/Effects/effect banner.png"
import bannerVector from "@/Images/Effects/VectorRightBanner.png"
import bannerVectorLeft from "@/Images/Effects/Vector.png"


import Image from "next/image";

const MainPage = () => {
    return (
        <>
            <header className="pt-11 ">
                <div className="navbar max-w-6xl mx-auto ">
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
                                <Link href={"#"}>
                                    <Image src={TeleLogo} alt="Twitter"
                                        className="w-8"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"}>
                                    <Image src={InstaLogo} alt="Twitter"
                                        className="w-8"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"}>
                                    <Image src={TwitterLogo} alt="Twitter"
                                        className="w-8"
                                    />
                                </Link>
                            </li>


                        </ul>
                    </div>
                </div>
                <figure className=" ">
                    <Image src={bannerEffect} alt="Banner Effect" className="absolute top-0 right-0 " />
                    <Image src={bannerVector} alt="Banner Effect" className="absolute top-0 right-0 " />
                    <Image src={bannerVectorLeft} alt="Banner Effect" className="absolute top-0 left-0 " />
                </figure>

            </header >


        </>
    );
};

export default MainPage;