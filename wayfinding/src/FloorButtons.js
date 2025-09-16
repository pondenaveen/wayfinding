// FloorButtons.js
import React from 'react';
import { Button, Box } from '@mui/material';

const FloorButtons = ({ selectedFloor, onSelectFloor }) => {
    const floors = [1, 2, 3, 4, 5];

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            {floors.map(floor => (
                <Button
                    key={floor}
                    variant={selectedFloor === floor ? 'contained' : 'outlined'}
                    color="primary"
                    sx={{ margin: 1 }}
                    onClick={() => onSelectFloor(floor)}
                >
                    Floor {floor}
                </Button>
            ))}
        </Box>
    );
};

export default FloorButtons;
