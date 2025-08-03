import { createContext, useContext, useEffect, useState } from "react";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext  = createContext();

//Provider function
export const AppContextProvider = ({children})=>{
    
    const currency = import.meta.env.VITE_CURRENCY;;
    const [user, setUser] = useState(null);
    const [seller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState({});
    const [searchQuery, setSearchQuery] = useState({});

    // fetch all products
    const fetchProducts = async()=>{{
        setProducts(dummyProducts);
    }}

    // Add products to cart
    const addToCart = (itemId)=>{
        let cartData = structuredClone(cartItems); // Create a copy of the current cartItems 
                                                   // to avoid directly mutating the state.
        if(cartData[itemId]){
            cartData[itemId] +=1;
        }
        else{
            cartData[itemId] =1;

        }
        setCartItems(cartData);
        toast.success("Added to Cart")
    }
    
    // update cart item quantity
    const updateCartItem = (itemId,quantity)=>{
        let cartData = structuredClone(cartItems)
        
        if (quantity <= 0) {
        delete cartData[itemId]; // Remove item from cart
        } else {
        cartData[itemId] = quantity;
        }
        setCartItems(cartData);
        toast.success("Cart Updated")
    }
    
    //remove product from cart
    const removeFromCart = (itemId)=>{
        let cartData = structuredClone(cartItems);
        if(cartItems[itemId]){
            cartData[itemId]-=1;
            if(cartData[itemId]==0) {
                delete cartData[itemId];
            }
        }

        toast.success("Item Removed")
        setCartItems(cartData)

    }

    useEffect(()=>{
        fetchProducts();
    },[]);

    const value = { user, setUser, seller, setIsSeller, showUserLogin, addToCart, updateCartItem, removeFromCart,
        setShowUserLogin, products, currency, cartItems, searchQuery, setSearchQuery}
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext);