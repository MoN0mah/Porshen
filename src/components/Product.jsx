import React from 'react'
import { NavLink } from 'react-router-dom';
import DATA from '../Data'

const Product = () => {

    const cardItem = (item) => {
        return (
            <NavLink className="card my-5 py-4" to={`/products/${item.id}`}>
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body text-left">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="lead">{item.price} грн.</p>
                    <h5 className="card-title">{item.desc}</h5>
                    <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">Детальніше</NavLink>
                </div>
            </NavLink>
        );
    }

    return (
        <div>
            <div className="container py-5 serviceDetail">
                <div className="row">
                    <div className="pt-5 col-12 text-center">
                        <h1>Яка послуга необхідна?</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {DATA.map(cardItem)}
                </div>
            </div>
        </div>
    )
}

export default Product;