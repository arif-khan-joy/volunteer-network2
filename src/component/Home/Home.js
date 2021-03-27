import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
// import fakeData from "../fakeData/fakeData";
// import Info from "../Info/Info";
import Volunteer from "../Volunteer/Volunteer";
const Home = () => {
  // const fakeInfo = fakeData;
  const [product, setProduct] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="row" style={{ margin: "0 20px" }}>
      {product.map((img) => (
        <Volunteer volunteer={img}></Volunteer>
      ))}
    </div>
  );
};

export default Home;
