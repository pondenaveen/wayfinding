import React from 'react';

const FemaleSVG = () => (
    <svg
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
        }}
    >
        <rect
            x="38.4%"
            y="40.4%"
            width="8.8%"
            height="7.4%"
            fill="rgba(0, 255, 0, 0.2)"
            stroke="green"
            strokeWidth="2"
        />
        <text
            x="48%"
            y="42.4%"
            fill="black"
            fontSize="12px"
            fontWeight="bold"
            textAnchor="middle"
        >
            <tspan x="43%" dy="0">Female</tspan>
            <tspan x="43%" dy="1.2em">Washroom</tspan>
        </text>

        <line x1="51%" y1="48.6%" x2="48%" y2="48.6%" className="dotted-line red" />
        <line x1="48%" y1="48.6%" x2="48%" y2="43%" className="dotted-line red" />
        <line x1="48%" y1="43%" x2="46%" y2="43%" className="dotted-line red" />



    </svg>
);

export default FemaleSVG;
