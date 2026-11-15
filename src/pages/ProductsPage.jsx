import { useEffect, useState } from "react";
import { getProducts, sendDemoProduct } from "../api";
import { useCart } from "../context/CartContext";

export default function ProductsPage() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [postStatus, setPostStatus] = useState("");

  useEffect(() => {
    let ignore = false;

    async function loadProducts() {
      try {
        const data = await getProducts();
        if (!ignore) setProducts(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadProducts();
    return () => {
      ignore = true;
    };
  }, []);

  async function handleTestPost() {
    try {
      const res = await sendDemoProduct({ name: "LVCC Marker", price: 35 });
      setPostStatus(`${res.message}: ${res.data.name} (₱${res.data.price})`);
    } catch (err) {
      setPostStatus(`POST Error: ${err.message}`);
    }
  }

  if (loading) return <p style={{ padding: "2rem" }}>Loading products...</p>;
  if (error) return <p role="alert" style={{ padding: "2rem", color: "red" }}>Error: {error}</p>;
  if (products.length === 0) return <p style={{ padding: "2rem" }}>No products found.</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Campus Store Products</h1>
        <button onClick={handleTestPost} style={styles.button}>
          Test Preflight POST
        </button>
      </div>

      {postStatus && <p style={{ color: "#1e3a8a", fontWeight: "bold" }}>{postStatus}</p>}

      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <span style={styles.badge}>{product.category || "Campus Item"}</span>
            <h3>{product.name}</h3>
            <p style={styles.price}>₱{Number(product.price).toFixed(2)}</p>
            <button
              onClick={() =>
                addToCart({
                  ...product,
                  price_centavos: product.price * 100,
                })
              }
              style={styles.button}
            >
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