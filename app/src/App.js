import './App.css';


function App() {
  const Btn = ({text}) => {
    return <button style={{
      backgroundColor:"tomato",
      border:0,
      borderRadius:20,
      padding:"10px 20px",
      color:"white",
    }}>
      {text}
    </button>
  }
  return (
    <div className="App">
      <Btn text="Save Change" />
      <Btn text="Continue" />
    </div>
  );
}

export default App;
