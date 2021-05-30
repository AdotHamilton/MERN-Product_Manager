import React, { useState, useEffect } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from '@reach/router';
export default props => {
    const { products, setProducts } = props;
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/products/')
            .then(res=>{
                setProducts(res.data.products);
                setLoaded(true);
            
            })
            .catch(err => console.log(err))
    }, [products])
    const onDeleteHandler = (id) => {
        axios.delete('http://localhost:8000/products/delete/' + id )
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <div className='text-center'>
            <h1>All Products</h1>
                {
                    loaded ?
                     props.products.map((product, key) =>{
                        return (
                            <p>
                                <Link to={'/products/'+product._id}> 
                                    {product.title} 
                                </Link>
                                <Link to={'/'}><button onClick={()=>onDeleteHandler(product._id)} className='btn btn-danger'>Delete</button></Link>
                            </p>
                        )
                        
                    }) : ""
                    
                }
            
        </div>
    )
}