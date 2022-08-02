import React from 'react'

const AuthorForm = props => {
    const { inputs,errors, handleInputChange, handleSubmit, submitValue} = props;

    return (
        <div>
            <form className="col-5 mx-auto" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="author">Author:</label>
                <input type="text" name="author" value={inputs.author} onChange={handleInputChange} className="form-control"/>
                <span className="text-danger">{errors.author ? errors.author.message: "" }</span>
            </div>
            <input type="submit" value={submitValue} className="btn btn-primary"/>

            </form>
        </div>
    )
}

export default AuthorForm;