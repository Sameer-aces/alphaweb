import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({
      ...user,
      [id]: value,
    });
  };
  const handleLoginSubmit = (e) => {
    console.log("first");
    e.preventDefault();
    const userData = {
      email: user.email,
      password: user.password,
    };
    console.log(userData);
    axios
      .post("http://localhost:5001/user/login", userData)

      .then((res) => {
        console.log("working");
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        navigate("/dashboard");
      })
      .catch((err) => {
        alert("Email or password invalid");
      });
  };
  return (
    <>
      <div className="LoginPage">
        <div className="">
          <h4
            style={{
              marginLeft: "-135px",
              fontWeight: "500",
            }}
          >
            Login
          </h4>
        </div>
        <p
          style={{
            width: "10%",
            height: "3.25px",
            marginLeft: "-225px",
            marginTop: "5px",
            border: "1px solid #E50035",
            backgroundColor: "#E50035",
          }}
        ></p>

        <form className="LoginForm">
          <input
            className="formInput"
            onChange={handleChange}
            value={user.email}
            id="email"
            type="email"
            placeholder="Email"
          />
          <br></br>
          <input
            className="formInput"
            id="password"
            onChange={handleChange}
            value={user.password}
            // error={errors.password}
            type="password"
            placeholder="Password"
          />

          <div
            style={{
              display: "flex",
              marginTop: "10px",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p
              className="text_tag"
              style={{
                cursor: "pointer",
                backgroundColor: "#ffff",
                color: "#1A73E8",
                borderRadius: "8px",
                fontSize: "12px",
                padding: "3px",
                width: "200px",
                height: "30px",
                marginTop: "10px",
                marginLeft: "-0px",
              }}
            >
              Forgot Password?<br></br>
            </p>
            <button
              className="formBtn"
              onClick={handleLoginSubmit}
              style={{
                width: "120px",
                height: "40px",
                backgroundColor: "#1A73E8",
                color: "white",
                fontWeight: "400",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
