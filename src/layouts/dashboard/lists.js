import React from "react";
import { MainLayout } from "./main";

export const Lists = () => {
    const cardItems = [
        { title: "total subscribers", count: 600 },
        { title: "amount earned", count: 8000, currency: "$" },
        { title: "total payments", count: 7000 }
    ]
    return (
        <MainLayout name="Timi"
            subtitle={"See all payments made by your customers"}
            showSections
        >
            <div className="lists">
                <div className="lists__cards-container">
                    {cardItems.map(({ title, count, currency }) => {
                        return (
                            <div className="lists__cards-container__card">
                                <p className="title">{title}</p>
                                <p className="count"> {currency && currency}{count}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="lists__charts">
                    <div className="lists__charts-main"></div>

                    <div className="lists__charts-sub"></div>
                </div>
            </div>
        </MainLayout>

    )
}