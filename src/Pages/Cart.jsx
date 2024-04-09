import { useSelector } from 'react-redux'
import ProductCard from "../ProductCard";
function Cart() {
    const cartProduct = useSelector((state) => state.productsSlice.cartProducts)
    const filterCartProducts = [...new Set(cartProduct)]
    console.log(filterCartProducts);
    return ( <>
    <div className="products-Container">
        {filterCartProducts.map( product => <ProductCard product ={product} key ={product.id}/>)}
    </div> 

    <button>Proceed to CheckOut</button>
    </>
    );
}

export default Cart;