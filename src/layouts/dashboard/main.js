import React, { useState } from "react";
import downarrow from "../../assets/images/downarrow.svg";
import uparrow from "../../assets/images/uparrow.svg";

export const MainLayout = ({ name, subtitle, children }) => {
    const options = [
        { title: "Subscribers", id: "subscribers" },
        { title: "Payments", id: "payments" }
    ];
    const [showOptions, setShowOptions] = useState(false);
    const [activeOption, setActiveOption] = useState(options[0]);

    const selectOption = ({ title, id }) => {
        setShowOptions(!showOptions);
        setActiveOption({ title, id });
    }
    return (
        <div className="dashboard-main">
            {name && (
                <div className="dashboard-main__header">
                    <div>
                        <h3 className="dashboard-main__header-title">Hello {name}</h3>
                        <span className="dashboard-main__header-subtitle"> {subtitle || null} </span>
                    </div>

                    <div className="dashboard-main__header-selector">
                        <p className="dashboard-main__header-selector-title"
                            onClick={() => setShowOptions(!showOptions)}
                        >
                            {activeOption.title}
                            {showOptions ?
                                <img src={uparrow} alt="less" />
                                : <img src={downarrow} alt="more" />}
                        </p>
                        {showOptions && (
                            <div className="options">
                                <ul>
                                    {options.map(({ title, id }) => {
                                        return (
                                            activeOption.id !== id && (
                                                <li key={id} onClick={() => selectOption({ title, id })}>{title}</li>
                                            )
                                        )
                                    })}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

            )}
            {children}
        </div>
    )
}