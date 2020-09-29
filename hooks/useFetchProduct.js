import { useEffect, useState } from "react";
import { getProduct } from "../helpers/getProduct";

export const useFetchProduct = () => {
  const [product, setProduct] = useState({
    data: {},
    loading: true,
  });

  useEffect(() => {
    getProduct().then((resp) => {
      setProduct({
        data: resp,
        loading: false,
      });
    });
  }, []);

  return product;
};
