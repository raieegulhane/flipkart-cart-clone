import "./product-listing.css";
import { ProductCard } from "..";

export const ProductListing = ({ db, forComp }) => {
    return(
        <main className="pl-wr">
            <div className="pl-cn fx-r">
            {
                db.map((product) => {
                    return(
                        <ProductCard 
                            product={product} 
                            forComp={forComp}
                        />
                    );
                })
            }
            </div>
        </main>
    );
}