"use client"

import React, { useRef } from 'react';
import { ReactSVG } from 'react-svg';
// import logo from 'public/logo.svg';

export default function Landing() {
    const svgRef = useRef(null);

    return (
        <div className='bg-inherit flex justify-center items-center py-20 md:min-h-screen'>
            <div className='w-full lg:w-2/3'>
                <ReactSVG
                    src='logo.svg'
                    beforeInjection={(svg) => {
                        svg.setAttribute('ref', svgRef.current);
                    }}
                    renumerateIRIElements={false}
                />
            </div>
        </div>
    );
}
