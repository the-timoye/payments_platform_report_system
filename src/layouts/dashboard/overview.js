import React from "react";

export const Overview = ({ Layout }) => {
    const cardItems = [
        { title: "total subscribers", count: 600 },
        { title: "amount earned", count: 8000, currency: "$" },
        { title: "total payments", count: 7000 }
    ]
    return (
        <Layout name="Timi"
            subtitle={"See all payments made by your customers"}
        >
            <div className="overview">
                <div className="overview__cards-container">
                    {cardItems.map(({ title, count, currency }) => {
                        return (
                            <div className="overview__cards-container__card">
                                <p className="title">{title}</p>
                                <p className="count"> {currency && currency}{count}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Layout>

    )
}