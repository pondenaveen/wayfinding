import React from 'react';

const ApjSVG = ({ onSelect, isSelected }) => (
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
                points="132.4,34 
                144,34 
                147.6,49 
                134.6,49"

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
                    x="77%"
                    y="42%"
                    fill="black"
                    fontSize="14px"
                    fontWeight="bold"
                    textAnchor="middle"
                >
                    APJ Abdul Kalam
                </text>
                <line x1="51%" y1="50%" x2="82%" y2="50.2%" className="dotted-line red" />
                <line x1="82.4%" y1="50.2%" x2="81%" y2="37.2%" className="dotted-line red" />
                <line x1="81%" y1="37.2%" x2="78%" y2="37.2%" className="dotted-line red" />



            </>
        )}
    </svg>
);

export default ApjSVG;
