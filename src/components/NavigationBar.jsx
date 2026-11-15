import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function NavigationBar() {
  const { totalCount } = useCart();

  return (
    <nav style={styles.nav}>
      <h2 style={{ margin: 0 }}>LVCC Campus Store</h2>
      <div style={styles.links}>
        <Link to="/products" style={styles.link}>
          Products
        </Link>
        <Link to="/cart" style={styles.link}>
          Cart ({totalCount})
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#1e3a8a",
    color: "#ffffff",
  },
  links: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};