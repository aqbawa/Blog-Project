import React from "react";
import { Button } from "@material-ui/core";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <h3>Home</h3>
      </div>
      <div className="header__right">
        <Button className="button__style" href="#" color="primary">
          Sign Up
        </Button>
        <Button className="button__style" href="#" color="secondary">
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Header;
