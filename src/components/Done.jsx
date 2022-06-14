import React from 'react'
import { NavLink } from 'react-router-dom'

const Done = () => {


    return (
        <>
            <div className="container my-5 content">
                <div className="row g-5">

                    <h1>Ви успішно замовили наші послуги!</h1>
                    <p>Очікуйте на дзвінок від адміністратора.</p>
                    <NavLink to="/" className="btn colorButtonCart mb-5 w-25 mx-auto">На головну</NavLink>


                </div>
            </div>
        </>
    )
}

export default Done
