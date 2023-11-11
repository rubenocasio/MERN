import { useState } from 'react';

const UserForm = (props) => {
    const [fn, setFn] = useState("");
    const [ln, setLn] = useState("");
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [confirm, setConfirm] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);  // default value of false

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        // shorthand ES6 syntax for building an object
        const newUser = { fn, ln, email, pw, confirm };
        console.log("Welcome", newUser);
        setFn("");
        setLn("");
        setEmail("");
        setPw("");
        setConfirm("");
        // updating state will change the message to be displayed in the form
        setHasBeenSubmitted(true);
    };

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    return (
        <form onSubmit={createUser}>
            <h3>{formMessage()}</h3>
            <div className="form-group">
                <label htmlFor="fn">First Name: </label>
                <input type="text" className="form-group" onChange={(e)=>setFn(e.target.value)}/>

                {
                    fn.length > 0 && fn.length < 2 ? <p>must be at least 2 characters</p> : null
                }
            </div>
            <div className="form-group">
                <label htmlFor="lName">Last Name: </label>
                <input type="text"  onChange={(e)=>setLn(e.target.value)}/>

                {
                    ln.length > 0 && ln.length < 2 ?<p>must be at least 2 characters</p>:null
                }

            </div>
            <div className="form-group">
                <label htmlFor="email">Email: </label> 
                <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
                {
                email.length > 0 && email.length < 8 ?<p>Must be at least 8 characters</p>:null
                }

            </div>
            <div className="form-group">
                <label htmlFor="password" >Password: </label>
                <input type="password" onChange={(e)=>setPw(e.target.value)}/>
                {
                pw.length < 0 && pw.length > 8 ?<p>Must be at least 8 characters long</p>:null
                }

            </div>
            <div className="form-group">
                <label htmlFor="confirm" >Confirm Password: </label>
                <input type="password" onChange={(e)=>setConfirm(e.target.value)}/>
                {
                    confirm !== "" && pw !== confirm ? <p>Password must be the same</p> : ''
                }
            </div>
            <div>
            <input type="submit" value="Create User"/>
            </div>
        </form>
    );
};

export default UserForm;
