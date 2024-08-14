import './home.css';

import React from "react"

export const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="home-header">
                <h2 className="header-title">Welcome to Employee Tracker</h2>
                <p className="header-description">
                    Efficiently manage and track your workforce with Employee Tracker.
                    Our platform is designed to simplify employee management,
                    from monitoring attendance and performance to scheduling and
                    task assignments. Whether you're managing a small team or a
                    large organization, Employee Tracker provides the tools you
                    need to stay organized and ensure your employees are working
                    at their best.
                </p>
            </div>

            <div className="home-why">
                <h4 className='why-title'>Why Choose Employee Tracker?</h4>

                <ul className="features">
                    <li className="feature">Real-Time Insights: Get up-to-date information on employee performance and attendance.</li>
                    <li className="feature">Easy Scheduling: Create and manage employee schedules with ease.</li>
                    <li className="feature">Performance Monitoring: Track key metrics and milestones to ensure your team is meeting its goals.</li>
                    <li className="feature">User-Friendly Interface: Our platform is intuitive and easy to navigate, making employee management a breeze.</li>
                </ul>
            </div>

            <p className="home-footer">
                Start using Employee Tracker today and take the first
                step toward a more organized and productive workplace.
            </p>
        </div>
    )
}