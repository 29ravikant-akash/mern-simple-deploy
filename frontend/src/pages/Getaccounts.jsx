import React, { useState ,useEffect } from "react";
import axios from "axios";
const apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://simplemerndeploy.herokuapp.com"
    : "http://localhost:5000";

const Getaccounts = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
    .get(apiUrl+"/user/getaccinfo")
    .then((res) => {
      // console.log(res.data.user);
      setdata(res.data.user);
    })
    .catch((error) => console.error("There was an error!", error));
  }, [])
  
  return (
    <div>
      <br />
      <br />
      <span> {"user names : " + data.map((user) => user.name)}</span>
      <br />
      <span> {"user emails : " + data.map((user) => user.email)}</span>
    </div>
  );
};

export default Getaccounts;
