import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";


function ProductCard({ product }) {


  const { addToCart } = useContext(StoreContext);



  return (
    <div className="card h-100 shadow-sm">


      <img
        src={product.image}
        alt={product.name}
        className="card-img-top"
        style={{
          height: "220px",
          objectFit: "cover"
        }}
      />


      <div className="card-body d-flex flex-column">


        <h5 className="card-title">
          {product.name}
        </h5>


        <p className="card-text text-muted">
          {product.description}
        </p>


        <h4 className="text-success mb-3">
          ₹{product.price}
        </h4>



        <button
          className="btn btn-primary mt-auto"
          onClick={() => addToCart(product)}
        >

          Add To Cart

        </button>


      </div>


    </div>
  );
}


export default ProductCard;