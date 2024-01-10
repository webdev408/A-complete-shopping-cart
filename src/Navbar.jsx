import { Link, NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const Navbar = ({ cart }) => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-primary navbar-dark fw-bolder">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TekSkillDev
          </Link>

          <div className="navbar-nav">
            <NavLink className="nav-link " aria-current="page" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/list">
              ListItems
            </NavLink>
            <NavLink className="nav-link" to="/cart">
              Cart ({cart.length})
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
