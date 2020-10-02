import React from "react";
import { CardProduct } from "./CardProduct";

export const Products = ({ products }) => {
  return (
    <>
      <div className="card-grid">
        {products.map((product) => {
          return <CardProduct key={product.id} {...product} />;
        })}
      </div>
      <style jsx>{`
        .card-grid {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          margin: 10px;
        }
      `}</style>
    </>
  );
};
