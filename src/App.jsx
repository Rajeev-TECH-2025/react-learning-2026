import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductList from "./components/ProductList";
import AboutUs from "./pages/AboutUs";
function App() {
//   const person = {
//     name: "Rajeev",
//     age: "40",
//     surname: "Sinha",
//     location: 'G. Noida"'
//   }
  
//   const getObjectEntries = (obj) => {
//     const objKeys = Object.keys(obj);
//     console.log(obj);
    
//     const result= objKeys.map(key => {
//       const value = objKeys;
//       return[key, value]
//     });
//     return result;
//   };
//   getObjectEntries(person);

// const res= getObjectEntries(person);
// console.log(res);


  const data="<h1>Some really Useful Links</h1>";



  return (
    <BrowserRouter>
    {/* <div dangerouslySetinnerHtml={{__html:data}} />; */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;