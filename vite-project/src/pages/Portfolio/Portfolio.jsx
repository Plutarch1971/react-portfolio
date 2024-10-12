import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <div className='titleTheme'>
            <h1>Projects and Assignments</h1>
            </div>
            <div className="big-box">
                <div className="box">
                    <h2></h2>
                    <div 
                        style={{
                            padding: '10px',
                            backgroundImage: "url('/Employee Payroll Tracker App.png')"
                        }}
                        className="screenshot"
                    ></div>
                </div>

                <div className="box">
                    <h2></h2>
                    <div 
                        style={{
                            backgroundImage: "url('/My Portfolio.png')"
                        }}
                        className="screenshot"
                    ></div>
                </div>

                <div className="box">
                    <h2></h2>
                    <div
                    style={{
                        padding: '20px',
                        marginBottom: '20px',
                        backgroundImage: "url('/My personal Blog Post.png')"
                    }}
                    className="screenshot"
                    ></div>
                </div>

                <div className="box">
                    <h2></h2>
                    <div
                    style={{
                        backgroundImage: "url('/My New Website.png')"
                    }}
                    className="screenshot"
                    ></div>
                </div>

                <div className="box">
                    <h2>Puzzle Game 4096</h2>
                    <div
                    style={{
                        marginBottom: '10px',
                        backgroundImage: "url('/Puzzle game 4096.png')"
                    }}
                    className="screenshot"
                    ></div>
                </div>

                <div className="box">
                    <h3>Vehicle Update Commandline App</h3>
                    <div
                    style={{
                        backgroundImage: "url('/Vehicle update application - commandline.png')"
                    }}
                    className="screenshot"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
