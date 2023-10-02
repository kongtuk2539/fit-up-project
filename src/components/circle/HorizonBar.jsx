import React, { useState, useRef, useEffect } from 'react'
import circleStyle from './circls-style.css'

const HorizonBar = () => {
    const [fitcoinBar, setFitCoinBar] = useState(60);
    const barRef = useRef(null)

    useEffect(() => {
        const barEnergy = barRef.current;

        if (barEnergy) {
            const animation = barEnergy.animate(
                [
                    { width: `${fitcoinBar}%` }
                ],
                {
                    duration: 2000, // 2 seconds
                    easing: 'linear',
                    fill: 'forwards',
                }
            );
        }

    }, [fitcoinBar])


    return (
        <div className="box-bar">
            <div className="font-roboto-mono text-white mb-6 md:mb-14 font-bold">Monthly Challenge</div>
            <p className="title-bar font-orbitron text-2xl font-bold text-white mb-2">Octobar Move</p>
            <div className="bar-container
            relative bg-black-dark w-311 md:w-419 h-15 rounded-full">
                <div id='fitcoin-bar' className="fitcoin-bar w-0 h-full 
                bg-blue absolute rounded-full" ref={barRef}>
                </div>
            </div>
            <div className="notation flex mt-5 gap-1">
                <div className="coin flex mr-5">
                    <p className="notation-coin w-30 h-1 mr-4 bg-blue rounded-full relative top-2"></p>
                    <div className='flex flex-col'>
                        <p className='font-roboto-mono text-sm font-bold text-black-light'>Fitcoin</p>
                        <p className='font-roboto-mono text-sm font-bold text-white'>27,000</p>
                    </div>
                </div>
                <div className="remaining flex mr-5">
                    <p className="notation-remaining w-30 h-1 mr-4 bg-black-dark rounded-full relative top-2"></p>
                    <div className='flex flex-col'>
                        <p className='font-roboto-mono text-sm font-bold text-black-light'>Remaining</p>
                        <p className='font-roboto-mono text-sm font-bold text-white'>3,000</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HorizonBar