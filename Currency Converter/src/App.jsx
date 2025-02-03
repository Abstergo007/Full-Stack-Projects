import React, { useState, useEffect } from 'react'
import './App.css'
import InputBox from './inputBox';

function App() {
  const [amount, setAmount] = useState(0)
  const [from , setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [currencies, setCurrencies] = useState()
  const currencyOption = ['inr','usd','pkr']
  const onAmountChange = (amount) => {
    console.log(`Amount is changed to ${amount}`)
  }
  const onCurrencyChange = (currency) => {
    console.log(`Currency is changed to ${currency}`)
  }

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`)
    .then(response => response.json())
    .then((data) => {
      setCurrencies(data)
    })
    .catch((error) => {
      console.log(`Fetching currencies from URL failed with the error: ${error}`);
    })
  }, [])
  
  
  return (
    <div className="w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('Images/bg-image.jpg')`,
        }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form onSubmit={(e) => { 
              e.preventDefault();
             }} >
              <div className="w-full mb-1">
                <InputBox label="From"
                  amount = {amount}
                  onAmountChange={onAmountChange(amount)}
                  onCurrencyChange={onCurrencyChange(from)}
                  currencyOption={currencyOption} />
              </div>
              <div className="relative w-full h-0.5">
                <button type="button" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" >
                swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox label="To"
                amount = {amount}
                onAmountChange={onAmountChange(amount)}
                onCurrencyChange={onCurrencyChange(from)}
                currencyOption={currencyOption} />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert 
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

export default App
