import React from 'react';
import { styled } from '@mui/material/styles';
import fire from './images/exit copy.png';

const OuterGradientWrapper = styled('div')({
    backgroundColor: '#282e46',
    borderRadius: '4px',
    width: 'auto',  // Adjust width for the text beside the icon
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    margin: '0 auto',
    padding: '0 10px', // Add some padding to the wrapper for better spacing
});

const Fire = ({ title, onClick }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <OuterGradientWrapper onClick={handleClick}>
            <img
                src={fire}
                alt="Fire Exit Icon"
                style={{
                    width: '32px',
                    height: '32px',
                    objectFit: 'contain',
                    marginRight: '8px',  // Add space between the icon and the text
                }}
            />
            <span style={{ color: 'white', fontSize: '26px' }}>{title || "Fire Exit"}</span>
        </OuterGradientWrapper>
    );
};

export default Fire;
