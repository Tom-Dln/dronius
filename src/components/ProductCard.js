import React from "react";
import { Link } from "react-router-dom";
import ButtonCard from "./ButtonCard";
import "../styles/productcard.scss";

const ProductCard = (props) => {
    return (
        <div className="ProductCard col-12 col-md-6 col-lg-4 pb-3">
            <div class="card rounded" id="card-1">
                <Link to={"/details/" + props.product.id}>
                    <div class="card-body" id="">
                        <a href="product.html">
                            <h5 class="card-title text-center">
                                {props.product.name}
                            </h5>
                        </a>
                        <img
                            src={
                                "http://40e1-31-32-43-35.ngrok.io" +
                                props.product.images[0].url
                            }
                            class="card-img-top"
                            alt=""
                        />
                        <div class="row pb-2">
                            <div class="col-12">
                                <p class="card-text text-center color-text">
                                    {props.product.price + " €"}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
                <ButtonCard product={props.product} />
            </div>
        </div>
    );
};

export default ProductCard;
