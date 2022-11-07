import { ProductListing } from "../../components";
import { products } from "../../db/products";

export const Home = () => {
    return(
        <div>
            <ProductListing 
                db={products} 
                forComp={"home"}
            />
        </div>
    );
}