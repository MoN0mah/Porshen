import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import DATA from '../Data';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index'

const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Добавити в корзину")

    const proid = useParams();
    const proDetail = DATA.filter(x => x.id == proid.id)
    const product = proDetail[0];
    console.log(product);

    const dispatch = useDispatch()

    const handleCart = (product) => {
        if (cartBtn === "Добавити в корзину") {
            dispatch(addItem(product))
            setCartBtn("Видалити з корзини")
        }
        else {
            dispatch(delItem(product))
            setCartBtn("Добавити в корзину")
        }
    }

    return (
        <div>
            <div className="container my-5 py-3 content serviceDetailItem targetDiv">
                <div className="row">
                    <div className="col-md-6 d-flex product">
                        <img src={product.img} alt={product.title} height="400px" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="display-5 fw-bold">{product.title}</h1>
                        <hr />
                        <h2 className="my-4">{product.price} UAH</h2>
                        <p className="lead">{product.desc}</p>
                        <button onClick={() => handleCart(product)} className="btn btn-outline-primary my-5">{cartBtn}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
