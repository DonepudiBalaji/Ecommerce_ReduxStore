import {  useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import axiosInstance from "../axios";
import ProductCard from "../ProductCard";
import { fetchProducts } from "../store/slices/productsSlice";

function Home() {
    const allProducts = useSelector((state) => state.productsSlice.products) //select the products 
    //const [allProducts, setAllProducts] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        async function fetchAllProducts() {
            try {
                const products = await axiosInstance.get("products");
                dispatch(fetchProducts(products.data)) //dispatching the actions
                //setAllProducts(products.data);
            } catch (error) {
                throw new Error(error);
            }
        }
        fetchAllProducts()
    }, [])
    console.log(allProducts);
    return ( <>
       <h1>Ecommerce Application</h1>
       <div className="products-Container">
        {allProducts.map( product => <ProductCard product ={product} key ={product.id}/>)}
       </div>
       
    </> );
}

export default Home;