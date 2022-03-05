import React from "react";
import { MainLayout } from "../layouts/dashboard/main";
import { Overview } from "../layouts/dashboard/overview";
import { Sidebar } from "../layouts/dashboard/sidebar";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <Overview Layout={MainLayout} />
        </div>
    )
}

export default Dashboard;