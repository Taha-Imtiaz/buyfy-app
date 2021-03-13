import { useEffect,lazy, Suspense } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
// import Home from "./Pages/Home/Home";  //static import
// import Authtentication from "./Pages/Authtentication/Authtentication";
// import Category from "./Pages/Cattegory/Category";
// import CategoryProducts from "./Pages/CategoryProducts/CategoryProducts";
// import Checkout from "./Pages/Checkout/Checkout";
import { connect } from "react-redux";
import { firebaseAuthListener } from "./Redux/auth/authActions";
// import Test from "./Pages/Test/Test";
import Navbar from "./Components/Navbar/Navbar";
// import Product from './Pages/Product/Product';
var Home = lazy(() => import("./Pages/Home/Home"))   //dynamic import
var Authtentication = lazy(() => import("./Pages/Authtentication/Authtentication"))   //dynamic import
var Category = lazy(() => import("./Pages/Cattegory/Category"))   //dynamic import
var CategoryProducts = lazy(() => import("./Pages/CategoryProducts/CategoryProducts"))   //dynamic import
var Checkout = lazy(() => import("./Pages/Checkout/Checkout"))   //dynamic import
var Test = lazy(() => import("./Pages/Test/Test"))   //dynamic import
var Product = lazy(() => import("./Pages/Product/Product"))   //dynamic import


function App({ firebaseAuthListener }) {
  useEffect(() => {
    //CDM
    firebaseAuthListener();
  }, [firebaseAuthListener]);

  return (
    <div>
      <Navbar/>
      <Switch>
        <div className="pagesContainer">
          <Suspense fallback = { <div>Loding.....</div> }>
          <Route path="/" component={Home} exact />

        
        <Route path="/authentication" component={Authtentication} />
        <Route path="/categories" component={Category} />
        <Route path="/category-products/:category" component={CategoryProducts} />
        <Route path="/product/:productId" component={Product} />
        <Route path="/checkout/:orderId" component={Checkout} />
        <Route path="/test" component={Test} />
        </Suspense>
        </div>
      </Switch>
    </div>
  );
}

var actions = {
  firebaseAuthListener,
};

export default connect(null, actions)(App);
