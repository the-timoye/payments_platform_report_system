import React from "react";

export const Form = () => {
    return (
        <form className="form">
            <div className="form__field">
                <label>What's Your Name</label>
                <input
                    type="text"
                    className="form__input"
                    value=""
                    placeholder="Janette Doe"
                />
            </div>
            <div className="form__field">
                <label>Your API key (Paystack)</label>
                <input
                    type="text"
                    className="form__input"
                    value=""
                    placeholder="PY-STK-TEST-009X9343n9340FFN0mjkQ"
                />
            </div>

            <button className="button button-primary">Explore</button>
        </form>
    )
}