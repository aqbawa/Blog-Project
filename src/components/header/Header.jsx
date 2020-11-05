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
        <span>
          <Button
            style={{
              textTransform: "none",
              paddingLeft: "20px",
              paddingRight: "20px",
              fontSize: "1em",
            }}
            className="button__signup"
            href="#"
            color="primary"
          >
            Sign Up
          </Button>
        </span>
        <span>
          <Button
            style={{
              textTransform: "none",
              paddingLeft: "20px",
              paddingRight: "20px",
              fontSize: "1em",
            }}
            href="#"
            color="secondary"
          >
            Sign In
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Header;
