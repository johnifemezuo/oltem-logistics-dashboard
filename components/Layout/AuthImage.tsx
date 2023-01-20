import Image from "next/image";
import { FC, ReactNode } from "react";
import shipImg from "../../public/images/ship-up-view.jpg";

const AuthImage = ({ className }:{className?:string}) => {
    return (
        <div className={`hidden xl:block relative z-0 max-w-full h-full  ${className}`}>
            <Image src={shipImg} alt='ship image' fill />
            <div className='absolute inset-0 w-full h-full z-1 auth-image-gradient'></div>
            <p className='z-30 absolute left-16 bottom-16 max-w-[400px] text-[46px] text-left leading-[57.7px] font-extrabold text-white'>
                Welcome to <span className='text-secondaryColor'>OLTEM</span> Logistics. Let’s get
                started.
            </p>
            <div className="bg-black/50 absolute inset-0 z-20">

            </div>
        </div>
    );
};

export default AuthImage;
