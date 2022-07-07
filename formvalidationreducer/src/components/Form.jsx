import React from 'react'

const Form = () => {

    const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};


return (
    <div>
        <form className="col-5 mx-auto my-5">
            <div>
            <div className="form-group">
                <label>First Name: </label> 
                <input type="text" className="form-control" name="firstName" onChange={initialState} />
                {state.firstName.error !== null && (<p className="error">{state.firstName.error}</p>)}
            </div>

            <div className="form-group">
                <label>Last Name: </label> 
                <input type="text" className="form-control" name="lastName" onChange={initialState} />
                {state.lastName.error !== null && (<p className="error">{state.lastName.error}</p>)}
            </div>

            <div className="form-group">
                <label>Email: </label>
                <input type="text" className="form-control" name="email" onChange={initialState} />
                {state.email.error !== null && (<p className="error">{state.email.error}</p>)}
            </div>

            {/* <input type="submit" value="Create User"/> */}
            </div>
        </form>
    </div>
);

}

export default Form;