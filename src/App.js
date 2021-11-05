import logo from './logo.svg';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import './App.css';
import LoginPage from "./component/login/LoginPage";
import RegisterPage from './component/register/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}

      <Routes>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
