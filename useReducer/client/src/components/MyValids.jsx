import React, { useReducer } from 'react';


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
    },
};

const EMAIL_REGEX = new RegExp(/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/)
const NAME_REGEX = new RegExp(/^[a-zA-z,'-. ]{2,50}$/)

function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}

const MyValids = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const {name, value} = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }

    return (
        <div>
            {JSON.stringify(state)}
            <div>
                <label>
                    <span>First Name:</span>{' '}
                    <input
                        name="firstName"
                        value={state.firstName.value}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Last Name:</span>{' '}
                    <input
                        name="lastName"
                        value={state.lastName.value}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Email:</span>{' '}
                    <input
                        name="email"
                        value={state.email.value}
                        onChange={handleChange}
                    />
                </label>
            </div>
        </div>
    );
};

export default MyValids;