import React from 'react';
import './ApplicationDetails.css';

function ApplicationDetails() {
    return (
        <div className="appl-details">
            <div className="title">
                <h1>Total Applications</h1>
            </div>
            <div className="details">
                <div className="applications">
                    <div className="circle"></div>
                    <div className="text">
                        <h2>Applications</h2>
                    </div>
                    <div className="bar">
                        <div className="fill"></div>
                    </div>
                </div>
                <div className="short-listed">
                    <div className="circle"></div>
                    <div className="text">
                        <h2>Short Listed</h2>
                    </div>
                    <div className="bar">
                        <div className="fill"></div>
                    </div>
                </div>
                <div className="rejected">
                    <div className="circle"></div>
                    <div className="text">
                        <h2>Rejected</h2>
                    </div>
                    <div className="bar">
                        <div className="fill"></div>
                    </div>
                </div>
                <div className="on-hold">
                    <div className="circle"></div>
                    <div className="text">
                        <h2>On hold</h2>
                    </div>
                    <div className="bar">
                        <div className="fill"></div>
                    </div>
                </div>
                <div className="accepted">
                    <div className="circle"></div>
                    <div className="text">
                        <h2>Accepted</h2>
                    </div>
                    <div className="bar">
                        <div className="fill"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationDetails
