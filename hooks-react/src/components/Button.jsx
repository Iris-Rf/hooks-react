import { NavLink } from "react-router-dom";

export const Button = () => {
  return (
    <div className="div-button">
      <button className="button-12">
        <NavLink className="navBar-a" to="finder">
          Finder
        </NavLink>
      </button>
    </div>
  );
};

export default Button;
