import React, { useState } from "react";
import Buttons from "./Buttons";
// import Input from "./Input";

function Items() {
  const [input, setInput] = useState([]);
  const [add, setAdd] = useState([]);
  const [index, setIndex] = useState([])

  const inputText = (e) => {
    // console.log(e.target.value);
    let value = e.target.value;
    setInput(value);
    // console.log(input);
  };
  const OnAdd = () => {
    // setAdd([input]);
    let data = input;
    add.push(data);
    setAdd([...add]);

    // add.pop(data(1));
    // console.log(add[data]);

    setIndex();
  };



  // const onEdit = (i) => {

  //   console.log(i);
  //   console.log("i am edit");
  // };
  const addClass = (e) =>{
    e.target.classList.toggle('cross')
    // console.log('im class')
  }
  const onDelete = (i) => {
    // console.log(i)
    const row = [...add]
    // console.log(row);
    row.splice(i, 1);
    // console.log(row)
    setAdd(row);
    // console.log("Hi, Im delete");
  };

  return (
    <>
      <div className="input_area">
        <input
          type="text"
          placeholder="To do..."
          id="todo_box"
          onChange={inputText}
        />
        <Buttons text="Add" className="addButton" onClick={OnAdd} />
      </div>
      <div className="addItems">
        <ul>
          {add.map((items, i) => {
            
            console.log(items);
            return (
              <li className="listItem" key={i} onClick={addClass}> 
                <div>{items}</div>
                <div className="actionButtons">
                  {/* <Buttons
                    text={<i className="fa-solid fa-pen"></i>}
                    onClick={()=> (onEdit(i))}
                    className="edit"
                  /> */}
                  <Buttons
                    text={<i className="fa-solid fa-trash-can"></i>}
                    onClick={() => (onDelete(i))}
                    className="delete"
                    value = {'hello delete'}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default Items;
