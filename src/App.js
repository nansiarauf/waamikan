import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Customers from "./components/Customers";

function App() {
  return (
    <>
    <NavBar/>
    <Products/>
    <About/>
    <Contact/>
    <Customers/>
    <Footer/>
    </>
  );
}

export default App;
