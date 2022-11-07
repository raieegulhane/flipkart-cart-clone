import "./product-listing.css";
import { products } from "../../db/products";
import { ProductCard } from "..";

export const ProductListing = () => {
    return(
        <main className="pl-wr">
            <div className="pl-cn fx-r">
            {
                products.map((product) => {
                    return(
                        <ProductCard product={product} />
                    );
                })
            }
            </div>
        </main>
    );
}