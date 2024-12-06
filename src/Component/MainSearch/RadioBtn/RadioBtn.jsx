import "./RadioBtn.css";
//import { useState } from "react";

function RadioBtn() {
  // const [value, setValue] = useState("1");

  // function chengeValue(event) {
  //   setValue(event.target.value);
  // }
  return (
    <div className="classRadio">
      <input
        id="any"
        type="radio"
        name="age"
        defaultChecked
        value="1"
        // onChange={chengeValue}
        data-age={"1-90"}
      />
      <label htmlFor="any">Любой</label>
      <input
        id="to25"
        type="radio"
        name="age"
        // checked={value === "2"}
        value="2"
        // onChange={chengeValue}
        data-age={"1-25"}
      />
      <label htmlFor="to25">До 25 лет</label>
      <input
        id="between26and35"
        type="radio"
        name="age"
        // checked={value === "3"}
        value="3"
        // onChange={chengeValue}
        data-age={"26-35"}
      />
      <label htmlFor="between26and35">От 26 до 35 лет</label>
      <input
        id="from36"
        type="radio"
        name="age"
        // checked={value === "4"}
        value="4"
        // onChange={chengeValue}
        data-age={"36-90"}
      />
      <label htmlFor="from36">От 36 лет</label>
    </div>
  );
}

export default RadioBtn;
