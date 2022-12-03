import "./Header.css";
import React from "react";
import mainLogo from "../../../assets/logo.png";

const Header = () => (
  <div className="Container-head">
    <img className="logo" src={mainLogo} alt={"main_logo"} />
    <h1 className="Welcom_text">Добро пожаловать в интернет-магазин</h1>
    <div className="span_separation">
      <span className="SpanJoin">Вход</span>&nbsp;
      <span className="SpanRegister">Регистрация</span>
    </div>
  </div>
);

export default Header;
