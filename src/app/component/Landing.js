"use client"

import React, { useRef } from 'react';
import { ReactSVG } from 'react-svg';
// import logo from 'public/logo.svg';

export default function Landing() {
    const svgRef = useRef(null);

    return (
        <div className=''>

            <div className=" bg-bg-light-cream">
                <div className='flex justify-center'>
                    <div className='w-2/3'>
                        <ReactSVG
                            src='logo.svg'
                            beforeInjection={(svg) => {
                                svg.setAttribute('ref', svgRef.current);
                            }}
                            renumerateIRIElements={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
