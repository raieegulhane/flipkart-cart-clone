import "./navbar.css";
import { useCart } from "../../contexts/cart-context";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const { cartState: { cartQty }} = useCart();
    return(
        <nav className="nav-wr fx-r">
            <Link to={"/"}>
                <img 
                    className="nav-logo"
                    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                    alt="flipkart-logo"
                />
            </Link>
            <div className="cart-btn-cn">
                <div className="qty-badge">
                    { cartQty }
                </div>
                <Link 
                    to={"/cart"}
                    className="nav-link fx-r"
                >
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span>Cart</span>
                </Link>
            </div>
        </nav>
    );
}