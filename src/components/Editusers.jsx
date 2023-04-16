import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import style from "./homecrud.module.css";

import axios from "axios";

const Editusers = () => {
  let [name, setName] = useState();
  let [sal, setSal] = useState();
  let [company, setCompany] = useState();
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${index}`).then((response) => {
      setCompany(response.data.company);
      setName(response.data.name);
      setSal(response.data.sal);
    });
  }, []);
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
    axios
      .put(`http://localhost:3000/users/${index}`, payload)
      .then(() => {
        console.log("data has been updated");
      })
      .catch(() => {
        console.log("somenthing went wrong");
      });
    navigate("/users");
  };
  return (
    <div>
      <div>
        <section id={style.form}>
          <article>
            <h1>Edit User Detail</h1>
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
    </div>
  );
};

export default Editusers;
