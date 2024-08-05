import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section id="intro" className="intro section">
        <div id="intro-introlab" className="introlab slide introlab-fade" data-bs-ride="introlab" data-bs-interval="5000">
                <div className='introlab-item'>
                    <img src="/assets/img/intro/intro1.jpg" alt="Lab Image" />
                    <div className="container">
                        <h2>Welcome to Research of Intelligent Software Engineer Laboratory</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <Link to="/contact" className="btn-get-started">Join with us</Link>
                    </div>
                </div>


        </div>
        </section>
    );
}

export default Home;
