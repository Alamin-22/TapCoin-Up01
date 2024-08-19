import feature1 from "@/Images/feature 1.png"
import feature2 from "@/Images/feature 2.png"
import feature3 from "@/Images/feature 3.png"
import feature4 from "@/Images/feature 4.png"
import Image from "next/image";
import Link from "next/link";


const Features = () => {
    return (
        <>

            <div className="lg:py-10 grid grid-cols-2 md:grid-cols-4 items-center justify-center mx-auto  
            w-full max-w-[90rem] ">


                <Image src={feature1} alt="feature1"
                    className="  lg:w-72 z-20 mx-auto"
                />
                <Image src={feature2} alt="feature1"
                    className="  lg:w-72 z-20 mx-auto"
                />
                <Image src={feature3} alt="feature1"
                    className="  lg:w-72 z-20 mx-auto"
                />
                <Image src={feature4} alt="feature1"
                    className="  lg:w-72 z-20 mt-10 mx-auto"
                />

            </div>

        </>
    );
};

export default Features;