import React from 'react';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip bg-white w-132 h-65 rounded px-2 pb-4 ">
                <p className="label font-roboto-mono pb-0">{`Date: ${payload[0].payload.date}`}</p>
                <p className="intro pl-1 font-roboto-mono font-bold">{`Calories: ${payload[0].payload.cal}`}</p>
            </div>
        );
    }
    return null;
};

export default CustomTooltip;