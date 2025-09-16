import React from 'react';

const JagadishSVG = ({ onSelect, isSelected }) => (
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
                top: '24%',
                left: '34.6%',
                width: '5.6%',
                height: '8.6%',
                pointerEvents: 'none',
            }}
        >
            <polygon
                points="130,57
                137.7, 57
                138.8,63
                131,63"
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
                    x="78%"
                    y="60%"
                    fill="black"
                    fontSize="14px"
                    fontWeight="bold"
                    textAnchor="middle"
                >
                    Jagadish Bose
                </text>
                <line x1="51%" y1="50%" x2="72%" y2="50.2%" className="dotted-line red" />
                <line x1="72%" y1="50.8%" x2="72.7%" y2="62%" className="dotted-line red" />
                <line x1="72.7%" y1="62%" x2="76%" y2="62%" className="dotted-line red" />

            </>
        )}
    </svg>
);

export default JagadishSVG;
