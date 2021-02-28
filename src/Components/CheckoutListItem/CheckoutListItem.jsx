import React from "react";
import { connect } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
  deleteProuctFromCart
} from "../../Redux/cart/cartActions";
import Button from "../Button/Button";
import Paragraph from "../Paragraph/Paragraph";
import "./CheckoutListItem.css"

const CheckoutListItem = ({
  removeProductFromCart,
  addProductToCart,
  deleteProuctFromCart,
  ...product
}) => {
  var { title, cost, quantity,id, coverPhoto } = product;
  return (
    <div className = "checkout-list-item">
      <div className="checkout-item-product">
        <div className="checkout-item-product-image" style={{background:`url(${coverPhoto})`, backgroundSize:"100% 100%, cover"}}></div>
        <Paragraph fontSize = {20} fontWeight = "semi-bold">{title}</Paragraph>
      </div>
      <div className="checkout-item-quantity center" style={{flexFlow:"row"}}>
        <Button onClick={() => addProductToCart(product)} color = "black" fontWeight = "bold" background = "white"  style={{borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px",transform: "translateX(5px)"}}>+</Button>
        <Button color = "black" fontWeight = "bold" background = "white">{quantity}</Button>
        <Button onClick={() => removeProductFromCart(id)} color = "black" fontWeight = "bold" background = "white"  style={{borderTopRightRadius:"20px",borderBottomRightRadius:"20px",transform: "translateX(-5px)"}}>-</Button>


      </div>
      <div className="checkout-item-price center">
        <Paragraph fontWeight = "semi-bold" fontSize = {26} >$ {cost}</Paragraph>
      </div>
      <div className="checkout-item-cross center">
        <Paragraph style={{cursor:"pointer"}} onClick={() => deleteProuctFromCart(id)} fontWeight = "semi-bold" fontSize = {30} >x</Paragraph>
        </div>
      

      {/* <h1>
        {title} - {cost} - <button onClick={() => deleteProuctFromCart(id)}>X</button>
      </h1>
      <h3>
        <button onClick={() => addProductToCart(product)}>+</button> {quantity}{" "}
        <button onClick={() => removeProductFromCart(id)}>-</button>
      </h3> */}
    </div>
  );
};

var actions = {
  addProductToCart,
  removeProductFromCart,
  deleteProuctFromCart
};

export default connect(null, actions)(CheckoutListItem);
