import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, clearCart } = useCart();

  const totalAmountCentavos = cart.reduce(
    (sum, item) => sum + item.price_centavos * item.quantity,
    0
  );

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1>Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div>
          <p>Your cart is currently empty.</p>
          <Link to="/products">Browse Products</Link>
        </div>
      ) : (
        <>
          <ul style={styles.list}>
            {cart.map((item) => (
              <li key={item.id} style={styles.item}>
                <div>
                  <strong>{item.name}</strong>
                  <p style={{ margin: "0.25rem 0", color: "#4b5563" }}>
                    ₱{(item.price_centavos / 100).toFixed(2)} × {item.quantity}
                  </p>
                </div>
                <strong>
                  ₱{((item.price_centavos * item.quantity) / 100).toFixed(2)}
                </strong>
              </li>
            ))}
          </ul>

          <div style={styles.footer}>
            <h3>Total: ₱{(totalAmountCentavos / 100).toFixed(2)}</h3>
            <button onClick={clearCart} style={styles.clearButton}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 0",
    borderBottom: "1px solid #e5e7eb",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "1.5rem",
  },
  clearButton: {
    padding: "0.6rem 1.2rem",
    backgroundColor: "#dc2626",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};