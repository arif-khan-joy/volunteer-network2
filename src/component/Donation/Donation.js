import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import fakeData from "../fakeData/fakeData";
const Donation = () => {
  const [dell, setDell] = useState(false);
  const [donation, setDonation] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:5000/singleData?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setDonation(data));
  }, [dell]);
  console.log(donation);
  const deleteProduct = (id, event) => {
    console.log(id);
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    }).then((result) => {
      setDell(!dell);
      if (result) {
        // event.target.parentNode.style.display=none;
      }
    });
  };
  return (
    <div className="row">
      {donation.map((pd) => (
        <div className="col-md-6 alignMent-center">
          <div>
            <h4>{pd.detail.name}</h4>
            <img style={{ width: "300px" }} src={pd.detail.pic} alt="" />
            <h3>{pd.time}</h3>
            <button onClick={(event) => deleteProduct(pd._id, event)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Donation;
