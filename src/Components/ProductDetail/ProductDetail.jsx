import React from 'react';
import { useParams } from 'react-router-dom';

 function ProductDetail() {
  const { itemId } = useParams();
  return (
    <div>
      {}
      <h2>Detalles del Producto</h2>
      <p>Producto ID: {itemId}</p>
      {}
    </div>
  );
}

export default ProductDetail;
