import { PRODUCTS } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductsPage() {
  const { addToCart } = useCart();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Campus Store Products</h1>
      <div style={styles.grid}>
        {PRODUCTS.map((product) => (
          <div key={product.id} style={styles.card}>
            <span style={styles.badge}>{product.category}</span>
            <h3>{product.name}</h3>
            <p style={styles.price}>
              ₱{(product.price_centavos / 100).toFixed(2)}
            </p>
            <button onClick={() => addToCart(product)} style={styles.button}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "1.5rem",
    marginTop: "1rem",
  },
  card: {
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    padding: "1.25rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  badge: {
    fontSize: "0.75rem",
    color: "#4b5563",
    textTransform: "uppercase",
  },
  price: {
    fontWeight: "bold",
    fontSize: "1.1rem",
  },
  button: {
    padding: "0.6rem 1rem",
    backgroundColor: "#1e3a8a",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};