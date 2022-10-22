import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages";

const App = () => {
  return (
    <main className="container" role="main">
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </main>
  );
};

export default App;
