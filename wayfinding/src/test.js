import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, TextField, Box } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { gridSpacing } from './constant';

import roomComponents from './RoomComponents';
import Vish from './Vish';
import Ramanujan from './Ramanujan';
import Aryabhata from './Aryabhata';
import Apj from './Apj';
import Kuvempu from './Kuvempu';
import KuvempuSVG from './KuvempuSVG';
import VishSVG from './VishSVG';
import RamanujanSVG from './RamanujanSVG';
import AryabhataSVG from './AryabhataSVG';
import ApjSVG from './ApjSVG';
import Washroom from './Washroom';
import Fire from './Fire';
import FireSVG from './FireSVG';
import Cafeteria from './Cafeteria';
import CafeteriaSVG from './CafeteriaSVG';


const Home = () => {
    const [imageSrc] = useState(require('./images/4thf.png'));
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleRoomSelect = (roomName) => {
        console.log('Room selected:', roomName);
        setSelectedRoom(roomName);
    };

    useEffect(() => {
        if (selectedRoom) {
            const timeoutId = setTimeout(() => {
                setSelectedRoom(null);
            }, 1000000000);

            return () => clearTimeout(timeoutId);
        }
    }, [selectedRoom]);

    const RoomComponent = selectedRoom ? roomComponents[selectedRoom] : null;

    const filteredRooms = [
        { title: 'Visvesvaraya', description: '18pax Video, Audio Conference room', component: <Vish title="Visvesvaraya" onClick={() => handleRoomSelect('Visvesvaraya')} /> },
        { title: 'Ramanujan', description: '6pax Audio Conference room', component: <Ramanujan title="Ramanujan" onClick={() => handleRoomSelect('Ramanujan')} /> },
        { title: 'Aryabhata', description: '4pax Video Conference room', component: <Aryabhata title="Aryabhata" onClick={() => handleRoomSelect('Aryabhata')} /> },
        { title: 'APJ Abdul Kalam', description: '18pax Video, Audio Conference room', component: <Apj title="Kalam" onClick={() => handleRoomSelect('APJ Abdul Kalam')} /> },
        { title: 'Kuvempu', description: '4pax Video, Audio Conference room', component: <Kuvempu title="Kuvempu" onClick={() => handleRoomSelect('Kuvempu')} /> },
        { title: 'Washroom', component: <Washroom title="Washroom" onRoomSelect={handleRoomSelect} /> },
        { title: 'Fire Exit', component: <Fire title="Fire Exit" onClick={() => handleRoomSelect('Fire')} /> },
        { title: 'Cafeteria', component: <Cafeteria title="Cafeteria" onClick={() => handleRoomSelect('Cafeteria')} /> }
    ];

    const filteredRoomComponents = filteredRooms.filter(room =>
    (room.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        room.description?.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div>
            <Grid container spacing={gridSpacing} sx={{ px: 2, mt: 0 }}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        {/* Image and SVG Components */}
                        <Grid item lg={9.5} md={10} sm={10} xs={12}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    mb: 2,
                                }}
                            >
                                <img
                                    src={imageSrc}
                                    alt="Floor Plan"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <VishSVG onSelect={() => handleRoomSelect('Visvesvaraya')} isSelected={selectedRoom === 'Visvesvaraya'} />
                                <RamanujanSVG onSelect={() => handleRoomSelect('Ramanujan')} isSelected={selectedRoom === 'Ramanujan'} />
                                <AryabhataSVG onSelect={() => handleRoomSelect('Aryabhata')} isSelected={selectedRoom === 'Aryabhata'} />
                                <ApjSVG onSelect={() => handleRoomSelect('APJ Abdul Kalam')} isSelected={selectedRoom === 'APJ Abdul Kalam'} />
                                <KuvempuSVG onSelect={() => handleRoomSelect('Kuvempu')} isSelected={selectedRoom === 'Kuvempu'} />
                                <FireSVG onSelect={() => handleRoomSelect('Fire')} isSelected={selectedRoom === 'Fire'} />
                                <CafeteriaSVG onSelect={() => handleRoomSelect('Cafeteria')} isSelected={selectedRoom === 'Cafeteria'} />

                                {RoomComponent && <RoomComponent />}


                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        gap: 2,
                                        mt: -10,
                                    }}
                                >
                                    <button
                                        onClick={() => console.log('Floor 3 Selected')}
                                        style={{
                                            padding: '26px',
                                            borderRadius: '50%',
                                            border: 'none',
                                            backgroundColor: '#D3D3D3',
                                            color: '#A9A9A9',
                                            cursor: 'not-allowed',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            cursor: 'pointer'
                                        }}
                                        disabled
                                    >
                                        <span>GF</span>

                                    </button>

                                    <button
                                        onClick={() => console.log('Floor 1 Selected')}
                                        style={{
                                            padding: '26px',
                                            borderRadius: '50%',
                                            border: 'none',
                                            backgroundColor: '#282e46',
                                            color: '#fff',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <span>1 F</span>

                                    </button>

                                    <button
                                        onClick={() => console.log('Floor 3 Selected')}
                                        style={{
                                            padding: '26px',
                                            borderRadius: '50%',
                                            border: 'none',
                                            backgroundColor: '#D3D3D3',
                                            color: '#A9A9A9',
                                            cursor: 'not-allowed',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                        }}
                                        disabled
                                    >
                                        <span>2 F</span>
                                        {/* <img
                                            src={Floor1Image}
                                            alt="Floor 2"
                                            style={{ width: '60px', height: '30px', marginTop: '8px' }}
                                        /> */}
                                    </button>

                                    <button
                                        onClick={() => console.log('Floor 3 Selected')}
                                        style={{
                                            padding: '26px',
                                            borderRadius: '50%',
                                            border: 'none',
                                            backgroundColor: '#D3D3D3',
                                            color: '#A9A9A9',
                                            cursor: 'not-allowed',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                        }}
                                        disabled
                                    >
                                        <span>3 F</span>
                                    </button>

                                    <button
                                        onClick={() => console.log('Floor 3 Selected')}
                                        style={{
                                            padding: '26px',
                                            borderRadius: '50%',
                                            border: 'none',
                                            backgroundColor: '#D3D3D3',
                                            color: '#A9A9A9',
                                            cursor: 'not-allowed',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                        }}
                                        disabled
                                    >
                                        <span>4 F</span>

                                    </button>
                                    <button
                                        onClick={() => console.log('Floor 3 Selected')}
                                        style={{
                                            padding: '26px',
                                            borderRadius: '50%',
                                            border: 'none',
                                            backgroundColor: '#D3D3D3',
                                            color: '#A9A9A9',
                                            cursor: 'not-allowed',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                        }}
                                        disabled
                                    >
                                        <span>5 F</span>
                                        {/* <img
                                            src={Floor1Image}
                                            alt="Floor 3"
                                            style={{ width: '60px', height: '30px', marginTop: '8px' }}
                                        /> */}
                                    </button>
                                    <button
                                        onClick={() => console.log('Floor 3 Selected')}
                                        style={{
                                            padding: '26px',
                                            borderRadius: '50%',
                                            border: 'none',
                                            backgroundColor: '#D3D3D3',
                                            color: '#A9A9A9',
                                            cursor: 'not-allowed',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                        }}
                                        disabled
                                    >
                                        <span>6 F</span>

                                    </button>
                                </Box>

                            </Box>
                        </Grid>


                        {/* Search and Filtered Rooms */}
                        <Grid item lg={2.5} md={2} sm={2} xs={12}>
                            <Grid container spacing={2} direction="column">
                                <Grid item xs={12}>
                                    <Card>
                                        <CardContent>
                                            <TextField
                                                variant="outlined"
                                                fullWidth
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                sx={{
                                                    mb: 0.5,
                                                    '& .MuiInputBase-root': { height: '30px' },
                                                    '& .MuiOutlinedInput-input': { padding: '8px 14px' },
                                                }}
                                                InputProps={{
                                                    startAdornment: <SearchIcon sx={{ color: 'gray', marginRight: 1 }} />,
                                                }}
                                            />
                                            <Grid container spacing={2} direction="column">
                                                {filteredRoomComponents.map((room, index) => (
                                                    <Grid item xs={12} key={index}>
                                                        {room.component}
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;
