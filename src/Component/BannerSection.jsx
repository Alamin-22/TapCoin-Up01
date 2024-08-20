import Image from 'next/image';
import React from 'react';
import RightBannerImage from "@/Images/right banner.png"
import BannerHeading from "@/Images/Text/tap2earn.png"
import subHeading from "@/Images/Text/freeCryptoDaily.png"
import subSubHeading from "@/Images/Text/MineBTCmForFreeWithTAPCOIN.png"
import Button from "@/Images/Text/joinNow.png"

import Link from 'next/link';

const BannerSection = () => {
    return (
        <>
            <div className="hero ">
                <div className="hero-content flex-col-reverse md:flex-row-reverse justify-between">
                    <Image
                        src={RightBannerImage} alt='Image of Mobile with Coins'
                        className="animate-float md:max-w-md xl:max-w-2xl  "
                    />
                    <div className=' '>
                        <Image
                            src={BannerHeading} alt='Image of Mobile with Coins'
                            className=" max-w-56 xl:max-w-md  mx-auto"
                        />
                        <Image
                            src={subHeading} alt='Image of Mobile with Coins'
                            className="max-w-56 xl:max-w-md mx-auto" />

                        <p className="py-6 md:pl-5 xl:pl-0 max-w-80 text-white text-xs xl:text-sm text-center md:text-left">
                            Start with solo mining and expand to become the  owner of the world&apos;s largest BTCm mining company.
                        </p>
                        <Image
                            src={subSubHeading} alt='Image of Mobile with Coins'
                            className="max-w-56 xl:max-w-xs mx-auto" />

                        <Link href={"https://t.me/tapcoincash"} target='_blank'>
                            <Image
                                src={Button} alt='Image of Mobile with Coins'
                                className="max-w-40 md:max-w-56 xl:max-w-xs mx-auto hover:scale-110 transition delay-100 active:scale-100"
                            />
                        </Link>

                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerSection;