import {useState, useEffect} from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter(prev => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);

  useEffect(()=> {
    console.log("처음 렌더링 될 때 한번만 실행")
  }, []);

  useEffect(()=> {
    console.log("키워드 값이 변화될 때 마다 실행")
  }, [keyword]);

  useEffect(()=> {
    console.log("카운터 값이 변화될 때 마다 실행")
  }, [counter]);

  useEffect(()=> {
    console.log("카운터 값&키워드 값이 변화될 때 마다 실행")
  }, [keyword, counter]);

  return (
    <div className="App">
      <h1>{counter}</h1>
      <input 
        value={keyword}
        onChange={onChange}
        placeholder="seach keyword..."
      />
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
