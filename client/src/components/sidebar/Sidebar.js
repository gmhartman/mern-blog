import React, { useState, useEffect } from "react";
import "./sidebar.css";
import axios from "axios";
import aboutphoto from "../../assets/aboutphoto.png";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img src={aboutphoto} alt="aboutphoto"></img>
        <p>Lorem a lskdjfa jldkfjaslkf jlskd fjalheuhbf iu</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList"></ul>
        {cats.map((c) => (
          <Link to={`/?cat=${c.name}`} className="link">
          <li className="sidebarListItem">{c.name}</li>
          </Link>
        ))}
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Me</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          <i className="sidebarIcon fa-solid fa-podcast"></i>
        </div>
      </div>
    </div>
  );
}
