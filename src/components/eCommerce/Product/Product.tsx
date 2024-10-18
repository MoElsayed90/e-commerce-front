import { Button } from "react-bootstrap";
import styles from "./style.module.css"
const { product, productImg } = styles;
import { TProduct } from "@customTypes/product";

const Product = ({img,price,title}:TProduct) => {
  return (
    <div className={product}>
      <div className={productImg}>
        <img
          src={img}
          alt={title}
        />
      </div>
      <h2>{title}</h2>
      <h3>{price} EGP</h3>
      <Button variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;