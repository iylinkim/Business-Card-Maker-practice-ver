import React from "react";
import styles from "./card.module.css";

const DEFAULT_IMAGE = "/images/default_logo.png";
const Card = ({card}) => {
  const {name, company, title, email, message, theme, fileName, fileURL} = card;
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img src={url} alt='profile photo' />
      <div>
        <h1>{name}</h1>
        <p>{company}</p>
        <p>{title}</p>
        <p>{email}</p>
        <p>{message}</p>
      </div>
    </li>
  );
};

function getStyles(theme) {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;
