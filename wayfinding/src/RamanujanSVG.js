import React from 'react';

const RamanujanSVG = ({ onSelect, isSelected }) => (
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
                top: '57%',
                left: '52.8%',
                width: '3.2%',
                height: '5.3%',
                pointerEvents: 'none',
            }}
        >
            <polygon
                points="54.8,51
                70.2,51
                69.6,58 
                53.6,58"
                fill={isSelected ? 'rgba(0, 255, 0, 0.2)' : 'transparent'}
                stroke={isSelected ? 'green' : 'none'}
                strokeWidth="0.2"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                    if (typeof onSelect === 'function') {
                        onSelect('Ramanujan');
                    } else {
                        console.error('onSelect is not a function');
                    }
                }}
            />
        </svg>

        {isSelected && (
            <>
                <text
                    x="34.4%"
                    y="54%"
                    fill="black"
                    fontSize="14px"
                    fontWeight="bold"
                    textAnchor="middle"
                >
                    Ramanujan
                </text>
                <line x1="51%" y1="48.6%" x2="36.4%" y2="48.6%" class="dotted-line red" />
                <line x1="36.4%" y1="48.6%" x2="36.4%" y2="55%" class="dotted-line red" />
            </>
        )}
    </svg>
);

export default RamanujanSVG;
