import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Menu from "./views/Menu";
import Reservations from "./views/Reservations";
import OrderOnline from "./views/OrderOnline";
import Login from "./views/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/menu" Component={Menu} />
        <Route path="/reservations" Component={Reservations} />
        <Route path="/orderOnline" Component={OrderOnline} />
        <Route path="/login" Component={Login} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
