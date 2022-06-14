import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Checkout = () => {
    const state = useSelector((state) => state.addItem)

    var total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">{item.price} грн</span>
            </li>
        );
    }

    return (
        <>
            <div className="container my-5 serviceDetail">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary colorText">Твоя корзина</span>
                            <span className="badge bg-primary rounded-pill colorButtonCart">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {state.map(itemList)}

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Загальна сума: (грн)</span>
                                <strong>₴{total}</strong>
                            </li>
                        </ul>

                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Форма для замовлення</h4>
                        <form className="needs-validation" novalidate="">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">Ваше ім'я</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                                    <div className="invalid-feedback">
                                        Введіть коректне ім'я.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Електронна пошта</label>
                                    <input type="email" className="form-control" id="email" placeholder="" />
                                    <div className="invalid-feedback">
                                        Введіть коректний адрес алектронної пошти.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Адреса</label>
                                    <input type="text" className="form-control" id="address" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Введіть коректну адресу.
                                    </div>
                                </div>


                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">Місто</label>
                                    <select className="form-select" id="country" required="">
                                        <option value="">Оберіть...</option>
                                        <option>Львів</option>
                                        <option>Київ</option>
                                        <option>Одеса</option>
                                        <option>Харків</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Виберіть місто зі списку.
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">Індекс</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Введіть коректний індекс.
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <h4 className="mb-3">Оплата</h4>

                            <div className="row gy-3">
                                <div className="col-md-6">
                                    <label htmlFor="cc-name" className="form-label">Повне ім'я власника карти</label>
                                    <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Необхідно ввести ім'я власника карти
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="cc-number" className="form-label">Номер банківської карти</label>
                                    <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Необхідно ввести номер банківської карти
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="cc-expiration" className="form-label">Термін придатності карти</label>
                                    <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Необхідно ввести термін придатності карти
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="cc-cvv" className="form-label">CVV</label>
                                    <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Необхідно ввести CVV
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />


                            <NavLink to="/done" className="btn btn-outline-primary mb-5 w-25 mx-auto">Оплатити</NavLink>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout
