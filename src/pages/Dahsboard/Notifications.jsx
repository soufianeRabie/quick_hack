import React, { useState, useEffect } from "react";

const NotificationComponent = () => {
    // Fake JSON data for 10+ notifications
    const notificationsData = [
        {
            id: 1,
            type: "reminder",
            message: "Reminder: You need to pay your electricity bill of 500 Dh by the end of this week.",
            date: "2025-01-19",
        },
        {
            id: 3,
            type: "reminder",
            message: "Reminder: Your internet subscription of 250 Dh is due on 2025-01-20.",
            date: "2025-01-17",
        },
        {
            id: 2,
            type: "alert",
            message: "Alert: Ahmed needs to pay you 1,200 Dh for the rent. Please remind him.",
            date: "2025-01-18",
        },

        {
            id: 4,
            type: "alert",
            message: "Alert: Fatima owes you 3,000 Dh for the catering service. Follow up with her.",
            date: "2025-01-16",
        },
        {
            id: 5,
            type: "reminder",
            message: "Reminder: You need to renew your gym subscription for 600 Dh by the end of this month.",
            date: "2025-01-15",
        },
        {
            id: 6,
            type: "alert",
            message: "Alert: Youssef has an unpaid invoice of 1,000 Dh for the car repair service. Notify him.",
            date: "2025-01-14",
        },
        {
            id: 7,
            type: "reminder",
            message: "Reminder: Water bill of 300 Dh is due in 3 days. Avoid late payment fees.",
            date: "2025-01-13",
        },

        {
            id: 9,
            type: "reminder",
            message: "Reminder: You have a loan repayment of 5,000 Dh due on 2025-02-01.",
            date: "2025-01-11",
        },
        {
            id: 10,
            type: "alert",
            message: "Alert: Saad has to pay 2,500 Dh for the furniture delivery. Remind him.",
            date: "2025-01-10",
        },
        {
            id: 8,
            type: "alert",
            message: "Alert: Hajar owes you 800 Dh for last month’s babysitting service.",
            date: "2025-01-12",
        },
        {
            id: 12,
            type: "alert",
            message: "Alert: Salma owes you 400 Dh for the shared taxi fare.",
            date: "2025-01-08",
        },
        {
            id: 11,
            type: "reminder",
            message: "Reminder: Car insurance payment of 1,200 Dh is due in 10 days.",
            date: "2025-01-09",
        },

    ];

    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Simulate fetching data
        setNotifications(notificationsData);
    }, []);

    const notificationStyle = (type) => {
        return type === "reminder"
            ? "bg-blue-100 text-blue-800 border border-blue-400"
            : "bg-orange-200 text-yellow-800 border border-orange-400";
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-6">Notifications</h1>
            <div className="space-y-4">
                {notifications.map((notification) => (
                    <div
                        key={notification.id}
                        className={`p-4 rounded-lg shadow-md ${notificationStyle(
                            notification.type
                        )}`}
                    >
                        <div className="flex justify-between items-center">
              <span className="font-semibold">
                {notification.type === "reminder" ? "Reminder" : "Alert"}
              </span>
                            <span className="text-sm text-gray-500">{notification.date}</span>
                        </div>
                        <p className="mt-2">{notification.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationComponent;
