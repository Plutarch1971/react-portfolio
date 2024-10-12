import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <h1>My Portfolio</h1>

            <div className="big-box">
                <div className="box">
                    <h2>Project 1</h2>
                    <div 
                        style={{
                            backgroundImage: "url('/Employee Payroll Tracker App.png')"
                        }}
                        className="screenshot"
                    ></div>
                </div>

                <div className="box">
                    <h2>Project 1</h2>
                    <div 
                        style={{
                            backgroundImage: "url('/My Portfolio.png')"
                        }}
                        className="screenshot"
                    ></div>
                </div>

                <div className="box">
                    <h2>Project 1</h2>
                </div>

                <div className="box">
                    <h2>Project 1</h2>
                </div>

                <div className="box">
                    <h2>Project 1</h2>
                </div>

                <div className="box">
                    <h2>Project 1</h2>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
