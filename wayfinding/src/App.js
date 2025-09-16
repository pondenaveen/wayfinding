// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Navbar';
// import './App.css';
// import Home from './Home';
// import AuthFooter from './AuthFooter';
// import image from './images/page_1.gif';

// const ImagePage = () => {
//   return (
//     <div className="image-page">
//       <img
//         src={image}
//         alt="Welcome"
//         onClick={() => window.location.href = '/home'}
//         style={{ cursor: 'pointer', width: '100%', height: 'auto' }}
//       />
//     </div>
//   );
// };

// const App = () => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       window.location.href = '/';
//     }, 100000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           {/* <Route path="/" element={<ImagePage />} /> */}
//           <Route path="/home" element={<><Navbar /><Home /><AuthFooter /></>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Navbar /><Home /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
