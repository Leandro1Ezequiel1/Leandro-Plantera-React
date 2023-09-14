import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const generateRandomProducts = (count) => {
  const products = [];
  for (let i = 1; i <= count; i++) {
    const product = {
      id: i,
      name: `Producto ${i}`,
      price: Math.floor(Math.random() * 1000) + 1, 
      description: `Descripción del Producto ${i}`,
    };
    products.push(product);
  }
  return products;
};

function Catalog() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  const loadProductsByCategory = async (categoryId) => {
    try {
    const randomProducts = generateRandomProducts(10);
      setProducts(randomProducts);
    } catch (error) {
      console.error('Error al cargar productos', error);
    }
  };

  useEffect(() => {
    loadProductsByCategory(categoryId);
  }, [categoryId]);

  return (
    <div>
      <h2>Catálogo</h2>
      <p>Categoría seleccionada: {categoryId}</p>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>{product.name}</p>
            <p>Precio: ${product.price}</p>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalog;
