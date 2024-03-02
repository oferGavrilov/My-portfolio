import React from 'react'
import { BsFillLightningFill, BsDisplay } from 'react-icons/bs'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { LiaRocketSolid } from 'react-icons/lia'
import SecondTitle from './custom/SecondTitle'
export default function Services(): JSX.Element {
    return (
        <div className='min-h-screen px-12 py-12 lg:px-40'>
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
