// import React, { useState } from "react";
import React from "react";
// import styles from "./Products.module.scss";
import products from "../../products/products";
import Card from "../Card/Card";

function Products() {
  //   const [count, setCount] = useState(product.count);
  //   const [test, setTest] = useState(0);
  //   const test = (event) => {
  //     console.log(event.target.value);
  //     alert(event.target.value);
  //   };

  return (
    <>
      {/* {products.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          img={item.image}
          desc={item.description}
          price={item.price}
          quantity={item.quantity}
          onClick={() => {
            // delete item;
            // item.splice(1, 1);
            // console.log(item);
          }}
        />
      ))} */}
      {products.map((product, index) => (
        <Card
          key={product.id}
          product={product}
          increaseCount={() => increaseCount(index)}
        />
      ))}
    </>
  );
}

export default Products;
