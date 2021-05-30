import React, { useState } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
const ProductForm = () => {
    const [ form, setForm ] = useState({
        "title": '',
        "price": 0,
        "description": ''
    });
    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/products/create', form)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))
    };
    return (
        <div className="container align-items-center">
            <h1>Add Product!</h1>
            <form onSubmit={onSubmitHandler}>
                <div className='form-group'>
                    <label htmlFor='title'>Title: </label>
                    <input className='form-control' type='text' name='title' onChange={onChangeHandler} />
                </div>
                <div className='form-group'>
                    <label htmlFor='price' name='price'>Price :</label>
                    <input className='form-control' type='number' name='price' onChange={onChangeHandler} />
                </div>
                <div className='form-group'>
                    <label htmlFor='description'>Description:</label>
                    <input className='form-control' type='text' name='description' onChange={onChangeHandler} />
                </div>
                    <input className='form-control' type='submit' />
                
            </form>
        </div>
    )
}

export default ProductForm;