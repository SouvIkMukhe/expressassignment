import React, { useState } from "react";
import "./login.css"; // Import the CSS file

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  function buttonClick() {
    if (email === "admin" && password === "admin123") {
      setResult("Welcome to Admin");
    } else {
      setResult("Invalid Email or Password");
    }
  }

  function handleProductSubmit() {
    // Calculate the total price of all products
    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
    setTotal(totalPrice);
  }

  function handleProductAdd() {
    // Add a new product to the list
    setProducts([...products, { name: productName, price: parseFloat(productPrice) }]);
    // Clear the input fields after adding a product
    setProductName("");
    setProductPrice("");
  }

  return (
    <>
      <div className="login-container">
        <h3 className="header">Event Handling in React JS</h3>
        <hr />
        <fieldset className="fieldset">
          <legend className="legend">User Login</legend>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input type="button" onClick={buttonClick} value="Get Message" />
          <p className="result">{result}</p>
        </fieldset>

        <fieldset className="fieldset" style={{ marginTop: "20px" }}>
          <legend className="legend">Product Details</legend>
          <label>Product Name:</label>
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <br />
          <label>Product Price:</label>
          <input
            type="number"
            placeholder="Product Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <button className="add-product" onClick={handleProductAdd}>Add Product</button>
          <br />
          {products.map((product, index) => (
            <div key={index} className="product-item">
              Product: {product.name}, Price: {product.price}
            </div>
          ))}
          <button className="submit-products" onClick={handleProductSubmit}>Submit Products</button>
          <p className="total">Total: {total}</p>
        </fieldset>
      </div>
    </>
  );
}

export default Login;
