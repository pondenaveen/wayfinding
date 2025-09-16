import React from 'react';

const DeviSVG = ({ onSelect, isSelected }) => (
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
                points="136.6,51
                144.6, 51
                147,63.2
                138.8,63"
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
                    x="81%"
                    y="58%"
                    fill="black"
                    fontSize="14px"
                    fontWeight="bold"
                    textAnchor="middle"
                >
                    Shakuntala Devi
                </text>
                <line x1="51%" y1="50%" x2="82%" y2="50.2%" className="dotted-line red" />
                <line x1="82.4%" y1="50.2%" x2="83.6%" y2="60%" className="dotted-line red" />
                <line x1="83.6%" y1="60%" x2="80%" y2="60%" className="dotted-line red" />


            </>
        )}
    </svg>
);

export default DeviSVG;
