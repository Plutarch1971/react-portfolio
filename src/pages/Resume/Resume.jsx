import React from 'react';
// You don't need to import files from the public directory in React. 
// Instead, you can directly reference them in your JSX using the public URL.

const Resume = () => {
  
  return (
  <div className='resume-container'>
  <div className='titleTheme'>
    <h1>My Resume</h1>
    </div>
    <p>Click the button below to download my resume:</p>
    <a href="/Matthew Mendez-Technical-Resume.docx" download="Matthew Mendez-Technical-Resume.docx">
    <button className="resume-button">Download Resume</button>
    </a>
  </div>
  );
};

export default Resume;
