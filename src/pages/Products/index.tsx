import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import ProductItem from "../../components/ProductItem";
import ClientForm from "../../components/ClientForm";
import { useSelector, useDispatch } from "react-redux";
import { getTotal } from "../../store/purchase/actions";
import { AppState } from "../../store";
import "./styles.css";

export default function Produtos() {
  const { products } = useSelector((state: AppState) => state.product);
  const { total } = useSelector((state: AppState) => state.purchase);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal(products));
  }, [products, dispatch]);

  return (
    <section className="container">
      <div className="container">
        <h2 className="main-title">Produtos</h2>
        <Grid container spacing={2}>
          {products.map(product => (
            <ProductItem product={product} />
          ))}
        </Grid>
      </div>
      <div className="container">
        <h2 className="main-title">Dados do Cliente</h2>
        <ClientForm total={total} />
      </div>
    </section>
  );
}