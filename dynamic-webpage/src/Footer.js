// Footer.js
import React from 'react';
const footerstyle={
  color:'brown'
}

const Footer = () => {
  return (
    <footer style={footerstyle}>
      {/* You can add more footer content here */
      <>
      <h4>Family WellNess Message Theropy</h4>
      <p> Ganesh Dhaygude ,Mo No : 8605086755</p>
      </>}
      <p>&copy; {new Date().getFullYear()} My Dynamic Web Page. All rights reserved. </p>
     
    </footer>
  );
};

export default Footer;
