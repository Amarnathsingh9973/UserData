import React, { useState } from "react";
import style from "./homecrud.module.css";

const Editusers = () => {
  let [name, setName] = useState();
  let [sal, setSal] = useState();
  let [company, setCompany] = useState();
  return (
    <div>
      <div>
        <section id={style.form}>
          <article>
            <h1>Edit User Detail</h1>
            <label htmlFor="">Name</label>
            <input type="text" value={name} />
            <br />
            <label htmlFor="">Salary</label>
            <input type="text" value={sal} />
            <br />
            <label htmlFor="">Company</label>
            <input type="text" value={company} />
            <br />
            <button>Submit</button>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Editusers;
