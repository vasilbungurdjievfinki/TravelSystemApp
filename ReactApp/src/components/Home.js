import React, {useEffect, useState} from 'react';
import './Home.css';
import jsp1 from '../images/jsp1.jpg';
import jsp2 from '../images/jsp2.jpg';
import jsp3 from '../images/jsp3.jpg';
import jsp4 from '../images/jsp4.jpg';
import jsp5 from '../images/jsp5.jpg';
import iii from '../images/iii4.png'
import iii2 from '../images/iii2.jpg'
import iii3 from '../images/iii6.png'

import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";

function Home() {
    const [currentTruck, setCurrentTruck] = useState(1); // State to keep track of current truck image
    const [messageIndex, setMessageIndex] = useState(0); // State to keep track of message index
    const [randomText, setRandomText] = useState('Safety Comes First'); // Initial random text
    const sentences = [
        'Exploring the world, one journey at a time',
        'Where every journey begins with a smile',
        'Bringing communities closer, mile by mile',
        'Your comfort, our destination',
        'Discovering new horizons together',
        'Onboard excellence, offboard memories',
        'Connecting hearts, bridging distances',
        'Experience the joy of hassle-free travel',
        'Making every trip an adventure',
        'Crafting journeys, creating stories'
    ];


    // Function to handle clicking on the left arrow
    const handleLeftClick = () => {
        setCurrentTruck(currentTruck === 1 ? 5 : currentTruck - 1);
        setMessageIndex((messageIndex + sentences.length - 1) % sentences.length);
        setRandomText(sentences[messageIndex]);

    };

    // Function to handle clicking on the right arrow
    const handleRightClick = () => {
        setCurrentTruck(currentTruck === 5 ? 1 : currentTruck + 1);
        setMessageIndex((messageIndex + 1) % sentences.length);
        setRandomText(sentences[messageIndex]);

    };
    useEffect(() => {
        // After a delay, set opacity to 1 to reveal the new image
        const timer = setTimeout(() => {
            document.documentElement.style.setProperty('--image-opacity', '1');
        }, 150);

        document.documentElement.style.setProperty('--image-opacity', '0'); // Set opacity to 0 for transition
        return () => clearTimeout(timer); // Cleanup function
    }, [currentTruck]); // Run effect when currentTruck changes
    const navigator=useNavigate();
    function buyTickets() {
        navigator('/buses');
    }

    return (
            <div>
            <header className="header">
                <nav className="navbar">
                    <div className="logo">
                        <span className="mk">MK</span><span className="transport">Transport</span>
                    </div>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/buses">List of Buses</Link></li>
                        <li><Link to="/reservations">My Reservations</Link></li>
                    </ul>
                </nav>
            </header>

                <div className="truck-container">
                    {/* Large text covering the truck image */}
                    <div className="image-overlay">
                        <h2>{randomText}</h2>
                    </div>
                    <button onClick={buyTickets} className="buy-ticket-button">Buy Tickets</button>

                    {/* Truck image */}
                    <img
                        src={
                            currentTruck === 1 ? jsp1 :
                                currentTruck === 2 ? jsp2 :
                                    currentTruck === 3 ? jsp3 :
                                        currentTruck === 4 ? jsp4 : jsp5
                        }
                        alt={`Truck ${currentTruck}`}
                        className="truck-image"
                    />

                    {/* Navigation arrows */}
                    <div className="arrow left" onClick={handleLeftClick}></div>
                    <div className="arrow right" onClick={handleRightClick}></div>
                </div>
                <div className="random-columns">
                    <div className="column">
                        <img src={iii} alt="Image 1" className="column-image" />
                        <div className="column-content">
                        <h2>Safety First</h2>
                        <p>
                            At our company, safety is our top priority. We adhere to stringent safety protocols and standards to ensure the well-being of our passengers and staff alike. Our buses undergo regular maintenance checks and inspections to guarantee optimal performance and safety on the road. Additionally, our drivers are trained professionals who prioritize safe driving practices and passenger comfort at all times.
                        </p>
                        </div>
                    </div>
                    <div className="column">
                        <img src={iii2} alt="Image 2" className="column-image" />
                        <div className="column-content">

                        <h2>Lowest price</h2>
                        <p>
                            We believe in providing the best value for our passengers. That's why we offer the lowest prices without compromising on quality or safety. With our affordable fares, passengers can enjoy comfortable and convenient travel experiences without breaking the bank. From daily commuters to occasional travelers, we strive to make transportation accessible and affordable for everyone.
                        </p>
                    </div>
                    </div>
                    <div className="column">
                        <img src={iii3} alt="Image 3" className="column-image" />
                        <div className="column-content">

                        <h2>Always on Time</h2>
                        <p>
                            Punctuality is key to our service philosophy. We understand the importance of being on time and strive to ensure that our buses operate according to schedule. With efficient route planning and reliable transportation solutions, passengers can count on us to get them to their destinations promptly and safely. Whether it's for work, school, or leisure, we're committed to providing dependable and punctual service every time.

                        </p>
                    </div>
                    </div>
                </div>
                <div className="footer">
                    <p>Copyright @2024. Travel System App made by Vasil Bungurdjiev.</p>
                </div>


            </div>
    );
}

export default Home;
