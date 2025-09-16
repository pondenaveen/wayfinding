import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import cafe from './images/cafeteria (1) copy.png';

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


const Cafeteria = ({ title,onClick }) => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        const updatedCount = count + 1;
        setCount(updatedCount);

        if (onClick) {
            onClick();
        }
    };

    return (
        // <OuterGradientWrapper onClick={handleClick}>
        //     <img
        //         src={cafe}
        //         alt="Cafeteria Icon"
        //         style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '50%' }}
        //     />
        // </OuterGradientWrapper>

        <OuterGradientWrapper onClick={handleClick}>
            <img
            src={cafe}
            alt="Cafeteria Icon"
                style={{
                    width: '32px',
                    height: '32px',
                    objectFit: 'contain',
                    marginRight: '8px',  // Add space between the icon and the text
                }}
            />
            <span style={{ color: 'white', fontSize: '26px' }}>{title || "Cafeteria"}</span>
        </OuterGradientWrapper>
    );
};

export default Cafeteria;
