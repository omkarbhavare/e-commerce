import "./CartItem.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp"
import { MdClose } from "react-icons/md";
const CartItem = () => {
    return (
        <div className="cart-products">
            <div className="cart-product">
                <div className="img-container">
                    <img src={prod} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">Product Name
                    <MdClose className="close-btn" />
                    </span>
                    

                    <div className="quantity-buttons">
                        <span>-</span>
                        <span>5</span>
                        <span>+</span>
                    </div>
                    <div className="text">
                        <span>5 </span>
                        <span>x </span>
                        <span>&#8377; 1799</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
