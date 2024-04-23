import React from 'react'
import { PieChart } from '@mui/x-charts'

function PieeChart({
    homeValue, downPayment, loanAmount, interestRate
}) {

  

    console.log(homeValue)
  return (
    <>
    <h5 style={{marginLeft:'70px'}}>Monthly Payment: $ 45.29</h5>
    <PieChart
    colors={['#ff99c2', '#809fff', '#47d147', '#ffff66']}
  series={[

    {
      data: [
        { id: 0, value: homeValue, label: 'HomeValue' },
        { id: 1, value: downPayment, label: 'DownPayment' },
        { id: 2, value: loanAmount, label: 'LoanAmount' },
        { id: 3, value: (interestRate/100)*loanAmount, label: 'interestRate' }
      ],
    }, 
  ]}
  width={400}
  height={200}
/>
    </>
  )
}

export default PieeChart