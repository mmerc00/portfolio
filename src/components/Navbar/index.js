import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "../NavLink";

const Navbar = () => {
  return (
    <div>
      <Navbar>
        <NavLink path="/" classes={["navbar-brand"]}>
          Melissa Mercado
        </NavLink>

        <nav className="ml-auto">
          <NavLink path="/">About</NavLink>
          <NavLink path="/Projects">Projects</NavLink>
          <NavLink path="/Skills">Skills</NavLink>
        </nav>
      </Navbar>
    </div>
  );
};

export default Navbar;
