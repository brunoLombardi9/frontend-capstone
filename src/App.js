import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Menu from "./views/Menu";
import Reservations from "./views/Reservations";
import OrderOnline from "./views/OrderOnline";
import Login from "./views/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const routes = [
  { name: "Home", link: "/", component: Home },
  { name: "About", link: "/about", component: About },
  { name: "Menu", link: "/menu", component: Menu },
  { name: "Reservations", link: "/reservations", component: Reservations },
  { name: "Order Online", link: "/orderOnline", component: OrderOnline },
  { name: "Login", link: "/login", component: Login },
];

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          {routes.map((r, index) => (
            <Route key={index} path={r.link} Component={r.component} />
          ))}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
