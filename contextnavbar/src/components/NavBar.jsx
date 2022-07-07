import React, { useContext } from "react";
import Context from "../contexts/Context";

const NavBar = () => {
    const { name } = useContext(Context);
    return <div className="container">Hi {name}!</div>;
};

export default NavBar;
