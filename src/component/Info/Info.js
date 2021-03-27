import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import "./Info.css";
const Info = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/register/" + id)
      .then((res) => res.json())
      .then((data) => setData(data[0]));
  }, []);
  console.log(data);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const onSubmit = (detail) => {
    detail.preventDefault();

    const volunteerTouch = {
      ...loggedInUser,
      detail: data,
      time: new Date(),
    };
    fetch("http://localhost:5000/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(volunteerTouch),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);
          alert("Your order successfully");
        }
      });
    history.push("/donation");
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <form action="" className="form" onSubmit={onSubmit}>
        <h3>Register as Volunteer</h3>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          defaultValue={loggedInUser.name}
        />
        <br />
        <input
          type="email"
          placeholder="E-mail"
          defaultValue={loggedInUser.email}
        />
        <br />
        <input type="date" placeholder="Date" />
        <br />
        <input type="text" placeholder="Description" />
        <br />
        <input
          value={data.name}
          type="text"
          placeholder="Organize books at the libery"
        />
        <br />
        <input
          style={{ backgroundColor: "skyblue" }}
          type="submit"
          value="Registration"
        />
      </form>
    </div>
  );
};

export default Info;
