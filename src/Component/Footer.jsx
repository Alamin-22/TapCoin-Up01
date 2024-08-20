import React from 'react';
import ton from "@/Images/ton.png"
import Diamond from "@/Images/diamond.png"
import Image from 'next/image';

import tapCoinLogo from "@/Images/footer tapcoin logo.png"
import TwitterLogo from "@/Images/twitter.png"
import InstaLogo from "@/Images/instaLogo.png"
import TeleLogo from "@/Images/teleLogo.png"
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='flex justify-evenly items-end py-6'>
            <div>
                <Image src={tapCoinLogo} alt='Ton Image' />
                <span className='text-white text-sm'>© 2024 Tapcoin Tap2earn game</span>
            </div>
            <div>
                <Image src={Diamond} alt='Ton Image' />
            </div>
            <div>
                <Image src={ton} alt='Ton Image' />
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
    );
};

export default Footer;