import React from "react";
import { useState } from "react";

const App = () => {
  let [val, setValue] = useState(0);
  function DecreaseHandler(){
    return setValue(--val);
  }
  function IncreaseHandler(){
    return setValue(++val);
  }
  function ResetHandler(){
    return setValue(0);
  }
  return (
  <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
    <div className="text-[#0398d4] font-medium text-2xl">Increment & Decrement</div>
    <div className="flex bg-white justify-center gap-12 py-3 text-[25px] rounded-md text-[#344151]">
      <button className="w-20 border-r-2 text-center border-[#bfbfbf] text-5xl" onClick={DecreaseHandler}>
        -
      </button>
      <div className="text-5xl font-bold gap-12">
      {val}
      </div>
      <button className="w-20 border-l-2 text-center border-[#bfbfbf] text-5xl" onClick={IncreaseHandler}>
        +
      </button>
    </div>
    <button onClick={ResetHandler} className="bg-[#0398d4] px-5 py-2 text-white rounded-sm text-lg">
      Reset
    </button>
  </div>
  );
};

export default App;
