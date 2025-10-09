import React from "react";
import Container from "./Container";
import { Link, NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  const navigationData = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/apps", name: "Apps" },
    { id: 3, path: "/installation", name: "Installation" },
  ];

  return (
    <header className="bg-white">
      <Container>
        <div className="navbar px-0">
          {/* Dropdown Menu & Logo */}
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost pl-0 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content gap-2 bg-base-100 rounded-box z-1 mt-3 w-52 shadow"
              >
                {navigationData.map(({ id, path, name }) => (
                  <li key={id}>
                    <NavLink
                      to={path}
                      className={
                        "font-medium bg-transparent focus:bg-transparent-300"
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logo */}
            <Link
              to={"/"}
              className="flex items-center gap-1 text-base font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent transition-colors duration-200 ease-linear hover:from-[#9F62F2] hover:to-[#9F62F2] md:text-xl"
            >
              <img
                src="/logo.png"
                alt="It is the logo image of this website"
                className="size-8 md:size-10"
              />
              AppSphere
            </Link>
          </div>

          {/* Nav Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-8">
              {navigationData.map(({ id, path, name }) => (
                <li key={id}>
                  <NavLink to={path} className="px-0 font-medium !bg-transparent !hover:bg-transparent !focus:bg-transparent !active:bg-transparent">
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Button */}
          <div className="navbar-end">
            <Link to={"https://github.com/Abdurrobr34l"} target="_blank" className="btn py-3 px-4 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-none transition-colors duration-200 ease-linear hover:text-[#001931] hover:from-[#9F62F2] hover:to-[#632EE3]">
              <FaGithub />
              Contribute
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
