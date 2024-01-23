import "./App.css";
import { InputButton } from "./components";

function App() {
  const handleSwap = () => {};
  const handleConvert = () => {};
  return (
    <>
      <h1>Currency Exchange</h1>
      <main className="main">
        <div className="first__input__container input__container__div">
          <InputButton custom="first__input" />
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
