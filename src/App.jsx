import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ListItems from "./components/ListItems";
import items from "./data";
import "./index.css";

function App() {
  const [fruits, setFruits] = useState(items);
  const [cart, setCart] = useState([]);

  // add a new fruit to the list
  const handleAdd = () => {
    const newFruits = [
      ...fruits,
      {
        id: 7,
        name: "Banana",
        price: 0.59,
        image:
          "https://th.bing.com/th/id/R.217282a45f821bc8c64a639d52860a21?rik=9FXpCFKR2UpSUQ&pid=ImgRaw&r=0",
        quantity: 1,
      },
      {
        id: 8,
        name: "Kiwi",
        price: 2.59,
        image:
          "https://th.bing.com/th/id/R.e076f3c8989b9135d99c2955871a13f4?rik=IMV%2bhnm4IauUlg&pid=ImgRaw&r=0",
        quantity: 1,
      },
    ];
    setFruits(newFruits);
  };

  const editFruit = (id) => {
    const updatedFruits = fruits.map((fruit) => {
      if (fruit.id === id) {
        return {
          ...fruit,
          id: Date.now(),
          name: "Durian",
          image:
            "https://th.bing.com/th/id/R.4351a7e8db3705599b50fc129c332499?rik=VZYyDOdY4RpwSw&pid=ImgRaw&r=0",
          price: 3.99,
          quantity: 1,
        };
      }
      return fruit;
    });
    setFruits(updatedFruits);
  };

  // want to remove the first fruit from the list with splice method which mutates the array
  const removeFruit = (id) => {
    const updatedList = fruits.filter((f) => f.id !== id);
    setFruits(updatedList);
  };

  const totalPrice = fruits.reduceRight(function (accumulator, currentValue) {
    return accumulator + currentValue.price;
  }, 0);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
  };

  return (
    <>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/list"
          element={
            <ListItems
              items={fruits}
              handleAdd={handleAdd}
              editFruit={editFruit}
              removeFruit={removeFruit}
              totalPrice={totalPrice}
              addToCart={addToCart}
            />
          }
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
