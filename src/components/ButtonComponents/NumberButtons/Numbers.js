// Add , { useState } to existing React import code 

import React, { useState } from "react";

//import any components needed (from NumberButton.js)

import NumberButton from "./NumberButton."

//Import your array data to from the provided data file (from data.js exports)

import { numbers } from '../../../data'

const Numbers = () => {
  // STEP 2 - add the imported data to state

 
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
