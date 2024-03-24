import React from "react";
import style from "./Footer.module.css";
import { FaTiktok } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.text}>Footer</div>
      <div className={style.creators}>
        <ul>
          <div className={style.creator}>Creators:</div>
          <li className={style.creator1}>❤Tymur❤</li>
          <li className={style.creator1}>❤Bogdan❤</li>
        </ul>
      </div>
      <div>
        <ul className={style.company}>
          COMPANY:
          <li className={style.adj}>About Us</li>
          <li className={style.adj}>Blog</li>
          <li className={style.adj}>Careers</li>
          <li className={style.adj}>Prees</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a
              href="https://www.tiktok.com/uk-UA/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className={style.icon1} color="#FEFEFE" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className={style.icon2} color="#FEFEFE" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className={style.icon3} color="#FEFEFE" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className={style.icon4} color="#FEFEFE" />
            </a>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
