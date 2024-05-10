import React, { useState, useEffect } from 'react';

function Botcollection() {
    const [bots, setBots] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/bots')
            .then((res) => res.json())
            .then((data) => setBots(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []); 

    return (
        <div >
            {bots.map((bot) => ( 
                <div key={bot.id} className="grid grid-cols-4 gap-4" >
                    <img src={bot.avatar_url} />
                </div>
            ))}
        </div>
    );
}

export default Botcollection;
