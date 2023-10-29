import React, { useState } from "react";
import axios from "axios";

function Loginform() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMsg, setAlertMsg] = useState("success");
  const [isCreated, setIsCreated] = useState(false);
  const [message, setMessage] = useState("");
  const [isPasswordVisible, setisPasswordVisible] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const setPasswordVisibility = () => {
    if (isPasswordVisible) {
      setisPasswordVisible(false);
    } else {
      setisPasswordVisible(true);
    }
  };

  const handleSubmit = () => {
    if (password !== "" && email !== "") {
      const data = {
        email,
        password,
      };
      axios
        .post("http://localhost:8000/login", data)
        .then((response) => {
          setMessage(response.data.message);
          setAlertMsg(response.data.alertMsg);
          setIsCreated(true);
          setTimeout(() => {
            setIsCreated(false);
          }, 1500);
        })
        .catch((error) => {
          console.error("Error:", error);
          setMessage("Internal error occurred!!");
          setAlertMsg("danger");
          setIsCreated(true);
        });
    } else {
      setAlertMsg("warning");
      setMessage("Please provide all required fields");
      setIsCreated(true);
      setTimeout(() => {
        setIsCreated(false);
      }, 1500);
    }
  };

  return (
    <>
      <>
        {isCreated && (
          <div className={`alert alert-${alertMsg}`} role="alert">
            {message}
          </div>
        )}
        <div className="backgroundContainer">
          {Array.from({ length: 1200 }).map((_, index) => (
            <div key={index}></div>
          ))}
        </div>
        <div className="signinform">
          <h1>Login Form</h1>
          <label htmlFor="email">Enter Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="password">Enter Password</label>
          <div>
            <input
              type={isPasswordVisible ? "password" : "text"}
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />

            {isPasswordVisible ? (
              <i class="fa-solid fa-eye" onClick={setPasswordVisibility}></i>
            ) : (
              <i
                class="fa-solid fa-eye-slash"
                onClick={setPasswordVisibility}
              ></i>
            )}
          </div>
          <button onClick={handleSubmit}>Login</button>
        </div>
      </>
    </>
  );
}

export default Loginform;
