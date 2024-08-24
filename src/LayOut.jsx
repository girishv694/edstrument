import React from "react";
import { Route, Routes } from "react-router-dom";
import One from "./pages/One";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Two from "./pages/Two";
import Three from "./pages/Three";
import Footer from "./components/Footer";

const LayOut = () => {
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Routes>
          <Route path="/one" element={<One />} />
          <Route path="/two" element={<Two />} />
          <Route path="/three" element={<Three />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default LayOut;
