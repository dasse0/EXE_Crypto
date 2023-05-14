import React from 'react';
import { useState, useEffect } from 'react';

function Bn_Aggregator_USDT() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('https://api.binance.com/api/v3/ticker/bookTicker')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    

    


    return ( 
        <div>
            <h1>Aggregator_USDT</h1>
        </div>


     );
}

export default Bn_Aggregator_USDT;