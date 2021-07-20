import React from "react";
import "./Navbar.style.css";
import { NavLink } from "react-router-dom"

function Navbar(props) {
  return (
    <nav className="nav">
      <div className="nav-menu">
        <NavLink className="" to="./">
          Navbar
        </NavLink>
        <NavLink className="" to="./events">
          Events
        </NavLink>
        <NavLink className="" to="./shop">
          Shopping
        </NavLink>
        <NavLink className="" to="./posts">
          Posts
        </NavLink>
        <NavLink className="" to="./admin">
          Admin
        </NavLink>
      </div>
      <form>
        <div className="nav-search">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </nav>
  );
}

export default Navbar;
