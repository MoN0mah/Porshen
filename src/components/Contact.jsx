import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <div className="container mb-5 content">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Виникли запитання?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src="/assets/images/contact.png" alt="Contact Us" height="300px" width="300px" />
                    </div>
                    <div className="col-md-6">
                        <form >
                            <div className="mb-3">
                                <label htmlFor="exampleForm" className="form-label">Ім'я</label>
                                <input type="text" className="form-control" id="exampleForm" placeholder="" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Електронна пошта</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Детально опишіть вашу проблему</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                            <NavLink to="/" className="btn btn-outline-primary mb-5 w-25 mx-auto">Надіслати</NavLink>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
