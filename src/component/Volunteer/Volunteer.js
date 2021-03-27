import React from "react";
import { Link } from "react-router-dom";

const Volunteer = ({ volunteer }) => {
  console.log(volunteer);
  return (
    <div className="col-md-3" style={{ margin: "center" }}>
      <Link to={`/info/${volunteer._id}?${volunteer.name}`}>
        <img
          className=" mx-auto d-block"
          style={{
            height: "300px",
            width: "260px",
            textAlign: "center",
          }}
          src={volunteer.pic}
          alt=""
        />
        <h4
          style={{
            textAlign: "center",
            backgroundColor: "skyblue",
            padding: "10px",
            borderRadius: "10px",
            marginLeft: "6px",
            marginRight: "6px",
            marginBottom: "30px",
          }}
        >
          {volunteer.name}
        </h4>
      </Link>
    </div>
  );
};

export default Volunteer;
