// Add , { useState } to existing React import code 

import React, { useState } from "react";

//import any components needed (from SpecialButton.js)

import SpecialButton from "./SpecialButton."

//Import your array data to from the provided data file (from data.js exports)

import { specials } from '../../../data'

const Specials = () => {
  // STEP 2 - add the imported data to state
   //make sure whatever is inside useState() is consistent with array data imported above 

  const [specials, setSpecials] = useState(specials);


  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
