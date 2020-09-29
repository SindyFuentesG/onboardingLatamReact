export const getProduct = async () => {
  const url = "http://localhost:3001/api/v1/products/";
  const resp = await fetch(url, {
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  const product = await resp.json();
  return product;
};
