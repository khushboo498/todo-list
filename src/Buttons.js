import React from 'react'

 function Buttons(props) {
     const {text, className, onClick, value} = props;
    //  console.log(text);
  return (
    <div>
        <button className={className} onClick={onClick} value={value}>{text}</button>
    </div>
  )
}
export default Buttons
