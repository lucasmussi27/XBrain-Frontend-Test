import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPurchases } from "../../store/purchase/actions";
import { resetProducts } from "../../store/products/actions";
import { AppState } from "../../store";

const Purchase = () => {
  const { client, total } = useSelector((state: AppState) => state.purchase);
  const dispatch = useDispatch()

  const handleBack = () => {
    dispatch(resetPurchases());
    dispatch(resetProducts());
  }

  return(
    <div className="container purchase-container">
      <h1>{client.name},</h1>
      <p>
        Sua compra no valor <strong>R$ {total.toFixed(2)}</strong>
        foi finalizada com sucesso
      </p>
      <img src={require("../../assets/imgs/purchase.png")} alt="finish-purchase" />
      <Link className="new-purchase-button" onClick={handleBack} to="/">
        INICIAR NOVA COMPRA
      </Link>
    </div>
  )
}

export default Purchase;