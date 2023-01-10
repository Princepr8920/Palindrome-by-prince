import React, { useState } from "react";
import "./palindrome.scss";

export default function Palindrome() {
  const [value, setValue] = useState({
    input: "",
    result: "",
    error: "",
    color: "white",
  });

  const palindrome = (str) => {
    const newStr = str.trim()
    let lower = newStr.toLowerCase().split("");
    let finalArr = [];
   
    let i = 0;

    if (!newStr.length) {
      setValue((other) => ({
        ...other,
        error: "Please enter input",
      }));
    } else {
      while (newStr.length > i) {
        let reg = /\w+/gi;
        let test = reg.test(lower[i]);
        if (test) {
          finalArr.push(lower[i]);
        }
        i++;
      } 

      for (let i = 0; i < newStr.length; i++) {
        if (finalArr[0] === finalArr[finalArr.length - 1]) {
          finalArr.splice(0, 1) && finalArr.splice(finalArr.length - 1, 1);
        }

        if (finalArr.length <= 0) {
          setValue((other) => ({
            ...other,
            result: "It's a palindrome.",
            error: "",
            color: "#a8e6ce",
          }));
        } else {
          setValue((other) => ({
            ...other,
            result: `[${finalArr.join("")}] → That's not a palindrome.`,
            error: "",
            color: "#ffcc66",
          }));
        }
      }
    }
  };
 

  return (
    <div className="container">
      <h1>Palindrome Checker</h1>
      <div className="palindrome">
        <input
          type="text"
          name="checker"
          style={{ background: value.color }}
          id="checker"
          placeholder="Enter input"
          value={value.input}
          onChange={(e) =>
            setValue((other) => ({
              ...other,
              input: e.target.value,
              error: "",
              result: "",
            }))
          }
        />
        <div id="error"> 
        <span >{value.error}</span></div>
        <div className="row">
          <button onClick={() => palindrome(value.input)}>
            Check
          </button>

          <button
            onClick={() =>
              setValue((other) => ({
                ...other,
                input: "",
                result: "",
                error: "",
                color: "white",
              }))
            }
            type="reset"
            id="reset" 
          >
            Reset
          </button>
        </div>
        <input
          type="text"
          id="output"
          style={{ background: value.color }}
          placeholder="Results shown here"
          readOnly
          value={value.result}
        />
      </div>
    </div>
  );
}
