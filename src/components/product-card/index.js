import "./product-card.css";

export const ProductCard = () => {
    const product = {
        id: 1,
        productName: "Full Sleeve Solid Men Casual Jacket",
        brand: "BEING HUMAN",
        oriPrice: 5999,
        discPrice: 2400,
        discount: 59,
        size: ["S", "M", "XL", "XXL"],
        fcAssured: true,
        productImg: "https://rukminim1.flixcart.com/image/832/832/xif0q/jacket/h/o/o/l-yes-bhji21514-olive-being-human-original-imaggw4q9pequ5yy.jpeg?q=70"
    }

    const {
        id,
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