import React from 'react';

const MaleSVG = () => (
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
            x="39%"
            y="33%"
            width="8.2%"
            height="7%"
            fill="rgba(0, 255, 0, 0.2)"
            stroke="green"
            strokeWidth="2"
        />
        <text
            x="48%"
            y="35%"
            fill="black"
            fontSize="12px"
            fontWeight="bold"
            textAnchor="middle"
        >
            <tspan x="43%" dy="0">Male</tspan>
            <tspan x="43%" dy="1.2em">Washroom</tspan>
        </text>

        <line x1="51%" y1="48.6%" x2="48%" y2="48.6%" className="dotted-line red" />
        <line x1="48%" y1="48.6%" x2="48%" y2="36%" className="dotted-line red" />
        <line x1="48%" y1="36%" x2="45%" y2="36%" className="dotted-line red" />

      
    </svg>
);

export default MaleSVG;
