import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';

import { Route, Routes, BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div className="app">
    <BrowserRouter> 
         <Routes>
          <Route path = "/" element={<Home/>}/>
          {/* <Route path = "/cheakout"><h1>Cheakout</h1></Route>
          <Route path = "/login"><h1>Login</h1></Route> */}
        </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
