import React, { useState } from "react";
// import MenuItem from "./MenuItem";
import "./NavBar.css";

function NavBar() {
  const [clicked, setclicked] = useState(false);
  const [MenuItem] = useState([
    {
      title: "Home",
      url: "#",
      cName: "nav-items",
    },
    {
      title: "Blog",
      url: "#",
      cName: "nav-items",
    },
    {
      title: "Projects",
      url: "#",
      cName: "nav-items",
    },
    {
      title: "About Me",
      url: "#",
      cName: "nav-items",
    },
  ]);
  return (
    <>
      <nav className="nav-wrap">
        <a className="logo" href="#.com">
          React
          <i class="fab fa-phoenix-squadron"></i>
        </a>
        <div
          className="hambur"
          onClick={() => {
            setclicked(!clicked);
          }}
        >
          <i className={clicked ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-list active" : "nav-list "}>
          {MenuItem.map((item) => {
            return (
              <a className={item.cName} href={item.url}>
                <li>{item.title}</li>
              </a>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
