import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Route } from "react-router";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import { Grid } from "semantic-ui-react";
import { ToastContainer } from "react-toastify";

export default function CartSummary() {
  return (
    <div>
     <Grid>
     <ToastContainer position="bottom-right"/>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories></Categories>
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/products" component={ProductList} />
            <Route path="/products/:name" component={ProductDetail} />
            <Route path="/cart" component={CartDetail} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
