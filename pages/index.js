import Head from "next/head";
import { AddIcon } from "../components/AddIcon";
import { Products } from "../components/Products";

function Home({ products }) {
  return (
    <div className="container">
      <Head>
        <title>Onboarding App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title">Productos App</h1>

      <Products products={products} />
      <AddIcon />

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: right;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const resp = await fetch("http://localhost:3001/api/v1/products/", {
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  const products = await resp.json();
  return { products };
};

export default Home;
