import React from 'react';
import './App.css'; 

const Applycss = () => {
  const elements = [
    { text: 'Good Morning' },
    { text: 'Good Afternoon' },
    { text: 'Good Evening' },
    { text: "Good Night"}
  ];

  return (
    <div>
      {elements.map((element, index) => (
        <div key={index} className="custom-element">
          {element.text}
        </div>
      ))}
    </div>
  );
};

export default Applycss;
