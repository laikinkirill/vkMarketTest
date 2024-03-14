import React from "react";
import styles from "./Card.module.scss";

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.image}>img</div>
      <div className={styles.title}>Рюкзак</div>
      <div className={styles.desc}>Описание</div>
      <div className={styles.quantity}>2</div>
      <div className={styles.price}>5000р</div>
    </div>
  );
}

export default Card;
