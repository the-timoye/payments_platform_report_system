import React, { useState } from "react";

export const Form = () => {
    const initialValues = {
        name: '',
        apiKey: ''
    }
    const [state, setState] = useState(initialValues);
    const onChange = (attribute, value) => {
        setState((prev) => ({
            ...prev,
            [attribute]: value
        }))
    }
    return (
        <form className="form">
            <div className="form__field">
                <label>What's Your Name</label>
                <input
                    name={'name'}
                    type="text"
                    className="form__input"
                    value={state.name}
                    placeholder="Janette Doe"
                    onChange={(e) => onChange('name', e.target.value)}
                />
            </div>
            <div className="form__field">
                <label>Your API key (Paystack)</label>
                <input
                    name='apiKey'
                    type="text"
                    className="form__input"
                    value={state.apiKey}
                    placeholder="PY-STK-TEST-009X9343n9340FFN0mjkQ"
                    onChange={(e) => onChange('apiKey', e.target.value)}
                />
            </div>

            <button className="button button-primary">Explore</button>
        </form>
    )
}