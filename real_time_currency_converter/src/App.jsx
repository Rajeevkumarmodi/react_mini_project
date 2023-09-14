import React, { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./custom_hook/useCurrencyInfo";

function App() {
  const [currencyData, setCurrencyData] = useState({});
  const currencyInfo = useCurrencyInfo("inr");
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  function swap() {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }
  return (
    <>
      <div className=" bg-[url('./assets/currency_background_image.jpg')] bg-cover bg-center w-full h-[100vh] flex justify-center items-center">
        <div className=" flex flex-col gap-5 items-center relative bg-slate-300 p-5 rounded-xl drop-shadow-2xl">
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
          />
          <button
            onClick={swap}
            className=" p-1 text-white bg-blue-600 w-[100px] rounded-lg absolute top-[100px]"
          >
            Swap
          </button>
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
          />
          <button
            onClick={convert}
            className=" p-2 bg-blue-700 text-white rounded-lg cursor-pointer"
          >
            {`Convert ${from} to ${to}`}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
