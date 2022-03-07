import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Activity_sub_navbar.css";
// import "../css/About_sub_navbar.css";
import { Activities_sub_nav } from "./NavItems";

export function Activities_sub_navbar(props) {
  const [menu, setMenu] = useState(true);
  return (
    <>
      <ul className={menu ? "sub_nav_wrap" : "hide_ menu"}>
        {Activities_sub_nav.map((item) => {
          return (
            <li key={item.id} className={item.cName}>
              <Link
                to={item.path}
                className="sub_nav_title"
                onClick={() => setMenu(!menu)}
                onClick={() => props.setData(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
