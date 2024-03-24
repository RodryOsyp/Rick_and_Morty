import React from "react";
import style from "./Layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className={style.wrapper}>
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
