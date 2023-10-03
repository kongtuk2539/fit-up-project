import React, { useState } from "react";

const CustomBar = ({ x, y, width, height, fill }) => {
    const [hovered, setHovered] = useState(false);
    const borderRadius = 8; // Adjust the radius for the rounded top corners
    
    return (
        <g>
            <path d={`M${x},${y + height} L${x},${y + borderRadius} Q${x},${y} ${x + borderRadius},${y} L${x + width - borderRadius},${y} 
        Q${x + width},${y} ${x + width},${y + borderRadius} L${x + width},${y + height} Z`} fill={hovered ? '#FD00FE' : fill}
                onMouseEnter={() => {
                    setHovered(true);
                }}
                onMouseLeave={() => {
                    setHovered(false);
                }}
                onMouseMove={(e) => {
                    e.stopPropagation();
                }}
                style={{ cursor: 'pointer' }} // Change the cursor to a pointer on hover
            />
        </g>
    );
};

export default CustomBar;