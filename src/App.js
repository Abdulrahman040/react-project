import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Details from "./components/Detials";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<ProductList></ProductList>}></Route>
        <Route path="/detils/:id" element={<Details />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
