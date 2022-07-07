import React from 'react'

const Form = (props) => {
    const { inputs, setInputs } = props;
    
    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        });
    };

    return (
        <div>
            <h1>Hook Form</h1>
            <form className="col-5 mx-auto my-5">
                <div>
                    <div className="form-group">
                        <label htmlFor="fName">First Name: </label>
                        <input type="text" className="form-control" name="fname" onChange={onChange}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="lName">Last Name: </label> 
                        <input type="text" className="form-control" name="lname" onChange={onChange}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input type="email" className="form-control" name="email" onChange={onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" className="form-control" name="password" onChange={onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Confirm Password: </label>
                        <input type="password" className="form-control" name="confirm" onChange={onChange}/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form;