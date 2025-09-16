import React from 'react';

const FireSVG = ({ onSelect, isSelected }) => (
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
                points="21.6,15
                34,15
                33,19.6 
                19.8,19.6"
                fill={isSelected ? 'rgb(255, 0, 0,0.2)' : 'transparent'}
                stroke={isSelected ? 'red' : 'none'}
                strokeWidth="0.2"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                    if (typeof onSelect === 'function') {
                        onSelect('Fire');
                    } else {
                        console.error('onSelect is not a function');
                    }
                }}
            />


            <polygon
                points="107.8,40
                122.8,40
                123.6,46.2
                108,46"
                fill={isSelected ? 'rgb(255, 0, 0,0.2)' : 'transparent'}
                stroke={isSelected ? 'red' : 'none'}
                strokeWidth="0.2"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                    if (typeof onSelect === 'function') {
                        onSelect('Fire');
                    } else {
                        console.error('onSelect is not a function');
                    }
                }}
            />


            <polygon
                points="87.6,19
                95,19
                95,30
                87.6,30"
                fill={isSelected ? 'rgb(255, 0, 0,0.2)' : 'transparent'}
                stroke={isSelected ? 'red' : 'none'}
                strokeWidth="0.2"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                    if (typeof onSelect === 'function') {
                        onSelect('Fire');
                    } else {
                        console.error('onSelect is not a function');
                    }
                }}
            />


        </svg>
        {isSelected && (
            <>
                <text
                    x="15%"
                    y="17.4%"
                    fill="black"
                    fontSize="14px"
                    fontWeight="bold"
                    textAnchor="middle"
                >
                    Fire Exit
                </text>


                <text
                    x="50.4%"
                    y="25%"
                    fill="black"
                    fontSize="14px"
                    fontWeight="bold"
                    textAnchor="middle"
                >
                    Fire Exit
                </text>

                <text
                    x="64%"
                    y="42.6%"
                    fill="black"
                    fontSize="14px"
                    fontWeight="bold"
                    textAnchor="middle"
                >
                    Fire Exit
                </text>

                <line x1="51%" y1="48.6%" x2="15.6%" y2="48.6%" className="dotted-line green" />
                <line x1="15.6%" y1="48.6%" x2="19.7%" y2="19%" className="dotted-line green" />
                <line x1="19.7%" y1="19%" x2="17%" y2="19%" className="dotted-line green" />

                <line x1="51%" y1="50%" x2="61%" y2="50.2%" className="dotted-line green" />
                <line x1="61%" y1="50.2%" x2="61%" y2="44%" className="dotted-line green" />

                <line x1="51%" y1="48.6%" x2="48%" y2="48.6%" className="dotted-line green" />
                <line x1="48.4%" y1="48.6%" x2="48.4%" y2="32%" className="dotted-line green" />
                <line x1="48.4%" y1="32%" x2="54%" y2="32%" className="dotted-line green" />
                <line x1="54%" y1="32%" x2="54%" y2="28%" className="dotted-line green" />
                <line x1="54%" y1="28%" x2="50%" y2="28%" className="dotted-line green" />



            </>
        )}
    </svg>
);

export default FireSVG;
