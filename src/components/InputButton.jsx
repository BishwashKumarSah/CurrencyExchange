import { useId } from "react";
function InputButton({
  setCurrencyType,
  currencyType = "usd",
  currencyOptions = [],
}) {
  const amountInputId = useId();
  return (
    <>
      <div className={` input__container`}>
        <div className="input__value">
          <label htmlFor={amountInputId}>Label change</label>
          <input
            type="number"
            id={amountInputId}
            min={0}
            className="label__input"
          />
        </div>

        <div className="input__dropdown">
          <p className="currency__p">Currency Type</p>
          <select
            name="currencyOptions"
            id=""
            className="label__input select__input"
            value={currencyType}
            onChange={(e) => setCurrencyType && setCurrencyType(e.target.value)}
          >
            {currencyOptions && currencyOptions.map((currency, index) => (
              <option key={index} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputButton;
