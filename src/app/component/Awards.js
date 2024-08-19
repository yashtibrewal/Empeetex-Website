import React from 'react';
import { Card } from "flowbite-react";
import { Section } from './Section';

export default function Awards() {

    return (
        <div className='mt-5'>
            <Section name={'Awards'}></Section>
            <div className='flex flex-wrap justify-around gap-4'>
                <div className='w-5/6 md:w-4/5 lg:w-2/3 xl:w-1/4'>
                    <Card
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="/awards/Photo 3.webp"
                    >
                        <h5 className="xl:text-2xl lg:text-lg md:text-base sm:text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                            Certificate of Merit, by SRTEPC
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Presented by Honourable Minister of Textiles, Govt. of India
                        </p>
                    </Card>
                </div>
                <div className='w-5/6 md:w-4/2 lg:w-2/3 xl:w-1/4'>
                    <Card
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="/awards/Photo 1.webp"
                    >
                        <h5 className="xl:text-2xl lg:text-lg md:text-base sm:text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                            Certificate of Merit, by SRTEPC
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Presented by Secretary Textiles, Govt. of India
                        </p>
                    </Card>
                </div>
                <div className='w-5/6 md:w-4/5 lg:w-2/3 xl:w-1/4'>
                    <Card
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="/awards/Photo 2.webp"
                    >
                        <h5 className="xl:text-2xl lg:text-lg md:text-base sm:text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                            Trophy of Appreciation
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Presented by Honourable Minister of Textiles: Mr. Santosh Gangwar, Govt. of India
                        </p>
                    </Card>
                </div>
            </div>

            <Section name={'Certificates'}></Section>
            <div className='flex flex-wrap justify-around gap-4 '>
                <div className='w-5/6 md:w-1/2 lg:w-1/3 xl:w-1/4'>
                    <Card
                        className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="/awards/cert 1 nh.webp"
                    >
                        <h5 className="xl:text-2xl lg:text-lg md:text-base sm:text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                            Certificate of Merit, by SRTEPC
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Presented by Honourable Minister of Textiles, Govt. of India
                        </p>
                    </Card>
                </div>
                <div className='w-5/6 md:w-1/2 lg:w-1/3 xl:w-1/4'>
                    <Card
                        className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="/awards/cert 2 nh.webp"
                    >
                        <h5 className="xl:text-2xl lg:text-lg md:text-base sm:text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                            Certificate of Merit, by SRTEPC
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Presented by Secretary Textiles, Govt. of India
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
}
