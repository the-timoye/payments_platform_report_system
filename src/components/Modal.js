import React from "react";
import PropTypes from "proptypes";

export const Modal = ({ title, children }) => {
    return (
        <div className="modal__overlay">
            <div className="modal__body">
                <div className="content">
                    {title && <h3 className="content__title"> {title} </h3>}

                    {children}

                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    title: PropTypes.string,
    content: PropTypes.func
}
