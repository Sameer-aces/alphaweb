import React from "react";
import Login from "./auth/Login";
import acel from "./images/logonMain.png";
const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#213966",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "99vh",
        }}
      >
        <div>
          <img src={acel} />
        </div>
        <Login />
      </div>
     
    </>
  );
};
export default Home;
