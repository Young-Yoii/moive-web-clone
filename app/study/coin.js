import {useEffect, useState} from "react";


function App() {
  const [loding, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then(response => response.json())
      .then(json => {setCoins(json.slice(0,100)); setLoding(false);});
  }, [])

  const onChange = (event) => {
    setMoney(event.target.value);
  }

  const onSelect = (event) => {
    setIndex(event.target.value);
  }

  return (
    <div className="App">
      <h1>The Coins {loding ? null : `(${coins.length})`}</h1>
      {loding ? "Loding..." : <>
      <select value={index} onChange={onSelect}>
        {coins.map(coin => <option key={coin._id} value={coin.quotes.USD.ath_price}>{coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD</option>)}
      </select>
      <input placeholder="your money" value={money} onChange={onChange}/>
      <h1>{money} 달러로 {money * index} 개로 바꿀 수 있습니다.</h1>
      </>}
    </div>
  );
}

export default App;
