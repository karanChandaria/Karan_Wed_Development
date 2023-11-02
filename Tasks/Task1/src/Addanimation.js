import React, { useState } from 'react';

const AnimatedButton = () => {
    
    const [shake, setShake] = useState(false);
    
    const animate = () => {

        setShake(true);
        setTimeout(() => setShake(false), 2000);
    }
    
    return(
        <>
        <button onClick = {animate} className = {shake ? `shake` : null}>Animation</button>
        </>
        
    );
    
}

export default AnimatedButton;
