// Header.js
import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: 'white',
    color: 'lightred',
    padding: '20px',
   // textAlign: 'center',
  };

  const navStyle = {
    marginTop: '10px',
   
  };
  const ulStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex', // Use Flexbox to display items horizontally
    justifyContent: 'center', // Center the items horizontally
  };

  const linkStyle = {
    color: 'blue',
    textDecoration: 'none',
    margin: '0 10px',
    display:'flex',
    flexdirection:'row'
  };
  const heading={
    display:'flex',
    justifyContent:'start',
    color:'red'
  }

  return (
    <header style={headerStyle}>
      <h1 style={heading}>Welcome to My Dynamic Web Page</h1>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li>
            <a href="/Home" style={linkStyle}>Home</a>
          </li>
          <li>
            <a href="/about" style={linkStyle}>About</a>
          </li>
          <li>
            <a href="/services" style={linkStyle}>Services</a>
          </li>
          <li>
            <a href="/faq" style={linkStyle}>FAQ</a>
          </li>
          <li>
            <a href="/contact" style={linkStyle}>Contact</a>
          </li>         
        </ul>
      </nav>
      {/* You can add more header content here */}
    </header>
  );
};

export default Header;
