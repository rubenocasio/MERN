import React, {useState} from 'react'

function MoreForm() {
    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirm, setconfirm] = useState("");

    return (
        <div>
            <form>
            <div className="form-group">
                <label htmlFor="fName">First Name: </label>
                <input type="text" className="form-group" onChange={(e)=>setfName(e.target.value)}/>
                {
                    fName.length > 0 && fName.length < 2 ?<p>must be at least 2 characters</p>:null
                }
            </div>
            <div className="form-group">
                <label htmlFor="lName">Last Name: </label>
                <input type="text"  onChange={(e)=>setlName(e.target.value)}/>
                {
                    lName.length > 0 && lName.length < 2 ?<p>must be at least 2 characters</p>:null
                }

            </div>
            <div className="form-group">
                <label htmlFor="email">Email: </label> 
                <input type="email" onChange={(e)=>setemail(e.target.value)}/>
                {
                email.length > 0 && email.length < 8 ?<p>Must be at least 8 characters</p>:null
                }

            </div>
            <div className="form-group">
                <label htmlFor="password" >Password: </label>
                <input type="password" onChange={(e)=>setpassword(e.target.value)}/>
                {
                password.length < 0 && password.length > 8 ?<p>Must be at least 8 characters long</p>:null
                }

            </div>
            <div className="form-group">
                <label htmlFor="confirm" >Confirm Password: </label>
                <input type="password" onChange={(e)=>setconfirm(e.target.value)}/>
                {
                    confirm !== "" && password !== confirm ?<p>Password must be the same</p>:null
                }
            </div>
        </form>
        </div>
    )
}

export default MoreForm