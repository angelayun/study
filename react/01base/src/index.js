import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import styles from "./index.module.css";
import logo from './logo.png'
console.log(styles)
// console.log(jsx);
// React.Fragment
ReactDOM.render(<React.Fragment><App title="开课吧真不错" /><img className={styles.img} src={logo} alt='logo图标' /></React.Fragment>, document.getElementById("root"));
