import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 py-4">

      <div className="container">

        <div className="row">

          {/* Company */}

          <div className="col-md-4 mb-3">

            <h4>Rilwan Store</h4>

            <p>
              Your one-stop destination for quality products at affordable prices.
            </p>

          </div>

          {/* Quick Links */}

          <div className="col-md-4 mb-3">

            <h5>Quick Links</h5>

            <ul className="list-unstyled">

              <li>
                <a href="#" className="text-light text-decoration-none">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="text-light text-decoration-none">
                  Products
                </a>
              </li>

              <li>
                <a href="#" className="text-light text-decoration-none">
                  Cart
                </a>
              </li>

            </ul>

          </div>

          {/* Social Icons */}

          <div className="col-md-4 mb-3">

            <h5>Follow Us</h5>

            <div className="fs-3">

              <FaFacebook className="me-3" />

              <FaInstagram className="me-3" />

              <FaTwitter className="me-3" />

              <FaGithub />

            </div>

          </div>

        </div>

        <hr />

        <div className="text-center">

          © 2026 React Store. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;