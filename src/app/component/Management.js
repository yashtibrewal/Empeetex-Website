'use client'

import { Card } from "flowbite-react";
import { Section } from "./Section";

export function Management() {
    return (
        <div className="">
            <Section name={'Management'}></Section>

            <div className="shadow-lg rounded-lg flex flex-col lg:flex-row justify-center items-center mb-5 bg-white">
                <div className="lg:hidden xl:hidden flex justify-center">
                    <div className="max-w-sm m-5 bg-white rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <img
                            src="/Director.jpg"
                            alt="Meaningful alt text for an image that is not purely decorative"
                            className="w-full h-auto object-cover object-center"
                        />
                        <div className="p-2 md:p-6">
                            <h5 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-center">
                                Mr. Pankaj Tibrewal
                            </h5>
                            <p className="uppercase font-semibold text-gray-700 text-center">
                                Director
                            </p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-2/3 px-4 md:px-10 pb-10 lg:py-12 text-gray-700 text-justify lg:text-lg md:text-base sm:text-sm">
                    <p className="tracking-tight lg:tracking-normal mb-4">
                        A company where the entire family has a textile background, covering everything from fiber to yarn,
                        fabrics, and garments. Currently managed by Mr. Pankaj Tibrewal under the guidance and direction of
                        his family members—all professionals holding top positions in the textile field. Mr. Tibrewal
                        graduated in B.TECH (Textile Technology) from T.I.T & S Bhiwani, one of Asia's premier institutes,
                        and enhanced his managerial skills with an M.M.S. (Marketing). He also received foundational textile
                        knowledge from his father, Sh. R.A. Tibrewal, who managed raw materials in a K.K Birla group spinning unit.
                    </p>
                    <p className="tracking-tight lg:tracking-normal ">
                        With a techno-commercial background, Mr. Tibrewal spent about 25 years with renowned textile giants,
                        including BIRLA's Bhiwani Textile Mills (Unit of Grasim Industries Limited - <b>Aditya Birla Group of
                            Companies</b>), Rajasthan Textile Mills (Unit of Sutlej Industries Limited - <b>K.K. Birla Group of
                                Companies</b>), and RSR Mohota Spg & Wvg Mills (<b>Mohota Industries Ltd.</b>), where he held senior
                        positions and managed textile exports. His exposure to the overseas market led to business growth,
                        awards, and valuable international contacts. Leveraging this experience, he established his own
                        export business, focusing on agency/indenting from fiber to yarn, fabrics, garments, and synthetic
                        yarns, in collaboration with associates.
                    </p>
                </div>

                <div className="w-auto hidden lg:block xl:block mt-5 lg:mt-0">
                    <div className="max-w-sm m-3 bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
                        <img
                            src="/Director.jpg"
                            alt="Director's image"
                            className="w-full h-auto object-cover object-center"
                        />
                        <div className="p-6">
                            <h5 className="text-2xl font-semibold text-center text-gray-800 mb-2">
                                Mr. Pankaj Tibrewal
                            </h5>
                            <p className="uppercase font-semibold text-gray-600 text-center">
                                Director
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}