import Form from './components/productForm';
import SingleProductPage from './views/singleProductPage';
import Detail from './views/Detail';
import EditForm from './components/EditForm';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Router } from '@reach/router';

function App() {
  const [products, setProducts] = useState([]);
  
  return (
    <div>
      <Router>
        <Form path={'/'} setProducts={setProducts} />
      </Router>
      <Router>
        <Detail path={'/'} products={products} setProducts={setProducts} />
        <SingleProductPage path={'/products/:id'} />
        <EditForm path={'/:id/edit'} />
      </Router>
    </div>
  );
}

export default App;
