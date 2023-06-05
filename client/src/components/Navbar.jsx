import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faAngleDown,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/User/UserSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.authenticatedUser);
  const [searchedItem, setSearchedItem] = useState("");

  const handleLogin = () => {
    navigate("/login");
  };
  let searchedValue = "";
  if (searchedItem === "") {
    searchedValue = "/";
  } else {
    searchedValue = `product/search/${searchedItem}`;
  }
  const handleLogout = () => {
    localStorage.clear();
    dispatch(logoutUser());
  };

  return (
    <nav
      className="navbar navbar-expand-lg  navbar-dark sticky-top d-flex flex-column "
      style={{ backgroundColor: "#343a40" }}
    >
      <div className="container-fluid" style={{ color: "red" }}>
        <Link
          className="navbar-brand  mx-5 ps-5 fs-2 fw-bold align-middle"
          to={"/"}
          style={{ color: "#b39c25", textDecoration: "none" }}
        >
          F-Commerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 container-fluid">
            <div className="nav-item col-8 pt-3">
              <form className="d-flex mx-5 ">
                <input
                  className="form-control me-2 col-8 align-middle"
                  type="search"
                  placeholder="Search for products..."
                  aria-label="Search"
                  value={searchedItem}
                  onChange={(e) => setSearchedItem(e.target.value)}
                />

                <Link
                  className="btn col-md-1 col-lg-1 p-1 fw-bold"
                  type="submit"
                  style={{ backgroundColor: "#ffe140" }}
                  to={`${searchedValue}`}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Link>
              </form>
            </div>

            <li className="nav-item mx-2 align-middle">
              {user.name ? (
                <div>
                  <p className="text-center px-2 ms-5 fw-bold text-warning ">
                    Logged In As :
                  </p>
                  <div className="dropdown ms-5 text-center ">
                    <a
                      className="btn btn-secondary dropdown-toggle fw-bold"
                      href="/"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {user.name.toUpperCase()}
                    </a>

                    <ul
                      className="dropdown-menu dropdown-menu-dark"
                      aria-labelledby="dropdownMenuLink "
                    >
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <button
                  onClick={handleLogin}
                  className="btn  ms-5 fw-bold align-middle mt-3"
                  style={{ backgroundColor: "#ffe140" }}
                >
                  Login &nbsp; <FontAwesomeIcon icon={faRightToBracket} />
                </button>
              )}
            </li>
            <li className="nav-item dropdown ms-2 pt-3">
              <a
                className="nav-link  "
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More <FontAwesomeIcon icon={faAngleDown} />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <button
            className="btn  col-lg-1 col-md-1 me-5 fw-bold mt-1"
            style={{ backgroundColor: "#ffe140" }}
          >
            Cart &nbsp; &nbsp; <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
