import React, { useEffect, useRef } from 'react';
import circleStyle from './circls-style.css'

const Circle = () => {
    const circleRef = useRef(null);

    useEffect(() => {
        const circle = circleRef.current;
        let coin = 60;
        const coinPercent = coin / 100;
        const valueStroke = 551 - 551 * coinPercent;

        if (circle) {
            const animation = circle.animate(
                [
                    { strokeDashoffset: 551 },
                    { strokeDashoffset: valueStroke },
                ],
                {
                    duration: 2000, // 2 seconds
                    easing: 'linear',
                    fill: 'forwards',
                }
            );
        }
    }, []);

    return (
        <div className="w-343 h-537 rounded-lg bg-black-medium py-6 px-4">
            <div className="title-circle font-roboto-mono font-bold text-white mb-3">
                <p>Today Earn</p>
            </div>
            <div className="circle w-full h-full relative ml-54">
                <div className="outer w-204 h-204 p-26 rounded-full bg-black-light">
                    <div className="inner w-full h-full bg-black-medium rounded-full flex items-center justify-center">
                        <div className="info-circle flex flex-col justify-start">
                            <h3 className="text-blue font-orbitron font-bold text-2xl">
                                +50
                            </h3>
                            <p className='text-black-light font-roboto-mono text-sm'>FitCoin</p>
                        </div>
                    </div>
                    <svg className='absolute top-0 left-0 w-204 h-204' xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <circle className="fill-none stroke-blue w-full h-full" cx="102" cy="102" r="89" stroke-linecap="round" ref={circleRef} id="circle" />
                    </svg>
                </div>
                <div className="footer-circle w-full h-auto m-3 text-white font-roboto-mono text-sm ml-0
                "><p className='flex items-center gap-1'><span className='material-symbols-outlined text-2xl'> monetization_on </span>Total Balance: 10,500</p>
                </div>
            </div>
        </div>
    )
}

export default Circle