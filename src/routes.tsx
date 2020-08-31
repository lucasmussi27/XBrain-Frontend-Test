import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Products from "./pages/Products";
import Purchase from "./pages/Purchase";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Products} />
      <Route path="/finish-purchase" component={Purchase} />
    </BrowserRouter>
  );
}