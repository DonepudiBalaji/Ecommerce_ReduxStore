import {  useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
function Layout() {
    const cartCountItems = useSelector((state) =>(state.productsSlice.cartProducts)).length;
    return ( <>
        <nav className="cartCount">
            <div>
                <NavLink to="/" className={(props) => console.log(props)}>
                  Home
               </NavLink>
               <NavLink to="/cart" className={(props) => console.log(props)}>
                  Cart
                </NavLink>
            </div>
            <span>Cart Count: { cartCountItems }</span>
        </nav>
            
            <Outlet />
    </> );
}

export default Layout;