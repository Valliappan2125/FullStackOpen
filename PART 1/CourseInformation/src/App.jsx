import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Total from "./components/Total";
import Display from "./components/Display";
import Button from "./components/Button";
import History from "./components/History";


const DisplayValue = ({value}) => <div>{value}</div>

function App() {
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);
  // setTimeout(() => {
  //   setCounter(counter + 1);
  // }, 1000);

  const increment = () => {
    console.log("increasing, value before", counter);
    setCounter(counter + 1);
  };

  const decrement = () => {
    console.log("decreasing, value before", counter);
    setCounter(counter - 1);
  };

  const resetCounter = () => {
    console.log("resetting to zero, value before", counter);
    setCounter(0);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}`);
  };

  const name = "Karthik";
  const age = 22;
  const course = {
    name: "Full Stack Open",
    parts: [
      {
        name: "Introduction to React",
        exercises: 7,
      },
      {
        name: "Javascript Fundamentals",
        exercises: 18,
      },
      {
        name: "Fundamentals of Web Apps",
        exercises: 21,
      },
    ],
  };

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);
    console.log(left);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(left + updatedRight);
    console.log(right);
  };

  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    console.log("Value now", newValue);
    setValue(newValue);
  }
  return (
    <div>
      {/* <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Hello name="Muthu" age={26 + 10} />
      <Hello name={name} age={age} /> */}
      {/* <div>{counter}</div> */}
      <Display counter={counter} />
      {/* <button onClick={decrement} style={{marginRight: "5px"}}>-</button>
      <button onClick={resetCounter}>Reset Counter</button>
      <button onClick={increment} style={{marginLeft: "5px"}}>+</button> */}
      <Button onClick={decrement} text={"-"} />
      <Button onClick={resetCounter} text={"Reset Counter"} />
      <Button onClick={increment} text={"+"} />
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          value={formData.name}
          name="name"
          onChange={handleChange}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {left}
        <button onClick={handleLeftClick} text="left">left</button>
        <button onClick={handleRightClick} text="right">right</button>
        {right}
        {/* <p>{allClicks.join("")}</p> */}
        <History allClicks={allClicks}/>
        <p>Total: {total}</p>
      </div>
      <div>
        <DisplayValue value={value}/>
        <Button onClick={() => setToValue(1000)} text="Thousand"/>
        <Button onClick={() => setToValue(0)} text="Reset"/>
        <Button onClick={() => setToValue(value + 1)} text="Increment"/>
      </div>
    </div>
  );
}

export default App;
