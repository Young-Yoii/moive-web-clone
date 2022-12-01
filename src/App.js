import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Genre from './routes/Genre';
import './App.css';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/page/:detail" element={<Genre />} />
      <Route path="/movie/:id" element={<Detail />} />
      <Route path={`${process.env.PUBLIC_URL}/`} element={< Home />} />
    </Routes>
  </BrowserRouter>
}

export default App;
