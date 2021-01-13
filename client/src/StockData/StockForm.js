import React from 'react';

const StockForm = (symbol, name, price) =>{

    return(
        <form>

            <label for="symbol">Symbol</label>
            <input type="text" id="symbol" name="symbol" value={symbol}/>

            <label for="name">Name</label>
            <input type="text" id="name" name="name" value={name} />

            <label for="price">Price</label>
            <input type="text" id="price" name="price" value={price}/>

            <label for="volume">Volume</label>
            <input type="number" id="volume" name="volume" value="0" />

            <input
                type="submit"
                value="submit"
            />

        </form>
    )};
    
export default StockForm; 