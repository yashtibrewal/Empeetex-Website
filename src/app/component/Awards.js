import React from 'react';
import { Section } from './Section';
import { Carousel } from 'flowbite-react';

export default function Awards() {
    return (
        <div className=' lg:px-48'>
            <Section name={'Awards'} />

            {/* Carousel for mobile view */}
            <div className='block h-auto'>
                <Carousel draggable="false" indicators={false}>
                    {/* Slide 1 */}
                    <div className="relative h-full flex items-center justify-center">
                        <img src="/awards/Photo 3.webp" alt="Slide 1" className="object-cover w-full h-full" />
                        <div className="absolute bottom-0 left-0 w-full  p-4 bg-gradient-to-t from-black to-transparent text-white max-w-md">
                            <h5 className="text-sm sm:text-md md:text-xl lg:text-3xl font-bold">
                                Certificate of Merit, by SRTEPC
                            </h5>
                            <p className="text-xs sm:text-sm md:text-md lg:text-lg mt-1">
                                Presented by Honourable Minister of Textiles, Govt. of India
                            </p>
                        </div>
                    </div>
                    {/* Slide 2 */}
                    <div className="relative h-full flex items-center justify-center">
                        <img src="/awards/Photo 1.webp" alt="Slide 2" className="object-cover w-full h-full" />
                        <div className="absolute bottom-0 left-0 w-full  p-4 bg-gradient-to-t from-black to-transparent text-white max-w-md">
                            <h5 className="text-sm sm:text-md md:text-xl lg:text-3xl font-bold">
                                Certificate of Merit, by SRTEPC
                            </h5>
                            <p className="text-xs sm:text-sm md:text-md lg:text-lg mt-1">
                                Presented by Secretary Textiles, Govt. of India
                            </p>
                        </div>
                    </div>
                    {/* Slide 3 */}
                    <div className="relative h-full flex items-center justify-center">
                        <img src="/awards/Photo 2.webp" alt="Slide 3" className="object-cover w-full h-full" />
                        <div className="absolute bottom-0 left-0 w-full  p-4 bg-gradient-to-t from-black to-transparent text-white max-w-md">
                            <h5 className="text-sm sm:text-md md:text-xl lg:text-3xl font-bold">
                                Trophy of Appreciation
                            </h5>
                            <p className="text-xs sm:text-sm md:text-md lg:text-lg mt-1">
                                Presented by Honourable Minister of Textiles: Mr. Santosh Gangwar, Govt. of India
                            </p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}
