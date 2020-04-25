import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import style from "./index.module.css";
// console.log(jsx);
// React.Fragment
ReactDOM.render(<React.Fragment><App title="开课吧真不错" /><img className={style.img} /></React.Fragment>, document.getElementById("root"));
