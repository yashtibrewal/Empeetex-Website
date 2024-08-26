import React from 'react';
import { Section } from './Section';
import { Carousel } from 'flowbite-react';

export function Certificates() {
    return (
        <div >
            <Section name={'Certificates'} />

            {/* Carousel for small screens */}
            <div className='block md:hidden'>
                <Carousel
                    draggable="false"
                    controls={false}
                    indicators={false}
                >
                    {/* Slide 1 */}
                    <div className="relative flex justify-center items-center">
                        <img
                            src="/awards/cert 1 nh.webp"
                            alt="Certificate of Merit, by SRTEPC"
                            className="object-cover w-full h-auto rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white w-full rounded-b-lg">
                            <h5 className="text-base lg:text-2xl font-bold">
                                Certificate of Merit, by SRTEPC
                            </h5>
                            <p className="text-sm lg:text-lg mt-1">
                                Presented by Honourable Minister of Textiles, Govt. of India
                            </p>
                        </div>
                    </div>
                    {/* Slide 2 */}
                    <div className="relative flex justify-center items-center">
                        <img
                            src="/awards/cert 2 nh.webp"
                            alt="Certificate of Merit, by SRTEPC"
                            className="object-cover w-full h-auto rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white w-full rounded-b-lg">
                            <h5 className="text-base lg:text-2xl font-bold">
                                Certificate of Merit, by SRTEPC
                            </h5>
                            <p className="text-sm lg:text-lg mt-1">
                                Presented by Secretary Textiles, Govt. of India
                            </p>
                        </div>
                    </div>
                </Carousel>
            </div>

            {/* Static layout for larger screens */}
            <div className='hidden  md:flex flex-wrap justify-around p-5 rounded-lg'>
                <div className='w-full md:w-1/2 px-2 lg:px-10 mb-8 transform transition-transform duration-500 ease-in-out hover:scale-105'>
                    <img
                        src="/awards/cert 1 nh.webp"
                        alt="Certificate of Merit, by SRTEPC"
                        className="object-cover w-full h-auto rounded-lg "
                    />
                    <div className="pt-8 text-center">
                        <h5 className="text-sm sm:text-md md:text-xl lg:text-3xl font-bold">
                            Certificate of Merit, by SRTEPC
                        </h5>
                        <p className="text-xs sm:text-sm md:text-md lg:text-lg mt-1">
                            Presented by Honourable Minister of Textiles, Govt. of India
                        </p>
                    </div>
                </div>
                <div className='w-full md:w-1/2 px-2 lg:px-10  transform transition-transform duration-500 ease-in-out hover:scale-105'>
                    <img
                        src="/awards/cert 2 nh.webp"
                        alt="Certificate of Merit, by SRTEPC"
                        className="object-cover w-full h-auto rounded-lg"
                    />
                    <div className="pt-8 text-center">
                        <h5 className="text-sm sm:text-md md:text-xl lg:text-3xl font-bold">
                            Certificate of Merit, by SRTEPC
                        </h5>
                        <p className="text-xs sm:text-sm md:text-md lg:text-lg mt-1">
                            Presented by Secretary Textiles, Govt. of India
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
