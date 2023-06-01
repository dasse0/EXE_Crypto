import React from 'react';
import { useState, useEffect } from 'react';
import Coinbase_agg_spot_ordebook from './orderbooks/Coinbase_agg_SPOT';
import Coinbase_agg_spot_ordebook_a from './orderbooks/Coinbase_agg_SPOT_ask_only';
import Coinbase_agg_spot_ordebook_b from './orderbooks/Coinbase_agg_SPOT_bid_only';

import Kraken_agg_spot_ordebook from './orderbooks/Kraken_agg_SPOT';


function Aggregator_SPOT() {


    return ( 
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",

            width: "100%",
            height: "100%",
        }}>
            <Coinbase_agg_spot_ordebook_a/>
            <Coinbase_agg_spot_ordebook/>
           
            <Coinbase_agg_spot_ordebook_b/>
            
            
        </div>


     );
}

export default Aggregator_SPOT;