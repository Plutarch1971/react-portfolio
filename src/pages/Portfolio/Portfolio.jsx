import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <div className='titleTheme'>
            <h1>Projects and Assignments</h1>
            </div>
            <div className="big-box">
                <div className="box">
                    <div 
                        style={{
                            padding: '10px',
                            backgroundImage: "url('/Employee Payroll Tracker App.png')"
                        }}
                        className="screenshot"
                    ></div>
                </div>

                <div className="box">
                    <div 
                        style={{
                            backgroundImage: "url('/My Portfolio.png')"
                        }}
                        className="screenshot"
                    ></div>
                </div>

                <div className="box">
                    <div
                    style={{
                        padding: '5px',
                        marginBottom: '20px',
                        backgroundImage: "url('/My personal Blog Post.png')"
                    }}
                    className="screenshot"
                    ></div>
                    <div>
                        <a href="https://github.com/Plutarch1971/my-personal-blog-post.git">My personal Blog Post Repo Link</a>
                    </div>
                </div>

                <div className="box">
                    <div
                    style={{
                        padding: '15px',
                        backgroundImage: "url('/weather-app-screenshot.png')"
                    }}
                    className="screenshot"
                    ></div>
                    <div style={{display:'flex', justifyContent: 'space-between'}}>
                 <a href="https://github.com/Plutarch1971/weather-dashboard.git">Repository Link</a>
                 <a href="https://weather-dashboard-s6xb.onrender.com">Deployment Link</a>
                </div>
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
                    <div>
                        <a href="https://github.com/JoeyVedder/4096.git">Puzzle Game 4096 Repository Link</a>
                    </div>
                </div>

                <div className="box">
                    <h3>Movie Tracker App</h3>
                    <div
                    style={{
                        backgroundImage: "url('/movie-tracker-green.png')"
                    }}
                    className="screenshot"
                    >
                    </div>
                 <div style={{display:'flex', justifyContent: 'space-between'}}>
                 <a href="https://github.com/Plutarch1971/movie-tracker.git">Repository Link</a>
                 <a href="https://movie-tracker-c1w4.onrender.com">Deployment Link</a>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Portfolio;
