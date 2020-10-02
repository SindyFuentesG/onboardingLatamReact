import React from "react";
import { useRouter } from "next/router";

export const AddIcon = () => {
  const router = useRouter();
  const goTo = (event) => {
    event.preventDefault();
    router.push("/create");
  };
  return (
    <div className="action-icon" onClick={goTo}>
      <span>+</span>
      <style>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        .action-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            float: right;
            position: absolute;
            top: 52px;
            right: 10px;
            width: 50px;
            height: 50px;
            border-radius: 100%;
            background-color: orange;
            cursor:pointer;
        }
        span {
            color: white;
            font-size: 42px;
            font-weight: bold;
            margin-top: -8px;
        }


      `}</style>
    </div>
  );
};
