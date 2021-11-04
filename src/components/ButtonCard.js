import "../styles/largebutton.scss";

const ButtonCard = (props) => {
    return (
        <button
            class="snipcart-add-item"
            data-item-id={props.product.id}
            data-item-price={props.product.price}
            data-item-description={props.product.description}
            data-item-image={
                "http://40e1-31-32-43-35.ngrok.io" + props.product.images[0].url
            }
            data-item-name={props.product.name}
        >
            <i class="fas fa-cart-plus"></i>
        </button>
    );
};

export default ButtonCard;
