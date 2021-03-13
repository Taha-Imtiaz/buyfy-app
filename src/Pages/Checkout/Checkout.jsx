import React, {useState} from 'react'
import CheckoutList from '../../Components/CheckoutList/CheckoutList';
import { connect } from 'react-redux';
import { calculateTotal } from '../../utility/checkout';
import OrderForm from '../../Components/OrderForm/OrderForm';
import "./Checkout.css";
import Header from '../../Components/Header/Header';
import Button from '../../Components/Button/Button';
import { openModal } from '../../Redux/modal/modalActions';

const Checkout = ({total,openModal}) => {
    var [shipFormShown, setShipFormShown] = useState(false)
    return (
        <div className = "checkout-page-container">

            <div className = "checkout">
             <Header fontWeight = "bold" fontSize = {40}>Checkout page</Header>
            <CheckoutList/>
           <div className = "checkout-bottom-content">
           <Header fontWeight = "bold" fontSize = {40}>${total}</Header>
           <Button onClick = {() => openModal({modalType: "addressFormModal"  })}
            style={{justifySelf:"end",borderRadius:"30px"}} fontWeight = "semi-bold" fontSize = {30} background = "white" color = "black">Proceed & Pay</Button>

           </div>
           
          {/*  { shipFormShown && <OrderForm/>}
            <button onClick={() => setShipFormShown(!shipFormShown)} >PROCEED & PAY!</button> */}
            </div>
            
        </div>
    )
}
var actions = {
    openModal
}
var mapState = (state) => ({
    total: calculateTotal(state.cart)
})

export default connect(mapState, actions)(Checkout)
