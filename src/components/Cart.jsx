import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

function Cart() {

    const {
        cart,
        removeFromCart,
        clearCart
    } = useContext(StoreContext);

    const totalPrice = cart.reduce(
        (total, item) => total + item.price,
        0
    );

    return (
        <div className="container my-5">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2>Shopping Cart</h2>

                {
                    cart.length > 0 && (

                        <button
                            className="btn btn-outline-danger"
                            onClick={clearCart}
                        >
                            Clear Cart
                        </button>

                    )
                }

            </div>

            {
                cart.length === 0 ? (

                    <div className="alert alert-warning">

                        Your cart is empty.

                    </div>

                ) : (

                    <>

                        {
                            cart.map((item) => (

                                <div
                                    className="card mb-3"
                                    key={item.id}
                                >

                                    <div className="row g-0 align-items-center">

                                        <div className="col-md-2">

                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="img-fluid rounded-start"
                                            />

                                        </div>

                                        <div className="col-md-7">

                                            <div className="card-body">

                                                <h5>{item.name}</h5>

                                                <p className="mb-0">
                                                    ₹{item.price}
                                                </p>

                                            </div>

                                        </div>

                                        <div className="col-md-3 text-center">

                                            <button
                                                className="btn btn-danger"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                Remove
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            ))
                        }

                        <div className="card p-3 bg-light">

                            <div className="d-flex justify-content-between">

                                <h4>Total Items : {cart.length}</h4>

                                <h4>Total : ₹{totalPrice}</h4>

                            </div>

                        </div>

                    </>

                )

            }

        </div>
    );

}

export default Cart;