import React, { useState } from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [clickedLink, setClickedLink] = useState(null);
  const handleClick = (link) => {
    setClickedLink(link);
  };

  return (
    <>
      <div className={style.header}>
        <Link
          className={`${style.text} ${clickedLink === "characters" ? style.underline : ""}`}
          to="/characters"
          onClick={() => handleClick("characters")}
        >
          Characters
        </Link>
        <Link className={`${style.text} ${clickedLink === "main" ? style.underline : ""}`} to="/" onClick={() => handleClick("main")}>
          Main
        </Link>
      </div>
    </>
  );
};

export default Header;
