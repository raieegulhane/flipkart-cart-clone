import "./product-card.css";

export const ProductCard = ({ product }) => {
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
            <button className="add-to-cart-btn"> 
                <i className="fa-solid fa-cart-shopping"></i>
                <span>Add to Cart</span>
            </button>
        </div>
    );
}