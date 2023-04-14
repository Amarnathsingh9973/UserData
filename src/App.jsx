import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import Createuser from "./components/Createuser";
import Homecrud from "./components/Homecrud";
import Editusers from "./components/Editusers";

const App = () => {
  return (
    <BrowserRouter>
      <Homecrud />
      <Routes>
        <Route path="/createuser" element={<Createuser />} />
        <Route path="/users" element={<Users />} />
        <Route path="/edit" element={<Editusers />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
