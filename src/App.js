
import './App.css';
import MuiSlider from './components/MuiSlider';
import Slider from '@mui/material/Slider';
import PieeChart from './components/PieeChart';
import Tenure from './components/Tenure';
import { useState } from 'react'
import Navbar from './components/Navbar';


function App() {

  // Define state variables for each slider value
  const [homeValue, setHomeValue] = useState(3000);
  const [downPayment, setDownPayment] = useState(600);
  const [loanAmount, setLoanAmount] = useState(2400);
  const [interestRate, setInterestRate] = useState(5);

  // Callback functions to update the state variables
  const handleHomeValueChange = (newValue) => {
    setHomeValue(newValue);
  };

  const handleDownPaymentChange = (newValue) => {
    setDownPayment(newValue);
  };

  const handleLoanAmountChange = (newValue) => {
    setLoanAmount(newValue);
  };

  const handleInterestRateChange = (newValue) => {
    setInterestRate(newValue);
  };

  // console.log(homeValue, downPayment, loanAmount, interestRate)
  return (
    <>
    <Navbar />
    <div className="App">
      
     <div className='slider-cotainer'>
      
     <MuiSlider title="Home Value" def={3000} min={1000} max={10000} onValueChange={handleHomeValueChange} />

     <MuiSlider title="Down Payment" def={600} min={0} max={3000} onValueChange={handleDownPaymentChange} />
     <MuiSlider title="Loan Amount" def={2400} min={0} max={3000} onValueChange={handleLoanAmountChange} />
     <MuiSlider title="Interest Rate" def={5} min={2} max={18} onValueChange={handleInterestRateChange} />

     
     <div style={{ marginTop: '20px', width:'100%' }}>
     <Tenure />
     
     </div>
     
     
      </div>
      <div className='chart-container'>
      <PieeChart homeValue={homeValue}
          downPayment={downPayment}
          loanAmount={loanAmount}
          interestRate={interestRate}/>
      </div>
    </div>
    </>
    
  );
}

export default App;
