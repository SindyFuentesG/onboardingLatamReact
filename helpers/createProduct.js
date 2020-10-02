export const createProduct = async (data) => {
  try {
    const resp = await fetch("http://localhost:3001/api/v1/products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });
    const { value } = await resp.json();
    console.log(value);
    // return value;
  } catch (error) {
    console.log(error);
  }
};
