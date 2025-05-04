import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
}) {
  const amountId = useId();

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 transition-all duration-300 hover:border-white/20">
      <div className="flex flex-col space-y-3">
        <label htmlFor={amountId} className="text-white/70 text-sm font-medium tracking-wider">
          {label}
        </label>
        
        <div className="flex items-center space-x-3">
          <input
            id={amountId}
            className="flex-1 bg-white/10 text-white placeholder-white/30 rounded-lg px-4 py-3.5 outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all text-lg font-medium"
            type="number"
            placeholder="0.00"
            disabled={amountDisabled}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
          />
          
          <select
            className="bg-white/10 text-white rounded-lg px-3 py-3.5 outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all cursor-pointer font-medium"
            value={selectedCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisabled}
          >
            {currencyOptions.map((currency) => (
              <option 
                key={currency} 
                value={currency}
                className="bg-blue-900 text-white"
              >
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputBox;