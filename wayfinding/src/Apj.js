import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Grid } from '@mui/material';
import videoIcon from './images/video-camera copy.png';
import audioIcon from './images/volume copy.png';

const OuterGradientWrapper = styled('div')({
    backgroundColor: '#282e46',
    borderRadius: '2px',
    padding: '3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const InnerContent = styled(Box)({
    borderRadius: '8px',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    alignItems: 'center',
    justifyItems: 'center',
    padding: '4px',
    cursor: 'pointer',
    position: 'relative',
    gap: '4px',
});

const DotLeft = styled('div')({
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'green',
    position: 'relative',
});


const Apj = ({ title, onClick }) => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        const updatedCount = count + 1;
        setCount(updatedCount);

        if (onClick) {
            onClick();
        }
    };

    return (
        <OuterGradientWrapper onClick={handleClick}>
            <InnerContent>
                <Grid item>
                    <DotLeft />
                </Grid>
                <Grid item>
                    <Typography sx={{ color: 'white', fontSize: '16px', fontWeight: '400', textAlign: 'center' }}>
                        {title}
                    </Typography>
                    <Typography sx={{ color: 'white', fontSize: '10px', fontWeight: '300', textAlign: 'center' }}>
                        (18pax)
                    </Typography>
                </Grid>
                <Grid item>
                    {/* <Typography sx={{ color: 'white', fontSize: '8px', fontWeight: '300', textAlign: 'center' }}>
                                        18pax Video, Audio Conference room
                                    </Typography> */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px', mt: '4px' }}>
                        <img src={videoIcon} alt="Video Icon" style={{ width: '20px', height: '20px' }} />
                        <img src={audioIcon} alt="Audio Icon" style={{ width: '20px', height: '20px' }} />
                    </Box>
                </Grid>
            </InnerContent>
        </OuterGradientWrapper>
    );
};

export default Apj;
