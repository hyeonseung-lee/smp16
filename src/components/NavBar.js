import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavItem from "@material-tailwind/react/NavItem";
import NavLink from "@material-tailwind/react/NavLink";

const NavBar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const url = window.location.href.split("/")[4];
  console.log(url);
  return (
    <Navbar color="lightBlue" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <Link to="/">
            <img
              className="h-16 w-auto"
              src="https://sw-maestro.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe97f0af5-bb39-4ac6-9c41-fcbc96082cbf%2Flogo(250).png?table=block&id=d3ef903a-5073-43c9-be87-831ac7515b15&spaceId=461dcd9b-30d0-4f58-92fa-01a38636821b&width=250&userId=&cache=v2"
              alt="Workflow"
            />
          </Link>
          <NavbarToggler
            color="white"
            onClick={() => setOpenNavbar(!openNavbar)}
            ripple="light"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav>
            <Link to="/home">
              <NavLink active={url == "home" ? "light" : ""} ripple="light">
                DevList
              </NavLink>
            </Link>
            <Link to="/profile">
              <NavLink active={url == "profile" ? "light" : ""} ripple="light">
                Profile
              </NavLink>
            </Link>
            <NavItem ripple="light">Settings</NavItem>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};

export default NavBar;
