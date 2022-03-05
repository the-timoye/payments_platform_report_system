import React from "react";
import { MainLayout } from "../layouts/dashboard/main";
import { Sidebar } from "../layouts/dashboard/sidebar";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <MainLayout
                name={"Timi"}
                subtitle={"See all payments made by your customers"}
            />
        </div>
    )
}

export default Dashboard;