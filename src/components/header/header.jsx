import React from "react";
import styles from "./header.module.css";

const Header = ({onLogout}) => {
  return (
    <header>
      <img src='/images/logo.png' alt='logo' />
      <h1>Business Card Maker</h1>
      {onLogout && <button onClick={onLogout}>Logout</button>}
    </header>
  );
};

export default Header;
