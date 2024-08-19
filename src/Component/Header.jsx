import Link from "next/link";
import tapCoinLogo from "@/Images/footer tapcoin logo.png"
import TwitterLogo from "@/Images/twitter.png"
import InstaLogo from "@/Images/instaLogo.png"
import TeleLogo from "@/Images/teleLogo.png"

import Image from "next/image";

const MainPage = () => {
    return (
        <>
            <header className="pt-11">
                <div className="navbar max-w-6xl mx-auto ">
                    <div className="flex-1">
                        <Link href={"/#"}>
                            <Image width={500} height={500} src={tapCoinLogo}
                                alt="Tapcoin Logo"
                                className="w-32"
                            />
                        </Link>
                    </div>
                    <div className="flex-none">
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
            </header>
        </>
    );
};

export default MainPage;