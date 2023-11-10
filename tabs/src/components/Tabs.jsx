import React, { useState } from 'react';

const Tabs = [
    {
        label: 'Tab One',
        content: 'This is Tab One',
        name: 'Ruben Ocasio',
        city: 'Virginia Beach',

    },
    {
        label: 'Tab Two',
        content: 'This is Tab Two',
        name: 'Anonymous',
        city: 'NYC',
    },
    {
        label: 'Tab Three',
        content: 'This is Tab Three',
        name: 'Bugs Bunny',
        city: 'Miami',
    }
]
function TabsApp() {
    const [Tab, setTab] = useState(0);
    
    function handleClick(i) {
        setTab(i);
    };
    return (
        <div>
            <div className="container">
            {Tabs.map((Tab, i) => {
                let beauty;
                i === Tab ? beauty = "on" : beauty = "off";

                return (
                <div className={[beauty]} key={i} onClick={() => handleClick(i)}>{Tab.label}</div>
                );
            })}
            </div>
            <div className="Box">
            Content: {Tabs[Tab].content}
            <br />
            Name: {Tabs[Tab].name}
            <br/>
            City:{Tabs[Tab].city}
            </div>
        </div>
    );
}

export default TabsApp