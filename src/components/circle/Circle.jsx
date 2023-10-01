import React, { useEffect, useRef, useState } from 'react';
import circleStyle from './circls-style.css'
import HorizonBar from './HorizonBar.jsx'

const Circle = () => {
    const circleRef = useRef(null);
    const [coinState, setCoinState] = useState(0)

    useEffect(() => {
        const circle = circleRef.current;
        let counter = 0;
        let coin = 30;
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

        setInterval(() => {
            if (counter === coin) {
                clearInterval();
            } else {
                counter += 1;
                setCoinState(counter)
            }
        }, 20);
    }, []);

    return (
        <div className="w-343 md:w-721 h-537 md:h-324 rounded-lg bg-black-medium py-6 px-4 md:px-0 md:flex">
            <div className="title-circle font-roboto-mono font-bold text-white mb-3 md:hidden">
                <p>Today Earn</p>
            </div>
            <div className="circle w-full md:w-254 h-136 md:h-full relative ml-54 md:ml-6">
                <div className="title-circle font-roboto-mono font-bold text-white mb-3 hidden md:inline-block">
                    <p>Today Earn</p>
                </div>
                <div className="outer w-204 h-204 p-26 rounded-full bg-black-light">
                    <div className="inner w-full h-full bg-black-medium rounded-full flex items-center justify-center">
                        <div className="info-circle flex flex-col justify-start gap-1">
                            <h3 className="text-blue font-orbitron font-bold text-2xl">
                                +{coinState}
                            </h3>
                            <p className='text-black-light font-roboto-mono text-sm'>FitCoin</p>
                        </div>
                    </div>
                    <svg className='absolute top-0 md:top-9 left-0 w-204 h-204 -rotate-90' xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <circle className="fill-none stroke-blue w-full h-full stroke-25" cx="102" cy="102" r="89" stroke-linecap="round" ref={circleRef} id="circle" />
                    </svg>
                </div>
                <div className="footer-circle w-full h-auto m-3 md:m-0 md:mt-2 text-white font-roboto-mono text-sm ml-0
                "><p className='flex items-center gap-1'><span className='material-symbols-outlined text-2xl'> monetization_on </span>Total Balance: 10,500</p>
                </div>
            </div>
            <div className='relative top-0 hidden md:inline-block'>
                < HorizonBar />
            </div>

            <div className='relative top-[140px] inline-block md:hidden'>
                < HorizonBar />
            </div>
        </div>
    )
}

export default Circle