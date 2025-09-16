// import React from 'react';
// import { styled } from '@mui/material/styles';
// import MainCard from './MainCard';

// const CardWrapper = styled(MainCard)(() => ({
//     color: '#fff',
//     overflow: 'hidden',
//     position: 'relative',
//     height: '100%',
//     minHeight: '190px',
//     marginTop: '-15px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

// const WayfindImageStyled = styled('img')({
//     width: '100%',
//     height: '560px',
//     transform: 'scaleX(1)', 
//     transformOrigin: 'center', 
// });

// const Wayfind = ({ imageSrc }) => {
//     return (
//         <CardWrapper border={false} content={false}>
//             <WayfindImageStyled src={imageSrc} alt="Wayfind Background" />
//         </CardWrapper>
//     );
// };

// export default Wayfind;




// //portrait mode
// // import React from 'react';
// // import { styled } from '@mui/material/styles';
// // import { Box, Typography } from '@mui/material';
// // import MainCard from './MainCard';
// // import WayfindImage from './Astra06 copy.png';

// // const CardWrapper = styled(MainCard)(() => ({
// //     color: '#fff',
// //     overflow: 'hidden',
// //     position: 'relative',
// //     height: '100%',
// //     minHeight: '190px',
// //     marginTop: '-15px',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// // }));

// // const WayfindImageStyled = styled('img')({
// //     width: '110%', 
// //     height: '560px', 
// //     maxWidth: '100%', 
// // });

// // const Wayfind = ({ imageSrc }) => {
// //     return (
// //         <CardWrapper border={false} content={false}>
// //             <WayfindImageStyled src={imageSrc} alt="Wayfind Background" />
           
// //         </CardWrapper>
// //     );
// // };

// // export default Wayfind;


import React from 'react';
import { styled } from '@mui/material/styles';
import MainCard from './MainCard';

const CardWrapper = styled(MainCard)(() => ({
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    height: '100%',
    minHeight: '190px', // Adjust if necessary
    marginTop: '-15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const WayfindImageStyled = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center', // Centers the image in the container
});

const Wayfind = ({ imageSrc }) => {
    return (
        <CardWrapper border={false} content={false}>
            <WayfindImageStyled src={imageSrc} alt="Wayfind Background" />
        </CardWrapper>
    );
};

export default Wayfind;
