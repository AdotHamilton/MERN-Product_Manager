import React, { useEffect, useState } from 'react';
import axios from 'axios';
const EditForm = (props) => {
    const [ product, setProduct ] = useState({});

    useEffect(()=> {
        axios.get('http://localhost:8000/products/'+props.id)
            .then(res =>setProduct(res.data))
            .catch(err =>console.log(err))
    }, [props.id])
    const [ form, setForm ] = useState({
        "title": '',
        "price": 0,
        "description": ''
    });
    const onChangeHandler = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/products/edit/'+props.id, product)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))
    };
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div className='form-group'>
                    <label htmlFor='title'>Title: </label>
                    <input className='form-control' type='text' name='title' defaultValue={product.title}  />
                </div>
                <div className='form-group'>
                    <label htmlFor='price' name='price'>Price :</label>
                    <input className='form-control' type='number' name='price' defaultValue={product.price} onChange={onChangeHandler} />
                </div>
                <div className='form-group'>
                    <label htmlFor='description'>Description:</label>
                    <input className='form-control' type='text' name='description' defaultValue={product.description} onChange={onChangeHandler} />
                </div>
                    <input className='form-control' type='submit' />
            </form>
        </div>
    )
};

export default EditForm;