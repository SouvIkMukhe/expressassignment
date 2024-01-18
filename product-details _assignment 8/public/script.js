function getTotal() {
    const productName = document.getElementById('productName').value;
    const unitPrice = parseFloat(document.getElementById('unitPrice').value);
    const quantity = parseInt(document.getElementById('quantity').value);
  
    if (!productName || isNaN(unitPrice) || isNaN(quantity)) {
      alert('Please provide valid input for all fields.');
      return;
    }
  
    const totalAmount = unitPrice * quantity;
  
    // Display the total amount
    document.getElementById('total-amount').innerText = `Total Amount for ${productName}: $${totalAmount}`;
  }
  