import React from 'react';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip bg-white rounded pb-1 w-[132px] h-[65px]">
                <p className="label font-roboto-mono text-sm px-[16px] pb-0">{`${payload[0].payload.date}`}</p>
                <p className="intro font-roboto-mono font-bold px-[16px] text-xl">{`${payload[0].payload.cal} cal`}</p>
            </div>
        );
    }
    return null;
};

export default CustomTooltip;