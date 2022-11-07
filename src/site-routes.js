import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Cart } from "./pages/cart";

export const SiteRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart/>} />
        </Routes>
    );
}