import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="about-title">ABOUT</h1>
                        <h2 className="about-subtitle">Need Amazing Design?</h2>
                        <p className="about-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo molestie. 
                        </p>
                        <button className="btn btn-primary about-button">LEARN MORE</button>
                    </div>
                    <div className="col-md-6">
                        <div className="about-image"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;