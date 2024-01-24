// src/components/ProductsList.js
import React from 'react';

const ProductsList = ({ category }) => {
  // Sample product data
  const products = [
    { id: 1, name: 'One-Plus', category: 'Mobiles' },
    { id: 2, name: 'Hp', category: 'Laptops' },
    { id: 3, name: 'Iphone', category: 'Mobiles' },
    { id: 4, name: 'Dell', category: 'Laptops' },
    { id: 5, name: 'Apple', category: 'Fruits' },
    // Add more products as needed
  ];

  // Filter products based on the given category
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div>
      <h2>Products List</h2>
      {filteredProducts.map((product, index) => (
        <div
          key={product.id}
          style={{
            background: index % 2 === 0 ? '#e6e6e6' : '#f0f0f0', // Alternate background colors
            padding: '10px',
            margin: '5px',
          }}
        >
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
