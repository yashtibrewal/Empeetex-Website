import React from 'react';
import { Card } from "flowbite-react";
import { Section } from './Section';

export function Certificates() {

    return (
        <div className='mt-10'>
            <Section name={'Certificates'}></Section>
            <div className='flex flex-wrap justify-around  p-5 rounded-lg '>
                <div className='w-full md:w-1/2 px-2 lg:px-10 mb-8'>
                    <Card
                        className="transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl bg-white/75 backdrop-blur-lg rounded-lg overflow-hidden"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="/awards/cert 1 nh.webp"
                    >
                        <h5 className="xl:text-2xl lg:text-lg md:text-base sm:text-sm font-bold tracking-tight text-gray-900  group-hover:text-indigo-500">
                            Certificate of Merit, by SRTEPC
                        </h5>
                        <p className="font-normal text-gray-700  group-hover:text-indigo-300">
                            Presented by Honourable Minister of Textiles, Govt. of India
                        </p>
                    </Card>
                </div>
                <div className='w-full md:w-1/2 px-2 lg:px-10 mb-8'>
                    <Card
                        className="transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl bg-white/75 backdrop-blur-lg rounded-lg overflow-hidden"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="/awards/cert 2 nh.webp"
                    >
                        <h5 className="xl:text-2xl lg:text-lg md:text-base sm:text-sm font-bold tracking-tight text-gray-900  group-hover:text-indigo-500">
                            Certificate of Merit, by SRTEPC
                        </h5>
                        <p className="font-normal text-gray-700  group-hover:text-indigo-300">
                            Presented by Secretary Textiles, Govt. of India
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
}
