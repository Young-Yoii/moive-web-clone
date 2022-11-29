import {useState, useEffect} from "react";

const Hello = () => {
   /* function byFn() {
    console.log("bye :(");
  }

  function hiFn() {
    console.log("hi :)");
    return byFn;
  }

  useEffect(hiFn, [])
  */

  useEffect(()=> {
    console.log("hi:)")
    return () => console.log("bye:(")
  }, []);

    return <h1>Hello</h1>
}

function App() {
  const [show, setShow] = useState(false);
  const onClick = () => setShow(current => !current);

  return (
    <div className="App">
      {show ? <Hello /> : null}
      <button onClick={onClick}>{show ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
