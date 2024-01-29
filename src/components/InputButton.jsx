import { useId } from "react";
function InputButton({
  setCurrencyType,
  currencyType = "usd",
  currencyOptions = [],
  originalAmount,
  onOriginalAmountChange,
}) {
  const amountInputId = useId();
  return (
    <>
      <div className={` input__container`}>
        <div className="input__value">
          <label htmlFor={amountInputId}>Label change</label>
          <input
          id={amountInputId}
            type="number"
            min={0}            
            className="label__input"
            value={originalAmount}
            onChange={(e) => onOriginalAmountChange && onOriginalAmountChange(Number(e.target.value))}
          />
        </div>

        <div className="input__dropdown">
          <p className="currency__p">Currency Type</p>
          <select
            name="currencyOptions"            
            className="label__input select__input"
            value={currencyType}
            onChange={(e) => setCurrencyType && setCurrencyType(e.target.value)}
          >
            {currencyOptions &&
              currencyOptions.map((currency, index) => (
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
