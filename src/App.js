import React from "react";

//css imports
import "./App.css";

//Router import
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages imports
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/hotels" element={<List></List>}></Route>
        <Route path="/hotels/:id" element={<Hotel></Hotel>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
