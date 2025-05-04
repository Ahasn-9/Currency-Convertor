import { useState, useEffect } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState('54');
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('aoa');
  const [convertedAmount, setConvertedAmount] = useState('49635.53');
  const [isConverting, setIsConverting] = useState(false);
  const [particles, setParticles] = useState([]);

  const { data: currencyInfo, loading, error } = useCurrencyInfo(from);

  // Create floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 5 + 3,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10
    }));
    setParticles(newParticles);
  }, []);

  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (!amount) return;
    
    setIsConverting(true);
    setTimeout(() => {
      if (currencyInfo && currencyInfo[to]) {
        setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
      }
      setIsConverting(false);
    }, 800);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-900 to-blue-900">
        <div className="space-y-4 text-center">
          <div className="w-16 h-16 mx-auto border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"></div>
          <p className="text-cyan-100/80 font-light tracking-wider">LOADING LIVE RATES...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 to-blue-900 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white/10 backdrop-blur-sm"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite alternate`
          }}
        ></div>
      ))}

      <div className="relative w-full max-w-md z-10">
        {/* Main card */}
        <div className={`relative backdrop-blur-xl bg-white/5 rounded-3xl shadow-2xl overflow-hidden border border-white/10 transition-all duration-700 ${isConverting ? 'scale-95' : 'scale-100'}`}>
          {/* Glowing animated header */}
          <div className="h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse"></div>
          
          <div className="p-8">
            {/* Enhanced Title Section */}
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200 mb-2">
                CURRENCY CONVERTER
              </h1>
              <div className="w-24 h-1 mx-auto bg-cyan-400/50 rounded-full animate-pulse"></div>
            </div>
            
            <form onSubmit={(e) => { e.preventDefault(); convert(); }}>
              <div className="space-y-6">
                <InputBox
                  label="Amount to convert"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectedCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
                
                {/* Animated swap button */}
                <div className="flex justify-center relative">
                  <div className="absolute h-px w-full bg-white/10 top-1/2"></div>
                  <button
                    type="button"
                    className="relative z-10 flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-cyan-400/30 active:scale-95 group"
                    onClick={swap}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white transform group-hover:rotate-180 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <span className="sr-only">Swap currencies</span>
                  </button>
                </div>
                
                <InputBox
                  label="Converted amount"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectedCurrency={to}
                  amountDisabled={true}
                />
              </div>
              
              <button 
                type="submit" 
                disabled={!amount}
                className={`mt-8 w-full py-4 px-6 font-medium rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center space-x-2 ${
                  amount 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-cyan-400/30'
                    : 'bg-white/10 text-white/30 cursor-not-allowed'
                }`}
              >
                <span>Convert {from.toUpperCase()} → {to.toUpperCase()}</span>
                {isConverting && (
                  <svg className="w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
        
        {/* Exchange rate info */}
        {convertedAmount > 0 && (
          <div className="mt-6 text-center text-white/60 text-sm animate-fade-in">
            <p>1 {from.toUpperCase()} = {(currencyInfo[to]).toFixed(6)} {to.toUpperCase()}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;