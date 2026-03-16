import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
function Navbar() {

    const { cart } = useContext(CartContext);

    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark bg-none">

                 <Link to="/">IndieCart</Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <a className="nav-link">Search</a>
                        </li>
                        <li className="nav-item">
                             <Link to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/aboutus">About Us</Link>
                        </li>

                        <li className="nav-item">
                             <Link to="/products">Products</Link>
                        </li>

                        <li className="nav-item">
                            <span className="nav-link fw-bold">
                                <Link to="/cart">
                                    🛒 Cart : {cart.reduce((a, c) => a + c.quantity, 0)}
                                </Link>


                            </span>
                        </li>

                    </ul>
                </div>

            </nav>
        </div>
    );
}

export default Navbar;
