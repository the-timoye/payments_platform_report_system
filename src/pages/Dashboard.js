import React from "react";
import PropTypes from "proptypes";
import { Sidebar } from "../layouts/dashboard/sidebar";

const Dashboard = ({ children }) => {
    return (
        <div className="dashboard">
            <Sidebar />
            {children}
        </div>
    )
};

Dashboard.propTypes = {
    children: PropTypes.object
}

export default Dashboard;