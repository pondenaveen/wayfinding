import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Dialog, DialogTitle, DialogContent, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import washroom from './images/restroom copy.png';

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


// const InnerContent = styled(Box)({
//     borderRadius: '8px',
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'transparent',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '4px',
//     cursor: 'pointer',
// });

const Washroom = ({ title, onRoomSelect }) => {
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const washrooms = [
        { id: 1, name: 'Male Washroom', room_name: 'washroom_male' },
        { id: 2, name: 'Female Washroom', room_name: 'washroom_female' },
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

        if (onRoomSelect) {
            onRoomSelect(selectedRoomName);
        }

        handleClose();
    };

    return (
        <>
            <hr style={{ width: '100%', borderTop: '2px solid #282e46', margin: '10px 0', marginTop: '-5px' }} />

            <OuterGradientWrapper onClick={handleClickOpen}>
                <img
                    src={washroom}
                    alt="washroom Icon"
                    style={{
                        width: '32px',
                        height: '32px',
                        objectFit: 'contain',
                        marginRight: '8px',  // Add space between the icon and the text
                    }}
                />
                <span style={{ color: 'white', fontSize: '26px' }}>{title || "Washroom"}</span>
            </OuterGradientWrapper>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Select the Washroom You Want to Go</DialogTitle>
                <DialogContent>
                    {/* Display Male Washrooms */}
                    <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Male Washrooms</Typography>
                    <RadioGroup value={selectedOption} onChange={handleOptionChange}>
                        {washrooms.filter(room => room.room_name === 'washroom_male').map((room) => (
                            <FormControlLabel
                                key={room.id}
                                value={room.room_name}
                                control={<Radio />}
                                label={room.name}
                            />
                        ))}
                    </RadioGroup>

                    {/* Display Female Washrooms */}
                    <Typography sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>Female Washrooms</Typography>
                    <RadioGroup value={selectedOption} onChange={handleOptionChange}>
                        {washrooms.filter(room => room.room_name === 'washroom_female').map((room) => (
                            <FormControlLabel
                                key={room.id}
                                value={room.room_name}
                                control={<Radio />}
                                label={room.name}
                            />
                        ))}
                    </RadioGroup>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Washroom;
