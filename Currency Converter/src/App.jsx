import React, { useState } from 'react'
import './App.css'
import InputBox from './inputBox';
import userCurrencyInfo from './hooks/userCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0)
  const [from , setFrom] = useState("usd")
  const [to, setTo] = useState("usd")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const userCurrencyInformation = userCurrencyInfo(from)
  const onAmountChange = (temp) => {
    setAmount(temp)
  } 
  const onCurrencyChange = (currency, label) => {
    if(label == 'From') {
      setFrom(currency)
    } else {
      setTo(currency)
    }
  }
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = () => {
    setConvertedAmount(amount * userCurrencyInformation[to])
  }
  
  return (
    <div className="w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('Images/bg-image.jpg')`,
        }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-80 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form onSubmit={(e) => { 
              e.preventDefault();
             }}>
              <div className="w-full mb-1">
                <InputBox label="From"
                  amount = {amount}
                  onAmountChange={onAmountChange}
                  onCurrencyChange={onCurrencyChange}
                  selectCurrency = {from}
                  currencyOption={Object.keys(userCurrencyInformation)} />
              </div>
              <div className="relative w-full h-0.5">
                <button type="button" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" onClick={swap}>
                swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox label="To"
                amount = {convertedAmount}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={onCurrencyChange}
                selectCurrency = {to}
                amountDisable={true}
                currencyOption={Object.keys(userCurrencyInfo(to))} />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert}>
                Convert 
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

export default App
