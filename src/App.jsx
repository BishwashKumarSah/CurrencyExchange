import "./App.css";
import { useEffect, useState } from "react";
import { InputButton } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [originalAmount,setOriginalAmount] = useState('');
  const [convertedAmount,setConvertedAmount] = useState('');

  const currencyType = useCurrencyInfo(from);  
  const currencyOptions = Object.keys(currencyType);


  const handleSwap = () => {
    setFrom(to);
    setTo(from);
    setOriginalAmount(convertedAmount);
    setConvertedAmount(originalAmount)
  };


  const handleConvert = () => {
    let calculatedAmount = originalAmount * currencyType[`${to}`]
    setConvertedAmount(calculatedAmount);
  };
  return (
    <>
      <h1 id="currency__title">Currency Exchange</h1>      
      <main className="main">
        <div className="first__input__container input__container__div">
          <InputButton
            custom="first__input"
            currencyType={from}
            setCurrencyType={(currency) => setFrom(currency)}
            currencyOptions={currencyOptions}
            originalAmount = {originalAmount}
            onOriginalAmountChange = {(amount) => setOriginalAmount(amount) }
            title = {"from"}
          />
          { console.log(originalAmount)}
          <div className="swapBtn">
            <button onClick={handleSwap} className="btn__swap">
              SWAP
            </button>
          </div>
        </div>

        <div className="input__container__div">
          <InputButton 
            currencyType={to}
            currencyOptions={currencyOptions}
            setCurrencyType={(currency) => setTo(currency)}
            disabled={true}
            originalAmount={convertedAmount}
            title = {"to"}
          />
        </div>
        <div className="convert__Btn">
          <button className="convertBtn" onClick={handleConvert}>
            Convert {"usd".toUpperCase()} to {"inr".toUpperCase()}{" "}
          </button>
        </div>
      </main>
      <footer className="footer">
        &copy; {new Date().getFullYear()} Bishwash • Built with ReactJS
      </footer>
    </>
  );
}

export default App;
