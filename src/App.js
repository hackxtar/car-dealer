import React from "react";
import Home from "./pages/home/Home";
import Navbar from "./pages/shared/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
