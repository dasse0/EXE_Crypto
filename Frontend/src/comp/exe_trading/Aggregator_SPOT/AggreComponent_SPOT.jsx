import React from 'react';
import { useState, useEffect } from 'react';
import Coinbase_agg_spot_ordebook from './orderbooks/Coinbase_agg_SPOT';
import Coinbase_agg_spot_ordebook_a from './orderbooks/Coinbase_agg_SPOT_ask_only';
import Coinbase_agg_spot_ordebook_b from './orderbooks/Coinbase_agg_SPOT_bid_only';

import Bybit_agg_spot_ordebook_a from './orderbooks/ByBit_agg_SPOT_ask_only';

import Bybit_agg_spot_ordebook_b from './orderbooks/ByBit_agg_SPOT_bid_only';



function Aggregator_SPOT() {


    return ( 
        <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            
            



            width: "100%",
            height: "100%",
        }}>
            <Coinbase_agg_spot_ordebook_a />

            <Bybit_agg_spot_ordebook_a/>
            <Bybit_agg_spot_ordebook_b/>


            <Coinbase_agg_spot_ordebook_b/>
            
            
        </div>


     );
}

export default Aggregator_SPOT;