import React from 'react';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip bg-white w-132 h-65">
                <p className="label">{`Date: ${payload[0].payload.date}`}</p>
                <p className="intro">{`Calories: ${payload[0].payload.cal}`}</p>
            </div>
        );
    }
    return null;
};

export default CustomTooltip;