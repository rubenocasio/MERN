import React, { useState } from 'react';

const SingleStateForm = () => {
    const [state, setState] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm: '',
        errors: {
            first_name: null,
            last_name: null,
            email: null,
            password: null,
            confirm: null
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        let error = null;
        if (name === 'confirm') {
            error = validateInput(name, value, state.password);
        } else {
            error = validateInput(name, value);
        }
    
        setState(prevState => ({
            ...prevState,
            [name]: value,
            errors: {
                ...prevState.errors,
                [name]: error,
            }
        }));
    };
    

    const validateInput = (name, value, passwordValue = null) => {
        if (value.trim().length === 0) {
            return `${name} is required`;
        }
    
        if ((name === 'first_name' || name === 'last_name') && value.length < 2) {
            return `${name} must be at least 2 characters`;
        }
    
        if (name === 'email') {
            if (value.length < 8) {
                return 'Email must be at least 8 characters';
            }
            if (!/\S+@\S+\.\S+/.test(value)) {
                return 'Email is invalid';
            }
        }

        if (name === 'password' && value.length < 8) {
            return 'Password must be more than 8 characters';
        }

        if (name === 'confirm') {
            if (!passwordValue) {
                return 'Password is required for validation';
            }
        if (value !== passwordValue) {
                return 'Passwords do not match';
            }
        }
    
        return null;
    };
    

    return (
        <div>
            <form className="col-5 mx-auto my-5">
                <div className="form-group">
                    <label>First Name: </label> 
                    <input type="text" className="form-control" name="first_name" onChange={handleChange} />
                    {state.errors.first_name && (<p className="error">{state.errors.first_name}</p>)}
                </div>
                <div className="form-group">
                    <label>Last Name: </label> 
                    <input type="text" className="form-control" name="last_name" onChange={handleChange} />
                    {state.errors.last_name && (<p className="error">{state.errors.last_name}</p>)}
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="text" className="form-control" name="email" onChange={handleChange} />
                    {state.errors.email && (<p className="error">{state.errors.email}</p>)}
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="text" className="form-control" name="password" onChange={handleChange} />
                    {state.errors.password && (<p className="error">{state.errors.password}</p>)}
                </div>
                <div className="form-group">
                    <label>Confirm Password: </label>
                    <input type="text" className="form-control" name="confirm" onChange={handleChange} />
                    {state.errors.confirm && (<p className="error">{state.errors.confirm}</p>)}
                </div>
                <input type="submit" value="Create User"/>
            </form>
            <div className='state'>
                <ul>
                    <li>{state.first_name}</li>
                    <li>{state.errors.first_name}</li>
                    <li>{state.last_name}</li>
                    <li>{state.errors.last_name}</li>
                    <li>{state.email}</li>
                    <li>{state.errors.email}</li>
                    <li>{state.password}</li>
                    <li>{state.errors.password}</li>
                </ul>
            </div>
        </div>
    );
}

export default SingleStateForm;
