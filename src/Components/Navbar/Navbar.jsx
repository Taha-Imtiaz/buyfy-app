import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../../Redux/auth/authActions";
import Header from "../Header/Header";
import "./Navbar.css";


const MenuItem = ({children,to = "#", ...restProps}) => (
  <div>
 <div {...restProps} className="menuItem">
   <Link to = {to}>
   <Header style={{cursor:"pointer", display:"inline"}} fontSize = {24} fontWeight = "bold">{children}</Header>
   </Link>
     </div>
  </div>
)

const Navbar = ({auth,signout}) => {
  return (
    <div className="navbar">
    
   <MenuItem to = "/">LOGO</MenuItem>
   <MenuItem to = "/categories">SHOP</MenuItem>
   <MenuItem>CART</MenuItem>
  {auth ? <MenuItem onClick = {signout} to = "/authentication">LOGOUT</MenuItem>:  <MenuItem to = "/authentication">LOGIN</MenuItem>}

   

      {/* <div className="logo">
        <Link to="/">
          <h1>Logo</h1>
        </Link>
      </div>
      <div className="navItemContainer">
        <div className="navItem">
          <Link to="/categories">
            <h3>Categories</h3>
          </Link>
        </div>

        <div className="navItem">
          <Link to="/authentication">
            <h3>Auth</h3>
          </Link>
        </div>
        <div className="navItem">
          <Link to="/test">
            <h3>Test</h3>
          </Link>
        </div>
      </div> */}
    </div>
  );
};
var mapState = (state) => ({
  auth: state.auth
})
var action = {
  signout
}
export default connect(mapState, action)(Navbar);
