import React from "react";
import style from "./homecrud.module.css";
import { Link } from "react-router-dom";

const Homecrud = () => {
  return (
    <section id={style.nav}>
      <Link to="/createuser">Create User</Link>
      <Link to="/users">User</Link>
    </section>
  );
};

export default Homecrud;
