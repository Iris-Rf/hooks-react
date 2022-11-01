import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar-dark">  
      <NavLink className="navBar-a" to="">
        Home
      </NavLink>
      <NavLink className="navBar-a" to="finder">
        Finder
      </NavLink>
      <NavLink className="navBar-a" to="gallery">
        Gallery
      </NavLink>
      <NavLink className="navBar-a" to="about">
        About
      </NavLink>
    </nav>
  );
};

export default NavBar;
