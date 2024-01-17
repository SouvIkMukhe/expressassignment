const express = require('express');
const app = express();
const port = 3002;

// Styles for better appearance
const styles = `
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0; /* Light gray background */
    margin-bottom: 60px; /* Adjust bottom margin to accommodate the fixed footer */
  }
  header, footer {
    background-color: #6BABA6;
    padding: 20px;
    text-align: center;
    color: white;
  }
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  h1 {
    color: #000000;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  label {
    margin-bottom: 8px;
  }
  input {
    margin-bottom: 16px;
    padding: 8px;
  }
  button {
    padding: 10px;
    background-color: #4caf50;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 4px;
  }
  table {
    border-collapse: collapse;
    width: 80%;
    margin-top: 20px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }
`;

// Serve a page with a form to input and display product details
app.get('/product', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Product Details</title>
        <style>${styles}</style>
      </head>
      <body>
        <header>
          <h1>Product Details</h1>
        </header>
        <form id="productForm">
          <label for="productId">Product Id:</label>
          <input type="text" id="productId" name="productId" required>

          <label for="productName">Product Name:</label>
          <input type="text" id="productName" name="productName" required>

          <label for="unitPrice">Unit Price:</label>
          <input type="text" id="unitPrice" name="unitPrice" required>

          <label for="quantity">Quantity:</label>
          <input type="text" id="quantity" name="quantity" required>

          <button type="button" onclick="submitForm()">OK</button>
        </form>

        <!-- Display product details -->
        <table id="productTable" style="display:none;">
          <tr>
            <th>Product Id</th>
            <td id="displayProductId"></td>
          </tr>
          <tr>
            <th>Product Name</th>
            <td id="displayProductName"></td>
          </tr>
          <tr>
            <th>Unit Price</th>
            <td id="displayUnitPrice"></td>
          </tr>
          <tr>
            <th>Quantity</th>
            <td id="displayQuantity"></td>
          </tr>
          <tr>
            <th>Total Amount</th>
            <td id="displayTotalAmount"></td>
          </tr>
        </table>

        <footer>
          <p>© ${new Date().getFullYear()} Product Management System</p>
        </footer>

        <script>
          function submitForm() {
            const productId = document.getElementById('productId').value;
            const productName = document.getElementById('productName').value;
            const unitPrice = document.getElementById('unitPrice').value;
            const quantity = document.getElementById('quantity').value;

            const totalAmount = unitPrice * quantity;

            // Display product details in the table
            document.getElementById('displayProductId').innerText = productId;
            document.getElementById('displayProductName').innerText = productName;
            document.getElementById('displayUnitPrice').innerText = unitPrice;
            document.getElementById('displayQuantity').innerText = quantity;
            document.getElementById('displayTotalAmount').innerText = totalAmount;

            // Show the table
            document.getElementById('productTable').style.display = 'table';
          }
        </script>
      </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/product`);
});
