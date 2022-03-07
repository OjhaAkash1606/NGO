import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Blog_sub_nav } from "./NavItems";
import "../css/About_sub_navbar.css";

export function Blog_sub_navbar(props) {
  const [menu, setMenu] = useState(true);
  return (
    <>
      <ul className={menu ? "sub_nav_wrap" : "hide_menu"}>
        {Blog_sub_nav.map((item) => {
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
