import Splash1 from "@/Images/splash  1.png"
import Splash2 from "@/Images/splash 2.png"
import Splash3 from "@/Images/splash 3.png"
import Splash4 from "@/Images/splash 4.png"
import Splash5 from "@/Images/splash 5.png"
import Splash6 from "@/Images/splash 6.png"

import Image from "next/image";

const Splash = () => {
    return (
        <>

            <div className="lg:py-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 items-center justify-center mx-auto  
            w-full max-w-[90rem] gap-3 ">


                <Image src={Splash1} alt="feature1"
                    className=" z-20 mx-auto"
                />
                <Image src={Splash2} alt="feature1"
                    className="  z-20 mx-auto"
                />
                <Image src={Splash3} alt="feature1"
                    className=" z-20 mx-auto"
                />
                <Image src={Splash4} alt="feature1"
                    className=" z-20 mx-auto"
                />
                <Image src={Splash5} alt="feature1"
                    className=" z-20 mx-auto"
                />
                <Image src={Splash6} alt="feature1"
                    className=" z-20 mx-auto"
                />

            </div>


        </>
    );
};

export default Splash;