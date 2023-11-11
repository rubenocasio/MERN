import React, { useState } from 'react';

const UserForm2 = () => {
    const [state, setState] = useState({
        fn: '',
        ln: '',
        email: '',
        pw: '',
        confirm: '',
        errors: {
            fn: null,
            ln: null,
            email: null,
            pw: null,
            confirm: null
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        let error = null;
        if (name === 'confirm') {
            error = validateInput(name, value, state.pw);
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
    
        if ((name === 'fn' || name === 'ln') && value.length < 2) {
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
    
        if (name === 'pw' && value.length < 8) {
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
                    <input type="text" className="form-control" name="fn" onChange={handleChange} />
                    {state.errors.fn && (<p className="error">{state.errors.fn}</p>)}
                </div>

                <div className="form-group">
                    <label>Last Name: </label> 
                    <input type="text" className="form-control" name="ln" onChange={handleChange} />
                    {state.errors.ln && (<p className="error">{state.errors.ln}</p>)}
                </div>

                <div className="form-group">
                    <label>Email: </label>
                    <input type="text" className="form-control" name="email" onChange={handleChange} />
                    {state.errors.email && (<p className="error">{state.errors.email}</p>)}
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="text" className="form-control" name="pw" onChange={handleChange} />
                    {state.errors.pw && (<p className="error">{state.errors.pw}</p>)}
                </div>
                <div className="form-group">
                    <label>Confirm Password: </label>
                    <input type="text" className="form-control" name="confirm" onChange={handleChange} />
                    {state.errors.confirm && (<p className="error">{state.errors.confirm}</p>)}
                </div>

                <input type="submit" value="Create User"/>
            </form>
        </div>
    );
}

export default UserForm2;
