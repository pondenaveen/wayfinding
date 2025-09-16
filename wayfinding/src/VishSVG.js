import React from 'react';

const VishSVG = ({ onSelect, isSelected }) => (
    <svg
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'auto',
        }}
    >

        <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="xMinYMin meet"
            style={{
                position: 'absolute',
                top: '32%',
                left: '19%',
                width: '6%',
                height: '14.8%',
                pointerEvents: 'none',
            }}
        >
            <polygon
                points="34.6,33 
               46,33
               43,47.8 
               30.8,47.8"

                fill={isSelected ? 'rgba(0, 255, 0, 0.2)' : 'transparent'}
                stroke={isSelected ? 'green' : 'none'}
                strokeWidth="0.2"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                    if (typeof onSelect === 'function') {
                        onSelect('Visvesvaraya');
                    } else {
                        console.error('onSelect is not a function');
                    }
                }}
            />
        </svg>


        {isSelected && (
            <>
                <text
                    x="22%"
                    y="40%"
                    fill="black"
                    fontSize="14px"
                    fontWeight="bold"
                    textAnchor="middle"
                >
                    Visvesvaraya
                </text>
                <line x1="51%" y1="48.6%" x2="16.6%" y2="48.6%" className="dotted-line red" />
                <line x1="16%" y1="48.6%" x2="18%" y2="35%" className="dotted-line red" />
                <line x1="18%" y1="35%" x2="22%" y2="35%" className="dotted-line red" />
            </>
        )}
    </svg>
);

export default VishSVG;
