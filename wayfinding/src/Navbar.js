import React from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Profile icon
import HomeIcon from '@mui/icons-material/Home'; // Example center icon

function Navbar() {
  return (
    <nav
      className="navbar"
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        gridTemplateAreas: '"logo center profile"',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: 'white',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Left side (Logo) */}
      <div className="navbar-logo" style={{ gridArea: 'logo' }}>
        <img
          src="/sdt.png"
          alt="Logo 3"
          style={{ height: '50px', cursor: 'pointer' }}
          onClick={() => window.location.href = 'http://164.52.197.111:3009/'} // Change URL to your desired one
        />
      </div>

    

      {/* Right side (Profile Section) */}
      <div
        className="navbar-profile"
        style={{
          gridArea: 'profile',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AccountCircleIcon style={{ color: '#17a2b8', marginRight: '10px', fontSize: '40px' }} />
          <span className="navbar-welcome-message" style={{ fontSize: '16px', fontWeight: 'bold' }}>
            Hello, Admin
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
