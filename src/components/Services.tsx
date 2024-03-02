import React from 'react'
import { BsFillLightningFill } from "react-icons/bs";
import { BsDisplay } from "react-icons/bs";
import { GrSecure } from "react-icons/gr";
import { RiSecurePaymentLine } from "react-icons/ri";
import { LiaRocketSolid } from "react-icons/lia";
import SecondTitle from './custom/SecondTitle';
export default function Services() {
    return (
        <div className='min-h-screen px-12 py-12 lg:px-40'>
            {/* <h2 className='text-center uppercase text-5xl font-ralewayBold block'>About</h2> */}
            <div className='mx-auto py-16'>
                <SecondTitle title='Services' />
            </div>

            <div className='flex flex-col gap-16 items-center justify-between text-center flex-wrap md:gap-8 md:flex-row'>

                <div className='service-card'>
                    <div className='service-ball'>
                        <BsFillLightningFill size={30} />
                    </div>
                    <h3 className='font-bold text-3xl my-6'>Fast</h3>
                    <p className='service-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
                </div>

                <div className='service-card'>
                    <div className='service-ball'>
                        <BsDisplay size={30} />
                    </div>
                    <h3 className='font-bold text-3xl my-6'>Responsive</h3>
                    <p className='service-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
                </div>

                <div className='service-card'>
                    <div className='service-ball'>
                        <RiSecurePaymentLine size={30} className='text-white fill-white !transition-all !duration-300' />
                    </div>
                    <h3 className='font-bold text-3xl my-6'>Secure</h3>
                    <p className='service-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
                </div>

                <div className='service-card'>
                    <div className='service-ball'>
                        <LiaRocketSolid size={30} />
                    </div>
                    <h3 className='font-bold text-3xl my-6'>Powerful</h3>
                    <p className='service-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
                </div>
            </div>
        </div>
    )
}
