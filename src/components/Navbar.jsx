import { FaShoppingCart, FaStore } from "react-icons/fa";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

function Navbar() {

  const { cart, search, setSearch } = useContext(StoreContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">

      <div className="container">

        <a href="#" className="navbar-brand">
          <FaStore className="me-2" />
          Rilwan Store
        </a>

        <form className="d-flex mx-auto" style={{ width: "40%" }}>

          <input
            type="search"
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </form>

        <button className="btn btn-warning">

          <FaShoppingCart className="me-2" />

          Cart

          <span className="badge bg-danger ms-2">

            {cart.length}

          </span>

        </button>

      </div>

    </nav>
  );
}

export default Navbar;