import React from 'react';

const Server_1SVG = () => (
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
            x="40%"
            y="30%"
            width="10%"
            height="8%"
            fill="rgba(0, 0, 255, 0.2)"
            stroke="blue"
            strokeWidth="2"
        />
        <text
            x="45%"
            y="34%"
            fill="black"
            fontSize="12px"
            fontWeight="bold"
            textAnchor="middle"
        >
            <tspan x="45%" dy="0">Server</tspan>
            <tspan x="45%" dy="1.2em">1</tspan>
        </text>

        <line x1="50%" y1="50%" x2="47%" y2="50%" className="dotted-line red" />
        <line x1="47%" y1="50%" x2="47%" y2="38%" className="dotted-line red" />
        <line x1="47%" y1="38%" x2="44%" y2="38%" className="dotted-line red" />
    </svg>
);

export default Server_1SVG;
