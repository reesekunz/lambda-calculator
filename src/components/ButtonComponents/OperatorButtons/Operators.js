// Add , { useState } to existing React import code

import React, { useState } from "react";

//import any components needed (from OperatorButton.js)

import OperatorButton from "./OperatorButton";

//Import your array data to from the provided data file (from data.js exports)

import { operators } from "../../../data";

const Operators = () => {
  // STEP 2 - add the imported data to state
  //make sure whatever is inside useState() is consistent with array data imported above

  const [operatorsState, setOperatorsState] = useState(operators);

  return (
    <div>
      {operatorsState.map((operator, index) => (
        <OperatorButton
          operators={operator.char}
          value={operator.value}
          key={index}
        />
      ))}
    </div>
  );
};

export default Operators;
