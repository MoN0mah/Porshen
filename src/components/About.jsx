import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5 content serviceDetail">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">Про нас</h1>
                        <p className="lead mb-4 pb-2 textCourse">
                            Курсова робота на тему "Веб-орієнтована система бронювання послуг автосервісу Поршень"
                            <br />
                            Виконав студент групи КН-203, Павло Боднар
                        </p>
                        <p className="lead mb-4">
                            Автосервіс "Поршень"
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3 buttonColor">Зв'яжіться з нами</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
