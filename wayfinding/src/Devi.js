import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const OuterGradientWrapper = styled('div')({
    // background: 'linear-gradient(to right, rgba(191, 149, 63, 0.5), rgba(252, 246, 186, 0.5), rgba(179, 135, 40, 0.5), rgba(251, 245, 183, 0.5), rgba(170, 119, 28, 0.5))',
    backgroundColor: 'rgb(87, 87, 87)',
    borderRadius: '8px',
    padding: '1px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
});

const InnerContent = styled(Box)({
    borderRadius: '8px',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2px',
    cursor: 'pointer',
});

const Devi = ({ title, onClick }) => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        const updatedCount = count + 1; // Directly increment count

        setCount(updatedCount); // Update state with new count

        if (onClick) {
            onClick();
        }
    };

    return (
        <OuterGradientWrapper onClick={handleClick}>
            <InnerContent>
                <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: '400', textAlign: 'center' }}>
                    {title}
                </Typography>
            </InnerContent>
        </OuterGradientWrapper>
    );
};

export default Devi;
