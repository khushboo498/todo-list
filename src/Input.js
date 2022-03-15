import React, { useState } from "react";
import Buttons from "./Buttons";
function Input() {
//   const [input, setInput] = useState([]);
//   const [add, setAdd] = useState([]);
//   const inputText = (e) => {
//     // console.log(e.target.value);
//     let value = e.target.value
//     setInput(value);
//     console.log(input);
//   };
//   const OnAdd = () => {
//     setAdd([input]);
//     console.log(add);
//   };
  return (
    <div className="input_area">
        {/* <input
        type="text"
        placeholder="To do..."
        id="todo_box"
        onChange={inputText}
      />
      <Buttons text="Add" className="addButton" onClick={OnAdd} /> */}
    </div>
  );
}
export default Input;
