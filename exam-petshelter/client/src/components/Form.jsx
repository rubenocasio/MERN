import React from 'react'

const Form = props => {
    const {inputs, errors, handleInputChange, handleSubmit, submitValue} = props;

    return (
        <div>
            <form className="col-5 mx-auto" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" value={inputs.name} onChange={handleInputChange} className="form-control"/>
                <span className="text-danger">{errors.name ? errors.name.message: "" }</span>
            </div>
            <div className="form-group">
                <label htmlFor="type">Pet Type:</label>
                <input type="text" name="type" value={inputs.type} onChange={handleInputChange} className="form-control"/>
                <span className="text-danger">{errors.type ? errors.type.message: "" }</span>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input type="text" name="description" value={inputs.description} onChange={handleInputChange} className="form-control"/>
                <span className="text-danger">{errors.description ? errors.description.message: "" }</span>
            </div>
            <div className="form-group">
                <label htmlFor="skill1">Skill 1:</label>
                <input type="text" name="skill1" value={inputs.skill1} onChange={handleInputChange} className="form-control"/>
                <span className="text-danger">{errors.skill1 ? errors.skill1.message: "" }</span>
            </div>
            <div className="form-group">
                <label htmlFor="skill2">Skill 2:</label>
                <input type="text" name="skill2" value={inputs.skill2} onChange={handleInputChange} className="form-control"/>
                <span className="text-danger">{errors.skill2 ? errors.skill2.message: "" }</span>
            </div>
            <div className="form-group">
                <label htmlFor="skill3">Skill 3:</label>
                <input type="text" name="skill3" value={inputs.skill3} onChange={handleInputChange} className="form-control"/>
                <span className="text-danger">{errors.skill3 ? errors.skill3.message: "" }</span>
            </div>
            <input type="submit" value={submitValue} className="btn btn-primary"/>

            </form>
        </div>
    )
}

export default Form;