import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Dialog, DialogTitle, DialogContent, Radio, RadioGroup, FormControlLabel } from '@mui/material';

const OuterGradientWrapper = styled('div')({
    background: 'linear-gradient(to right, rgba(191, 149, 63, 0.5), rgba(252, 246, 186, 0.5), rgba(179, 135, 40, 0.5), rgba(251, 245, 183, 0.5), rgba(170, 119, 28, 0.5))',
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px',
    cursor: 'pointer',
});

const Server = ({ title, onServerSelect }) => {
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const servers = [
        { id: 1, name: 'Server 1', server_name: 'server_1' },
        { id: 2, name: 'Server 2', server_name: 'server_2' },
    ];

    const handleClickOpen = () => {
        setSelectedOption('');
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOptionChange = (event) => {
        const selectedRoomName = event.target.value;
        setSelectedOption(selectedRoomName);

        if (onServerSelect) {
            onServerSelect(selectedRoomName);
        }

        handleClose();
    };

    return (
        <>
            <OuterGradientWrapper onClick={handleClickOpen}>
                <InnerContent>
                    <Typography sx={{ color: '#840454', fontSize: '18px', fontWeight: '400', textAlign: 'center' }}>
                        {title}
                    </Typography>
                </InnerContent>
            </OuterGradientWrapper>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Select the Server</DialogTitle>
                <DialogContent>
                    <RadioGroup value={selectedOption} onChange={handleOptionChange}>
                        {servers.map((server) => (
                            <FormControlLabel
                                key={server.id}
                                value={server.server_name}
                                control={<Radio />}
                                label={server.name}
                            />
                        ))}
                    </RadioGroup>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Server;
