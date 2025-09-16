import React from 'react';

const KuvempuSVG = ({ onSelect, isSelected }) => (
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
                points="53.4,57.8
                61.2,57.8
                60.6,63.3 
                52.8,63.3"
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
                    x="32%"
                    y="60%"
                    fill="black"
                    fontSize="14px"
                    fontWeight="bold"
                    textAnchor="middle"
                >
                    Kuvempu
                </text>
                <line x1="51%" y1="48.6%" x2="47.4%" y2="48.6%" class="dotted-line red" />
                <line x1="47.4%" y1="48.6%" x2="47.4%" y2="65%" class="dotted-line red" />
                <line x1="47.4%" y1="65%" x2="30.6%" y2="65%" class="dotted-line red" />
                <line x1="30.6%" y1="65%" x2="30.6%" y2="60%" class="dotted-line red" />
            </>
        )}
    </svg>
);

export default KuvempuSVG;
