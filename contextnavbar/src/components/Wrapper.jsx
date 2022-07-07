import React, { useState } from "react";
import Context from "../contexts/Context";

const Wrapper = ({ children }) => {
    const [name, setName] = useState("Ruben Ocasio");

    const handleName = (e) => {
        setName(e.target.value);
    };

    return (
        <Context.Provider value={{ name, handleName }}>{children}</Context.Provider>
    );
};

export default Wrapper;
