import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
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

export default Header;
