import "./Product.scss";

import { productsapi } from "../../../api/products";

import prod from "../../../assets/products/earbuds-prod-1.webp";

const Product = () => {
    return (
        <>
        {

        productsapi.map((data) => {
            return (
                <div className="product-card">
                <div className="thumbnail">
                    <img src={data.url} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">{data.name}</span>
                    <span className="price">&#8377; {data.price}</span>
                </div>
            </div>
            )

        })
    }
        </>
    );
};

export default Product;
