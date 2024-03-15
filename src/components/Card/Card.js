import React from "react";
import styles from "./Card.module.scss";

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.imageBox}>
        <img src={props.img} className={styles.image} />
      </div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.desc}>{props.desc}</div>
      <div className={styles.sum}>
        <div onClick={props.plus}>+</div>
        <div onChange={props.test}>{props.quantity}</div>
        <div onClick={props.minus}>-</div>
      </div>
      <div className={styles.price}>{props.price}</div>
      <div onClick={props.onClick}>Удалить</div>
    </div>
  );
}

export default Card;
