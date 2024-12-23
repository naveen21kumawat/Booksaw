import "./App.css";
import Artical from "./Components/Artical";
import ClientHolder from "./Components/ClientHolder";
import FeaturedBooks from "./Components/FeaturedBooks";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PopularBooks from "./Components/PopularBooks";
import Section1 from "./Components/Section1";
import BookDetailsPage from "./Components/BookDetailsPage";
import { useState } from "react";
import Cart from "./Cart";

function App() {
  const MultiComponentPage = () => (
    <div>
      <Header />
      <Section1 />
      <ClientHolder />
      <FeaturedBooks handleOnCart={handleOnCart} />
      <Artical />
      <PopularBooks  handleOnCart={handleOnCart}/>
      <Footer />
    </div>
  );
  const [cartItem, setCartItem] = useState([
   
  ]);


  const handleOnCart = (book) => {
    setCartItem([...cartItem, book]);
  };
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MultiComponentPage />} />
          <Route path="/book-details" element={<BookDetailsPage />} />
          <Route path="/cart" element={<Cart cartItem={cartItem}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
