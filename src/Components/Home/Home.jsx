import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
function Home() {
  return (
    <>
      <nav>
        <div className="menu">
          <div className="logo">
            <a href="#">My Projects</a>
          </div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <Link to="/">SignUp</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="img" />
      <div className="center">
        <div className="title">Website Home Page</div>
        <div className="sub_title">Its a sample page</div>
        <div className="btns">
          <button>Learn More</button>
          <button>Subscribe</button>
        </div>
      </div>
    </>
  );
}

export default Home;
