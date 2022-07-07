import React from 'react'

const Details = (props) => {
    const {fname, lname, email, password, confirm} = props.data;

    return (
        <div>
            <p>First Name: { fname }</p>
            <p>Last Name: { lname }</p>
            <p>Email: { email }</p>
            <p>Password: { password }</p>
            <p>Confirm Password: { confirm }</p>
        </div>
    )
}

export default Details;