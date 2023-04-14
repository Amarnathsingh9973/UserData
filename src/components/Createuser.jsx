import { useState } from "react";
import axios from "axios";
import style from "./homecrud.module.css";
import { useNavigate } from "react-router-dom";
const Createuser = () => {
  let [name, setName] = useState("");
  let [sal, setSal] = useState("");
  let [company, setCompany] = useState("");
  let navigate = useNavigate();

  let nameData = (e) => {
    setName(e.target.value);
  };
  let salData = (e) => {
    setSal(e.target.value);
  };
  let companyData = (e) => {
    setCompany(e.target.value);
  };

  let formHandler = () => {
    const payload = { name, sal, company };
    axios.post("http://localhost:3000/users", payload);
    navigate("/users");
  };
  return (
    <div>
      <section id={style.form}>
        <article>
          <label htmlFor="">Name</label>
          <input type="text" value={name} onChange={nameData} />
          <br />
          <label htmlFor="">Salary</label>
          <input type="text" value={sal} onChange={salData} />
          <br />
          <label htmlFor="">Company</label>
          <input type="text" value={company} onChange={companyData} />
          <br />
          <button onClick={formHandler}>Submit</button>
        </article>
      </section>
    </div>
  );
};

export default Createuser;
