import React, { useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";
import ReactDOM from "react-dom";
import "react-simple-keyboard/build/css/index.css";
import "./Keyboard.css"

export default function Keyb() {
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();

  const onChange = input => {
    setInput(input);
    console.log("Input changed", input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = button => {
    console.log("Button pressed", button);

    
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = event => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };
  return (
  
    <div className="inp" >
      <input  
        value={input}
        placeholder={"Type Here.......! "}
        onChange={onChangeInput}
      />
      
      <Keyboard className="key1"
        keyboardRef={r => (keyboard.current = r)}
        layoutName={layout}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      
    </div>
    
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Keyb />, rootElement);