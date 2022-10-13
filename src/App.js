import "./App.css";

import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.components";
import ShopPage from "./pages/shop/shop.components";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
