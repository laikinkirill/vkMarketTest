import React from "react";
import styles from "./Left.module.scss";

function Left(props) {
  return <div className={styles.left}>{props.children}</div>;
}

export default Left;
