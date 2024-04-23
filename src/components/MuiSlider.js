import { Slider } from '@mui/material';
import React, { useState } from 'react';
import './MuiSlider.css';

function MuiSlider(props) {
  const [value, setValue] = useState(props.def);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.onValueChange(newValue); // Call the callback function to update parent state
  };

  return (
    <div className='wrapper'>
      <h3>{props.title}</h3>
      <span>{props.title === "Interest Rate" ? `${value}%` : `$ ${value}`}</span>
      <Slider
        aria-label={props.title}
        defaultValue={props.def}
        onChange={handleChange}
        value={value}
        step={props.title === "Interest Rate" ? 1 : 100}
        marks
        min={props.min}
        max={props.max}
        valueLabelDisplay="auto"
      />
      <div className='min-max'>
        <span>{props.title === "Interest Rate" ? `${props.min}%` : `$ ${props.min}`}</span>
        <span>{props.title === "Interest Rate" ? `${props.max}%` : `$ ${props.max}`}</span>
      </div>
    </div>
  );
}

export default MuiSlider;
