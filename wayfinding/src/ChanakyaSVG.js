import React from 'react';

const ChanakyaSVG = ({ onSelect, isSelected }) => (
    <svg
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'auto', // Enable interaction
        }}
    >
        {/* Diagonal Shape using Polygon for APJ Abdul Kalam */}
        <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="xMinYMin meet"
            style={{
                position: 'absolute',
                top: '24%',
                left: '34.6%',
                width: '5.6%',
                height: '8.6%',
                pointerEvents: 'none',
            }}
        >
            <polygon
                points="129,51
                136.6, 51
                137.7,57
                130,57"
                fill={isSelected ? 'rgba(0, 255, 0, 0.2)' : 'transparent'}
                stroke={isSelected ? 'green' : 'none'}
                strokeWidth="0.2"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                    if (typeof onSelect === 'function') {
                        onSelect('APJ Abdul Kalam');
                    } else {
                        console.error('onSelect is not a function');
                    }
                }}
            />
        </svg>

        {isSelected && (
            <>
                <text
                    x="76%"
                    y="55%"
                    fill="black"
                    fontSize="14px"
                    fontWeight="bold"
                    textAnchor="middle"
                >
                    Chanakya
                </text>
                <line x1="51%" y1="50%" x2="72%" y2="50.2%" className="dotted-line red" />
                <line x1="72%" y1="50.8%" x2="72.2%" y2="55%" className="dotted-line red" />
                <line x1="72.2%" y1="55%" x2="74%" y2="55%" className="dotted-line red" />



            </>
        )}
    </svg>
);

export default ChanakyaSVG;
