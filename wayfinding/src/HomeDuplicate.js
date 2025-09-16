import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { gridSpacing } from './constant';

import roomComponents from './RoomComponents';
import Vish from './Vish';
import Ramanujan from './Ramanujan';
import Aryabhata from './Aryabhata';
import Apj from './Apj';
import Kuvempu from './Kuvempu';
import Devi from './Devi';
import KuvempuSVG from './KuvempuSVG';
import VishSVG from './VishSVG';
import RamanujanSVG from './RamanujanSVG';
import AryabhataSVG from './AryabhataSVG';
import ApjSVG from './ApjSVG';
import DeviSVG from './DeviSVG';
import Chanakya from './Chanakya';
import ChanakyaSVG from './ChanakyaSVG';
import Jagadish from './Jagadish';
import JagadishSVG from './JagadishSVG';
import Washroom from './Washroom';

const Home = () => {
    const [imageSrc] = useState(require('./images/4thf.png'));
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [selectedWashroom, setSelectedWashroom] = useState(null);

    const handleRoomSelect = (roomName) => {
        console.log('Room selected:', roomName);
        setSelectedRoom(roomName);
        setSelectedWashroom(null); // Clear washroom selection when room is selected
    };

    const handleWashroomSelect = (washroomType) => {
        console.log('Washroom selected:', washroomType);
        setSelectedRoom(null); // Clear room selection when washroom is selected
        setSelectedWashroom(washroomType);
    };

    useEffect(() => {
        if (selectedRoom || selectedWashroom) {
            const timeoutId = setTimeout(() => {
                setSelectedRoom(null);
                setSelectedWashroom(null); // Clear both selections
            }, 10000); // Auto-deselect after 10 seconds

            return () => clearTimeout(timeoutId);
        }
    }, [selectedRoom, selectedWashroom]);

    const RoomComponent = selectedRoom ? roomComponents[selectedRoom] : null;

    return (
        <div>
            <Grid container spacing={gridSpacing} sx={{ px: 5 }}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item lg={10} md={10} sm={10} xs={12}>
                            <Box sx={{ position: 'relative' }}>
                                <img
                                    src={imageSrc}
                                    alt="Floor Plan"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                {/* SVG Overlays */}
                                <VishSVG
                                    onSelect={() => handleRoomSelect('Visvesvaraya')}
                                    isSelected={selectedRoom === 'Visvesvaraya'}
                                />
                                <RamanujanSVG
                                    onSelect={() => handleRoomSelect('Ramanujan')}
                                    isSelected={selectedRoom === 'Ramanujan'}
                                />
                                <AryabhataSVG
                                    onSelect={() => handleRoomSelect('Aryabhata')}
                                    isSelected={selectedRoom === 'Aryabhata'}
                                />
                                <ApjSVG
                                    onSelect={() => handleRoomSelect('APJ Abdul Kalam')}
                                    isSelected={selectedRoom === 'APJ Abdul Kalam'}
                                />
                                <DeviSVG
                                    onSelect={() => handleRoomSelect('Shakuntala devi')}
                                    isSelected={selectedRoom === 'Shakuntala devi'}
                                />
                                <KuvempuSVG
                                    onSelect={() => handleRoomSelect('Kuvempu')}
                                    isSelected={selectedRoom === 'Kuvempu'}
                                />
                                <ChanakyaSVG
                                    onSelect={() => handleRoomSelect('Chanakya')}
                                    isSelected={selectedRoom === 'Chanakya'}
                                />
                                <JagadishSVG
                                    onSelect={() => handleRoomSelect('Jagadish')}
                                    isSelected={selectedRoom === 'Jagadish'}
                                />

                                {/* Room Component Rendering */}
                                {RoomComponent && <RoomComponent />}
                            </Box>
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={12}>
                            <Grid container spacing={2} direction="column">
                                {/* Room Buttons */}
                                <Grid item xs={12}>
                                    <Vish title="Visvesvaraya" onClick={() => handleRoomSelect('Visvesvaraya')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Ramanujan title="Ramanujan" onClick={() => handleRoomSelect('Ramanujan')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Aryabhata title="Aryabhata" onClick={() => handleRoomSelect('Aryabhata')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Apj title="APJ Abdul Kalam" onClick={() => handleRoomSelect('APJ Abdul Kalam')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Kuvempu title="Kuvempu" onClick={() => handleRoomSelect('Kuvempu')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Devi title="Shakuntala devi" onClick={() => handleRoomSelect('Shakuntala devi')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Chanakya title="Chanakya" onClick={() => handleRoomSelect('Chanakya')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Jagadish title="Jagadish" onClick={() => handleRoomSelect('Jagadish')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Washroom title="Washroom" onRoomSelect={handleWashroomSelect} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* Washroom SVG Rendering */}
            {selectedWashroom === 'male' && <Typography>Male Washroom Selected</Typography>}
            {selectedWashroom === 'female' && <Typography>Female Washroom Selected</Typography>}
        </div>
    );
};

export default Home;
