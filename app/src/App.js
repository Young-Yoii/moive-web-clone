import './App.css';
import React, {useState} from 'react'


const MinToHours = () => {
  const [amount , setAmount] = useState(0);
  const [invert, setInvert] = useState(false)
  const onChange = (event) => {
    setAmount(event.target.value);
  }
  const reset = () => {setAmount(0)}
  const onInvert = () => {
    reset()
    setInvert((current) => !current)
  }
  return <div>
    <label htmlFor="minutes">Minutes</label>
    <input id="minutes" onChange={onChange} value={invert ? amount * 60 : amount} placeholder={"Minutes"} disabled={invert}/>
    <label htmlFor="hours">Hours</label>
    <input id="hours" onChange={onChange} value={invert ? amount : Math.round(amount / 60)} placeholder={"Hours"} disabled={!invert}/>
    <button onClick={onInvert}>invert</button>
  </div>
}

const KmToMile = () => {
  const [amount , setAmount] = useState(0);
  const [invert, setInvert] = useState(false)
  const onChange = (event) => {
    setAmount(event.target.value);
  }
  const reset = () => {setAmount(0)}
  const onInvert = () => {
    reset()
    setInvert((current) => !current)
  }
  return <div>
    <label htmlFor="Km">Km</label>
    <input id="Km" onChange={onChange} value={invert ?  amount * 1.609 : amount} placeholder={"Km"} disabled={invert}/>
    <label htmlFor="Miles">Miles</label>
    <input id="Miles" onChange={onChange} value={invert ? amount : Math.round(amount / 1.609)} placeholder={"Miles"} disabled={!invert}/>
    <button onClick={onInvert}>invert</button>
  </div>
}

function App() {
  const [index, setIndex] = useState("0");
  const onSelect = (event) => {
    setIndex(event.target.value)
  }
  return (
    <div className="App">
      <h1>super convert</h1>
      <select value={index} onChange={onSelect}>
        <option value={"0"}>MinToHours</option>
        <option value={"1"}>KM to Miles</option>
      </select>
      {index === "0" ? <MinToHours /> : null}
      {index === "1" ? <KmToMile /> : null}
    </div>
  );
}

export default App;
