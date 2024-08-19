'use client'

import { Card } from "flowbite-react";
import { Section } from "./Section";

export function Management() {
    return (
        <div className="mt-5">
            <Section name={'Management'}></Section>
            <div className=" lg:hidden xl:hidden flex justify-center">
                    <Card
                        className="max-w-sm m-5"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="/Director.jpg"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Mr. Pankaj Tibrewal (Director)
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                        </p>
                    </Card>
                </div>
            <div className="flex justify-center items-center  m-2 mb-5 bg-white">
                <div className="lg:text-lg md:text-base sm:text-sm text-justify p-5 font-normal text-gray-700 ">
                    <p>
                        A company, where entire family is having a textile background right from fibre to yarn,
                        fabrics
                        &amp;
                        garments, presently being managed by Mr. Pankaj Tibrewal in guidance and directions of his
                        family
                        members, all of them being professionals and are holding top positions in textile field.
                        Graduated
                        in B.TECH (Textile Technology) from one of the Asia's premier institute - T.I.T &amp; S
                        Bhiwani,
                        also
                        achieved managerial qualities by completing M.M.S.(Marketing), at the same time got the
                        blessings
                        and basic textile input from his father Sh. R.A. Tibrewal who had been managing the basic
                        raw
                        material
                        (fibres) in one of the spinning unit of K.K Birla group of companies.
                        <br></br>
                        <br></br>
                        Being Techno-Commercial, spent about 25 years with renowned textile giants like – BIRLA's-
                        Bhiwani
                        Textile Mills (Unit of Grasim Industries Limited- <b>Aditya Birla Group of Companies</b>),
                        Rajasthan
                        Textile Mills (Unit of Sutlej Industries Limited- <b>K. K. Birla Group of companies</b>),
                        RSR
                        Mohota
                        Spg &amp; Wvg Mills( <b>Mohota Industries Ltd.</b>)having senior position and handling
                        textile
                        exports.
                    </p>
                    <br></br>
                    <p>
                        During these 25 years of exposure to overseas market, achieved growth and profitability in
                        business,
                        got awards and make many contacts in various countries with good credits. With these
                        credentials
                        and
                        enriched experience started own business of Exports which is Agency/Indenting basis from
                        fibre
                        to
                        yarn, fabrics &amp; garments as well as Imports and Distribution of synthetic yarns in
                        collaboration
                        with associates.
                    </p>
                </div>      
                     
                <div className="w-full hidden lg:block xl:block">
                    <Card
                        className="max-w-sm m-3"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="/Director.jpg"
                    >
                        <h5 className="text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                            Mr. Pankaj Tibrewal (Director)
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                        </p>
                    </Card>
                </div>

            </div>
        </div>
    );
}