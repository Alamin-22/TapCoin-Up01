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
        <div className='mx-auto flex flex-wrap justify-evenly items-end py-6 gap-2'>
            <div className=' w-full md:w-auto  '>
                <Image src={tapCoinLogo} className='mx-auto  ' alt='Ton Image' />
                <p className='text-center md:text-left  text-white text-sm'>© 2024 Tapcoin Tap2earn game</p>
            </div>
            <div>
                <Image src={Diamond} className='w-[50%] mx-auto' alt='Ton Image' />
            </div>
            <div>
                <Image src={ton} alt='Ton Image' className='w-[60%] md:w-full' />
            </div>
            <div className=" space-x-2 z-50 ">
                <ul className="flex gap-3  ">
                    <li>
                        <Link href={"https://t.me/tapcoincash"} target="_blank">
                            <Image src={TeleLogo} alt="Twitter"
                                className="w-6 md:w-8 hover:scale-110 active:scale-100 transition-all"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href={"https://www.instagram.com/tapcoingames/"} target="_blank">
                            <Image src={InstaLogo} alt="Insta Logo"
                                className="w-6 md:w-8 hover:scale-110 active:scale-100 transition-all"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href={"https://x.com/tapcoingames"} target="_blank">
                            <Image src={TwitterLogo} alt="Twitter"
                                className="w-6 md:w-8 hover:scale-110 active:scale-100 transition-all"
                            />
                        </Link>
                    </li>


                </ul>
            </div>
        </div>
    );
};

export default Footer;