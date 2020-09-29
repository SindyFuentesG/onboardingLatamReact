import React from "react";
import { useFetchProduct } from "../hooks/useFetchProduct";

export const CardProduct = () => {
  const { data: product, loading } = useFetchProduct();
  return (
    <>
      {!loading && (
        <div className="card">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price} COP</p>
        </div>
      )}
      <style jsx>{`
        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
      `}</style>
    </>
  );
};
