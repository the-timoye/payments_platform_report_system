import React, { useState } from "react";
import PropTypes from "proptypes";

export const Form = () => {
    const initialValues = {
        name: '',
        apiKey: ''
    }
    const [state, setState] = useState(initialValues);
    const [loading, setLoading] = useState(false);
    const onChange = (attribute, value) => {
        setState((prev) => ({
            ...prev,
            [attribute]: value
        }))
    }
    const validateForm = () => {
        if (!state.name) return false;
        if (state.apiKey.length < 12) return false;
        return true;
    }
    const onSubmit = () => {
        const canSubmit = validateForm();
        if (canSubmit) {
            setLoading(true);
        }
    }
    return (
        <form className="form">
            <div className="form__field">
                <label>What's Your Name</label>
                <input
                    name={'name'}
                    type="text"
                    disabled={loading}
                    autoComplete="off"
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
                    disabled={loading}
                    value={state.apiKey}
                    placeholder="PY-STK-TEST-009X9343n9340FFN0mjkQ"
                    onChange={(e) => onChange('apiKey', e.target.value)}
                />
            </div>

            <span className={`button ${validateForm() ? 'button-primary' : 'color-grey bg-primary-faded'}`} onClick={onSubmit}>
                {loading ?
                    <div className="loader">
                        <div />
                        <div />
                        <div />
                    </div> : 'Explore'}
            </span>
        </form>
    )
}
Form.propTypes = {
    startApiCall: PropTypes.func
}