import React from "react";
import "../css/Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Nav_items } from "./NavItems";
import { About_sub_navbar } from "./About_sub_navbar";
import { Activities_sub_navbar } from "./Activities_sub_navbar";
import { Blog_sub_navbar } from "./Blog_sub_navbar";
import { Media_sub_navbar } from "./Media_sub_navbar";

export function Navbar() {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [activityDropdown, setActivityDropdown] = useState(false);
  const [blogDropdown, setBlogDropdown] = useState(false);
  const [mediaDropdown, setMediaDropdown] = useState(false);
  const [bgimgsize, setBgimgsize] = useState(true);
  return (
    <>
      <div className={bgimgsize ? "bg_img " : "small_bg_img"}>
        <nav className="navbar_wrap">
          <ul className="Navbar_items">
            {Nav_items.map((item) => {
              if (item.title === "About us") {
                return (
                  <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setAboutDropdown(true)}
                    onMouseLeave={() => setAboutDropdown(false)}
                  >
                    <Link
                      to={item.path}
                      className="nav_title"
                      onClick={() => setBgimgsize(true)}
                    >
                      {item.title}
                    </Link>

                    {aboutDropdown ? (
                      <About_sub_navbar
                        data={bgimgsize}
                        setData={setBgimgsize}
                      />
                    ) : null}
                  </li>
                );
              }
              if (item.title === "Activities") {
                return (
                  <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setActivityDropdown(true)}
                    onMouseLeave={() => setActivityDropdown(false)}
                  >
                    <Link
                      to={item.path}
                      className="nav_title"
                      onClick={() => setBgimgsize(true)}
                    >
                      {item.title}
                    </Link>
                    {activityDropdown ? (
                      <Activities_sub_navbar
                        data={bgimgsize}
                        setData={setBgimgsize}
                      />
                    ) : null}
                  </li>
                );
              }
              if (item.title === "Blog") {
                return (
                  <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setBlogDropdown(true)}
                    onMouseLeave={() => setBlogDropdown(false)}
                  >
                    <Link
                      to={item.path}
                      className="nav_title"
                      onClick={() => setBgimgsize(true)}
                    >
                      {item.title}
                    </Link>
                    {blogDropdown ? (
                      <Blog_sub_navbar
                        data={bgimgsize}
                        setData={setBgimgsize}
                      />
                    ) : null}
                  </li>
                );
              }
              if (item.title === "Media") {
                return (
                  <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setMediaDropdown(true)}
                    onMouseLeave={() => setMediaDropdown(false)}
                  >
                    <Link
                      to={item.path}
                      className="nav_title"
                      onClick={() => setBgimgsize(true)}
                    >
                      {item.title}
                    </Link>
                    {mediaDropdown ? (
                      <Media_sub_navbar
                        data={bgimgsize}
                        setData={setBgimgsize}
                      />
                    ) : null}
                  </li>
                );
              }
              return (
                <li key={item.id} className={item.cName}>
                  <Link
                    to={item.path}
                    className="nav_title"
                    onClick={() => setBgimgsize(true)}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
