import React from 'react';

const AryabhataSVG = ({ onSelect, isSelected }) => (
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
                points="61.2,57.8
                69.8,57.8
                69.4,63.4 
                60.6,63.4"
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
                    x="37%"
                    y="60%"
                    fill="black"
                    fontSize="14px"
                    fontWeight="bold"
                    textAnchor="middle"
                >
                    Aryabhata
                </text>
                <line x1="51%" y1="48.6%" x2="47.4%" y2="48.6%" class="dotted-line red" />
                <line x1="47.4%" y1="48.6%" x2="47.4%" y2="65%" class="dotted-line red" />
                <line x1="47.4%" y1="65%" x2="36%" y2="65%" class="dotted-line red" />
                <line x1="36%" y1="65%" x2="36%" y2="60%" class="dotted-line red" />
            </>
        )}
    </svg>
);

export default AryabhataSVG;
