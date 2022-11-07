import "./cart.css";
import { useCart } from "../../contexts/cart-context";
import { ProductListing } from "../../components";

export const Cart = () => {
    const { cartState } = useCart();
    const {
        cart,
        cartQty,
        cartTotal,
        saveForLater
    } = cartState;

    return(
        <main className="cart-wr">
            <h1 className="cart-head">Cart</h1>
            <div>
                <div className="cart-items-cn">
                    <h2 className="cart-h2">Cart Items</h2>
                    <div className="cart-items">
                    { 
                        <ProductListing 
                            db={cart} 
                            forComp={"cart-items"}
                        /> 
                    }
                    </div>
                </div>
                <div>
                    <h2 className="cart-h2">Saved For Later</h2>
                    <div className="cart-items">
                    { 
                        <ProductListing 
                            db={saveForLater} 
                            forComp={"save-for-later"}
                        /> 
                    }
                    </div>
                </div>
            </div>
        </main>
    );
}