import {  useSelector,useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addtocart , incrementproduct , decrementproduct } from "../src/store/slices/productsSlice";
function ProductCard(props) {
    const cartProducts = useSelector((state) =>(state.productsSlice.cartProducts));
    const location =useLocation();
    const dispatch = useDispatch();
    const { product } = props;   
    return ( <>
      <div className="product-card">
        <div className="product-Image">
            <img src={ product.image } alt="" />
        </div> 
        <h3>{ product.title }</h3>
        <h4>{ product.price }</h4>
        {
          !location.pathname === "/cart" ? (
            <button onClick ={ ()=> dispatch(addtocart(product))}>
              Add to cart
            </button>
          ) :null
        }

        {
          cartProducts.findIndex((el)=> el.id === product.id) >=0  ?
            (<div className="product-Count">
              <button onClick ={() => dispatch(decrementproduct(product.id))}>
                -
              </button>
              <span>
                {cartProducts.filter((el) => el.id === product.id).length }
              </span>
              <button onClick ={ () =>dispatch(incrementproduct(product))}>
                +
              </button>
            </div>) :
            (<button onClick ={ ()=> dispatch(addtocart(product))}>
              Add to cart
            </button>)
        }

        
        
      </div>
    </> );
}

export default ProductCard;