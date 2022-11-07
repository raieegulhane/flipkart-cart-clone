import "./product-card.css";
import { useCart } from "../../contexts/cart-context";
import { Link } from "react-router-dom";

export const ProductCard = ({ product, forComp }) => {
    const {
        productName,
        brand,
        oriPrice,
        discPrice,
        discount,
        size,
        fcAssured,
        productImg
    } = product

    const { cartState: { cart }, cartDispatch } = useCart();

    return(
        <div className="pc-wr fx-c">
            {
                fcAssured &&
                <img 
                    className="fk-assured-logo"
                    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                    alt="flipkart-assured logo"
                />
            }
            <i className="fa-solid fa-heart wishlist-icon"></i>
            <img 
                className="pc-img"
                src={productImg}
                alt={productName}
            />
            <div className="pc-cn">
                <p>{brand}</p>
                <p>{productName}</p>
                <p className="pc-price">
                    <span className="disc-price">₹{discPrice} </span>
                    <span className="ori-price"> ₹{oriPrice} </span>
                    <span className="dicount"> {discount}% off </span>
                </p>
                <p>
                    <span>Size </span>
                    <span>
                    {
                        size.map((item, index) => {
                            return(
                                <span>{item}{index !== size.length-1 && ","} </span>
                            );
                        })
                    }
                    </span>
                </p>
            </div>
            {
                forComp === "home" &&
                <div className="fx-c">
                {
                    cart.find((item) => item === product) ?
                    <Link 
                        className="add-to-cart-btn fx-r"
                        to={"/cart"}
                    >
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span>Go to Cart</span>
                    </Link> :
                    <button 
                        className="add-to-cart-btn fx-r"
                        onClick={() => cartDispatch({ type: "ADD_TO_CART", payload: product })}
                    > 
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span>Add to Cart</span>
                    </button>
                }
                </div>
            }
            {
                forComp === "cart-items" &&
                <div className="fx-c cart-btn-cn">
                    <button 
                        className="add-to-cart-btn fx-r"
                        onClick={() => cartDispatch({ type: "REMOVE_FROM_CART", payload: product })}
                    > 
                        <span>Remove from Cart</span>
                    </button>
                    <button 
                        className="add-to-cart-btn fx-r"
                        onClick={() => cartDispatch({ type: "SAVE_FOR_LATER", payload: product })}
                    > 
                        <span>Save for Later</span>
                    </button>
                </div>
            }
            {
                forComp === "save-for-later" &&
                <div className="fx-c cart-btn-cn">
                    <button 
                        className="add-to-cart-btn fx-r"
                        onClick={() => cartDispatch({ type: "MOVE_TO_CART", payload: product })}
                    > 
                        <span>Move to Cart</span>
                    </button>
                    <button 
                        className="add-to-cart-btn fx-r"
                        onClick={() => cartDispatch({ type: "DELETE_FROM_SAVE_FOR_LATER", payload: product })}
                    > 
                        <span>Delete Item</span>
                    </button>
                </div>
            }
        </div>
    );
}