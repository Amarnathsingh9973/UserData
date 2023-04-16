import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import style from "./homecrud.module.css";
import { Link } from "react-router-dom";

const Users = () => {
  let [content, setContent] = useState([]);
  let deleteData = (value) => {
    axios.delete(`http://localhost:3000/users/${value}`);
    window.location.assign("/users");
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        setContent(response.data);
      })
      .catch(() => {
        console.log("data not found");
      });
  }, []);
  return (
    // <div id={style.userHome}>
    //   {content.map((x) => {
    //     return (
    //       <div className={style.card}>
    //         <div className={style.singleCard}>
    //           <h1>Id: {x.id ? x.id : "null"}</h1>
    //           <h1>Name: {x.name}</h1>
    //           <h1>Salary: {x.sal ? x.sal : "null"}</h1>
    //           <h1>Company: {x.company ? x.company : "null"}</h1>
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>
    <div id={style.userHome}>
      {content.map((x) => {
        return (
          <div id={style.cards}>
            <table>
              <tr>
                <th colSpan="2">User {x.id}</th>
              </tr>
              <tr>
                <td>Name</td>
                <td>:{x.name}</td>
              </tr>
              <tr>
                <td>Salary</td>
                <td>:{x.sal ? x.sal : "null"}</td>
              </tr>
              <tr>
                <td>Company</td>
                <td>:{x.company ? x.company : "null"}</td>
              </tr>
              <tr>
                <td>
                  <Link to={`/edit/${x.id}`}>Edit</Link>
                </td>
                <td>
                  <button onClick={()=>{deleteData(x.id)}}>Delete</button>
                </td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
