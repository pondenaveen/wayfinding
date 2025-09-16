
import React from 'react';
import { Typography, Stack } from '@mui/material';

import './Navbar.css';

const AuthFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Stack direction="row" justifyContent="center" alignItems="center" className="auth-footer">
            <Typography className="foot" variant="subtitle2" target="_blank">
                4CT <b>©</b> {currentYear}
            </Typography>
            <Typography className="foot" variant="subtitle2" target="_blank" sx={{ ml: 2 }}>
                Developed by Four Corners Technologies Pvt Ltd
                {/* Developed by 💜 Four Corners Technologies Pvt Ltd */}
            </Typography>
        </Stack>
    );
};

export default AuthFooter;