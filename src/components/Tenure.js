import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
// import { selectChangeEvent} from '@mui/material/Select'
import React, { useState } from 'react'

function Tenure() {

    const [period, setPeriod] = useState(20);

    const handleChange = (event) => {
        setPeriod(event.target.value);
      };

    //   console.log(period)

  return (
    <>
    
    <FormControl fullWidth>
        
        <InputLabel>Tenure</InputLabel>
        <Select label="Tenure" value={period} onChange={handleChange}>
            <MenuItem value={5}>5 Years</MenuItem>
            <MenuItem value={10}>10 Years</MenuItem>
            <MenuItem value={15}>15 Years</MenuItem>
            <MenuItem value={20}>20 Years</MenuItem>
            <MenuItem value={25}>25 Years</MenuItem>
        </Select>
    </FormControl>
    </>
  )
}

export default Tenure