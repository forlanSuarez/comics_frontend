import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ActorComponent";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  
  const fetchProducts = async () => {
    const response = await axios
      .get("https://swapi.dev/api/people/")
  //    .get("https://fakestoreapi.com/products/")    
      .catch((err) => {
        console.log("Err: ", err);
      });
      console.log(response.data['results']);
  //  dispatch(setProducts(response.data));
    dispatch(setProducts(response.data['results']));
  };

  useEffect(() => {

    fetchProducts();
 
  }, []);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
