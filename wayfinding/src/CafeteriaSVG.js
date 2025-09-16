import React from 'react';

const CafeteriaSVG = ({ onSelect, isSelected }) => (
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
                points="106.6,16
                124.4,16.2
                126.2,30
                107.3,30"

                fill={isSelected ? 'rgba(0, 255, 0, 0.2)' : 'transparent'}
                stroke={isSelected ? 'green' : 'none'}
                strokeWidth="0.2"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                    if (typeof onSelect === 'function') {
                        onSelect('Cafeteria');
                    } else {
                        console.error('onSelect is not a function');
                    }
                }}
            />
        </svg>

        {isSelected && (
            <>
                <text
                    x="65%"
                    y="24%"
                    fill="black"
                    fontSize="14px"
                    fontWeight="bold"
                    textAnchor="middle"
                >
                    Cafeteria
                </text>

                <line x1="51%" y1="48.6%" x2="48.8%" y2="48.6%" className="dotted-line red" />
                <line x1="48.4%" y1="48.6%" x2="48.4%" y2="32%" className="dotted-line red" />
                <line x1="48.4%" y1="32%" x2="61.4%" y2="32%" className="dotted-line red" />
                <line x1="61.4%" y1="32%" x2="61.4%" y2="29%" className="dotted-line red" />



            </>
        )}
    </svg>
);

export default CafeteriaSVG;
