# LVCC Campus Store — React Router & Shared Cart State

- **Name:** Janelyn G. Nollora
- **Section:** ACT2

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/j-nollora/LVCC-Campus-Store
   cd campus-store-cart
   ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Run the development server**
    ```bash
    npm run dev
    ```

4. **Open the local URL** shown in the terminal.

---

## State Management Explanation
The cart state is stored centrally inside a React Context (CartContext in src/context/CartContext.jsx), which manages the cart array along with helper functions (addToCart, clearCart, and totalCount). Wrapping the root application inside <CartProvider> in App.jsx makes this state accessible anywhere in the component tree without prop drilling. Both ProductsPage and CartPage (as well as Navbar) consume this shared state using the custom useCart() hook, keeping the selected items and badge count synchronized across route changes.

---

## Screenshots
### Products Page
![Products Page](src\assets\ProductsPage.png)

### Cart Page
![Cart Page](src\assets\CartPage.png)
