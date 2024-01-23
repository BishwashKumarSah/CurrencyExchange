import { useId } from "react";
function InputButton() {
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
          >
            <option value="">USD</option>
            <option value="">RS</option>
            <option value="">INR</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default InputButton;
