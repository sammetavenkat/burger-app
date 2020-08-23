import React from "react";
import Aux from "../../hos/Aux1";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <Aux>
      <div>ToolBar, SidDraw, Backdrop</div>
      <main className={classes.content}>{props.children}</main>
    </Aux>
  );
}

export default Layout;
