// BodySection.js
import React from 'react';

const sectionstyle={
    backgroundColor:'brown'
}

const BodySection = () => {
  return (
    <section style={sectionstyle}>
      <p>This is the body section of the web page.</p>
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/88404f75759573.5c55ad2cebd95.jpg" alt="Description of Image 1" />
      
      {/* You can add more content here */
      <>
       <h1>Think Health. Think Massage</h1>
       <p>We are open 9Am to 6pm;Monday to Sunday. If  would you like to appointment with us 
        , please call us at 8605086755 </p>
        <buttons>Learn more about Us</buttons>

        <buttons>Contact us Today</buttons>
      </>
     
      
      }
    </section>
  );
};

export default BodySection;
