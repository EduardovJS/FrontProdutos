import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <a>Login</a>
        </Link>
        <Link to="/produtos">
          <a>Produtos</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
