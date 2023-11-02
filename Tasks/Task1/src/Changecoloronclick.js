import React, { useState } from 'react';

function Changecoloronclick() 
{

  const [isclick,setIsclick] = useState(false);

  const handleclick = ()=>
  {
    setIsclick(!isclick);
  }

  const color = isclick ? "clicked" : "unclicked";
  
  return (
    <>
    <div
    className={`color-box ${color}`}
    onClick={handleclick}
    >
      Change Color
    </div>
    </>
  )
}

export default Changecoloronclick;
