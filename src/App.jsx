import "./App.css";
import { useEffect, useState } from "react";
import { InputButton } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const currencyType = useCurrencyInfo("usd");
  const currencyOptions = Object.keys(currencyType);
  const handleSwap = () => {};
  const handleConvert = () => {};
  return (
    <>
      <h1>Currency Exchange</h1>
      {currencyType && console.log(currencyType)}
      <main className="main">
        <div className="first__input__container input__container__div">
          <InputButton
            custom="first__input"
            currencyType={from}
            setCurrencyType={(currency) => setFrom(currency)}
            currencyOptions={currencyOptions}
          />
          <div className="swapBtn">
            <button onClick={handleSwap} className="btn__swap">
              SWAP
            </button>
          </div>
        </div>

        <div className="input__container__div">
          <InputButton />
        </div>
        <div className="convert__Btn">
          <button className="convertBtn" onClick={handleConvert}>
            Convert {"usd".toUpperCase()} to {"inr".toUpperCase()}{" "}
          </button>
        </div>
      </main>
      <footer className="footer">
        &copy; {new Date().getFullYear()} Bishwash • Built with React
      </footer>
    </>
  );
}

export default App;
