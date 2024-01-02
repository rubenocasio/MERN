import React, { useState } from 'react';
//I moved the data to a seperate component file call Data
import Data from './Data';

function Tabs() {
    const [active, setActive] = useState(0);
    
    const handleClick = index => setActive(index);

    return (
        <div>
            <div className="container">
                {Data.map((tab, index) => (
                    <div key={index} className={index === active ? 'on' : 'off'} onClick={() => handleClick(index)}>
                        {tab.label}
                    </div>
                ))}
            </div>
            <div className="Box">
                Content: {Data[active].content}
                <br />
                Name: {Data[active].name}
                <br />
                City: {Data[active].city}
            </div>
        </div>
    );
}

export default Tabs;
