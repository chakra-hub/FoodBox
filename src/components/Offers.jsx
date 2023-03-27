import { Outlet } from "react-router-dom";
import FlashSale from "./FlashSale";

const Offers = () =>{
    document.title = 'FoodBox - Offers'
    return (
        <div className="offers">
            This page demonstrates the life cycle methods in class based componenets.
            <p>Open Inspect >> Console for more info</p>

            <FlashSale percent='70% OFF' till='8th March'/>
        </div>
    );
}

export default Offers