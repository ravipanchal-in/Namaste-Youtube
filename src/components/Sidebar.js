import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="col-span-1 shadow-lg py-3 px-6 h-[100vh]">
      <Link to={"/"}>Home</Link>
      <h1>Subscriptions</h1>
      <ul>
        <li>
          <a href="/">Music</a>
        </li>
        <li>
          <a href="/">Sports</a>
        </li>
        <li>
          <a href="/">Gaming</a>
        </li>
        <li>
          <a href="/">Movies </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
