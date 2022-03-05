import React, { useState } from "react";
import chartIcon from "../../assets/images/chart.svg";
import listIcon from "../../assets/images/list.svg";
import userSettingsIcon from "../../assets/images/setting.svg";
import signOutIcon from "../../assets/images/signout.svg";

export const Sidebar = () => {
    const tabs = [
        { title: "stats", url: "/dashboard", icon: chartIcon },
        { title: "listings", url: "/dashboard/listings", icon: listIcon, },
        { title: "plots", url: "/dashboard/plots", icon: userSettingsIcon },
    ];
    const [isActive, setIsActive] = useState({ [tabs[0].title]: true });
    return (
        <div className="sidebar">
            <div className="sidebar__profile-img">
            </div>

            <div className="sidebar__nav">
                {tabs.map((tab) => {
                    return (
                        <img
                            key={tab.title}
                            className={`sidebar__nav-link ${isActive[tab.title] ? "active" : ""}`}
                            src={tab.icon} alt={tab.title}
                            onClick={() => setIsActive(() => ({ [tab.title]: true }))}
                        />
                    )
                })}
                {console.log(isActive)}
            </div>

            <div className="sidebar__sign-out">
                <img src={signOutIcon} alt="sign-out" />
            </div>
        </div>
    )
}