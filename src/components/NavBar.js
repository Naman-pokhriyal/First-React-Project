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
    {
      title: <i className={clicked ? "fa fa-times" : "fa fa-bars"}></i>,
      url: "#",
      cName: "hambur",
    },
  ]);
  return (
    <>
      <nav className="nav-wrap">
        <div className="logo">
          <p className="name">React</p>
          <i class="fab fa-phoenix-squadron"></i>
        </div>
        <ul className="nav-list">
          {MenuItem.map((item) => {
            return (
              <li className={item.cName} href={item.url}>
                {item.title}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
