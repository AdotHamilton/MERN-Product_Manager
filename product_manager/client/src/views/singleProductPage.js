import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from '@reach/router';
const SingleProductPage = (props) => {
    const [ product, setProduct ] = useState({});
    const [ loaded, setLoaded ] = useState(false);
    useEffect(() =>{
        axios.get('http://localhost:8000/products/'+ props.id)
            .then(res => setProduct(res.data))
            .then(setLoaded(true))
            .catch(err => console.log(err));
    })
    return (
        loaded ? 
        <div className='text-center'>
            <div className='d-flex justify-content-between'><h1>{product.title}</h1><Link to={`/${product._id}/edit`}><button className='btn btn-primary'>Edit</button></Link></div>
            
            <p>price: {product.price}</p>
            <p>description: {product.description}</p>
        </div>
        : ""
    )
}

export default SingleProductPage;