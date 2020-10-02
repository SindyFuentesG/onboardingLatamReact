import React from "react";

export const CardProduct = ({ name, description, price }) => {
  return (
    <>
      <div className="card">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>${price} COP</p>
      </div>

      <style jsx>{`
        .card {
          margin: 5px;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card-grid {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          margin: 10px;
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
