import "../styles/detailsproducts.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const DetailsProducts = () => {
    const { id } = useParams();
    console.log(id);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getProduct = async () => {
            await axios
                .get("http://40e1-31-32-43-35.ngrok.io/products")
                .then(function (response) {
                    //console.log(response.data);
                    setItems(response.data);
                });
        };
        getProduct();
        console.log(items[id]);
    }, []);
    let details;
    return (
        // <main className="details p-4 container">

        //     {items.map(
        //         (item) =>
        //             item.id == id && (
        //                 <ProductCard product={items[item.id]}/>
        //             )
        //     )}
        //     {items.map(
        //         (item) =>
        //             item.id == id && (
        //                 <p className="details__description">
        //                     {item.description}
        //                 </p>
        //             )
        //     )}
        //     <div className="details__title">Details techniques</div>
        //     {items.map(
        //         (item) =>
        //             item.id == id &&
        //             ((details = item.details.split("\n")),
        //             details.map((detail) => (
        //                 <>
        //                     <p className="details__info">{detail}</p>
        //                     <br></br>
        //                 </>
        //             )))
        //     )}
        // </main>
        <>
            <div id="${product4.productId}" class="col-12 mb-3">
                {" "}
                <h2 class="color-subtext">${product4.name}</h2>{" "}
            </div>{" "}
            <div class="col-12 col-lg-4 mb-4 mb-lg-0">
                {" "}
                <div
                    id="carouselProduct"
                    class="carousel slide border"
                    data-ride="carousel"
                >
                    {" "}
                    <div class="carousel-inner">
                        {" "}
                        <div class="carousel-item active">
                            {" "}
                            <img
                                class="d-block w-100"
                                src="${product4.img1}"
                                alt="${product4.imgAlt}"
                            />{" "}
                        </div>{" "}
                        <div class="carousel-item">
                            {" "}
                            <img
                                class="d-block w-100"
                                src="${product4.img2}"
                                alt="${product4.imgAlt}"
                            />{" "}
                        </div>{" "}
                        <div class="carousel-item">
                            {" "}
                            <img
                                class="d-block w-100"
                                src="${product4.img3}"
                                alt="${product4.imgAlt}"
                            />{" "}
                        </div>{" "}
                    </div>{" "}
                    <a
                        class="carousel-control-prev"
                        href="#carouselProduct"
                        role="button"
                        data-slide="prev"
                    >
                        {" "}
                        <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>{" "}
                        <span class="sr-only">Précédant</span>{" "}
                    </a>{" "}
                    <a
                        class="carousel-control-next"
                        href="#carouselProduct"
                        role="button"
                        data-slide="next"
                    >
                        {" "}
                        <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>{" "}
                        <span class="sr-only">Suivant</span>{" "}
                    </a>{" "}
                </div>{" "}
            </div>{" "}
            <div class="col-12 col-lg-5">
                {" "}
                <p>${product4.desc}</p>{" "}
            </div>{" "}
            <div class="col-12 col-lg-3">
                {" "}
                <div class="bg-inter px-3 py-3">
                    {" "}
                    <p
                        id="priceTTC"
                        class="text-center font-weight-bold p-0 m-0"
                    >
                        ${product4.priceTTC}
                    </p>{" "}
                    <p
                        id="priceHT"
                        class="text-center font-weight-bold color-subtext"
                    >
                        ${product4.priceHT}
                    </p>{" "}
                    <input
                        type="number"
                        class="d-block w-25 w-lg-50 text-center mx-auto"
                        value="1"
                    />{" "}
                    <button class="btn-productAdd btn btn-primary d-block mx-auto mt-4">
                        <i class="fas fa-cart-plus"></i> Ajouter au Panier
                    </button>{" "}
                    <p class="color-subtext mt-2 text-center mb-0">
                        ${product4.stock} unités en stock
                    </p>{" "}
                </div>{" "}
            </div>
        </>
    );
};
export default DetailsProducts;
