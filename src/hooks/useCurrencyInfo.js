import { useEffect, useState } from 'react';
import axios from "axios";
const useCurrencyInfo = (currency) => {
    const [currencyExchangeRate, setCurrencyExchangeRate] = useState({})
    const getCurrencyData = async () => {
        const response = await axios.get(
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        // console.log(response)
        // console.log(response.data[`${currency}`]);
        setCurrencyExchangeRate(response.data[`${currency}`]);
    };
    useEffect(() => {
        getCurrencyData();
    }, [currency]);
    return currencyExchangeRate
}

export default useCurrencyInfo;




