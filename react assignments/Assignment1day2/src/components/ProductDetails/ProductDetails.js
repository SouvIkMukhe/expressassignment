// src/components/ProductDetails/ProductDetails.js
import React, { useState } from "react";
import "./ProductDetails.css";

function ProductDetails() {
  const [pname, setPname] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [total, setTotal] = useState(null);

  const handleButtonClick = () => {
    // Ensure that price and qty are numeric values
    const parsedPrice = parseFloat(price);
    const parsedQty = parseInt(qty);

    if (!isNaN(parsedPrice) && !isNaN(parsedQty)) {
      const calculatedTotal = parsedPrice * parsedQty;
      setTotal(calculatedTotal.toFixed(2)); // Keep the total to two decimal places
    } else {
      setTotal("Invalid input for price or quantity");
    }
  };

  return (
    <div className="product-details-container">
      <h3>Product Details</h3>
      <label>
        Product Name:
        <input
          type="text"
          value={pname}
          onChange={(e) => setPname(e.target.value)}
        />
      </label>
      <br />
      <label>
        Price (in Rupees):
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <br />
      <label>
        Quantity:
        <input
          type="text"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleButtonClick}>Calculate Total</button>
      <br />
      <p>
        {total !== null && (
          <>
            <strong>Total:</strong> ₹{total}
          </>
        )}
      </p>
    </div>
  );
}

export default ProductDetails;
