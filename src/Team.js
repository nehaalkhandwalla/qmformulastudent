import React from 'react';
import './App.css';

function Team() {
    return(
    <section className="Team" id='page'>
        <div className="top-section">
        <h2 className='Heading'>
            Meet the Senior Team!
        </h2>
        <p>
        We are a collective of inspired young individuals who possess a passion for motorsports and are eager to make an impact in the future of the racing industry. The senior team works hard and prepares throughout the year to compete in Formula Student UK, where we compete against and meet teams representing universities from all over the world at the Silverstone Circuit each July to pursue various awards. 
        </p>
        {/* create a grid of team members with their names and roles */}
        <div className="team-grid">
            <div className="team-member">
                <img src="https://via.placeholder.com/150" alt="team member" />
                <p>John Doe</p>
                <p>Team Lead</p>
            </div>
            <div className="team-member">
                <img src="https://via.placeholder.com/150" alt="team member" />
                <p>Jane Doe</p>
                <p>Deputy Team Lead</p>
            </div>
            <div className="team-member">
                <img src="https://via.placeholder.com/150" alt="team member" />
                <p>John Smith</p>
                <p>Head of Design</p>
            </div>
            <div className="team-member">
                <img src="https://via.placeholder.com/150" alt="team member" />
                <p>Jane Smith</p>
                <p>Head of Business</p>
            </div>
        </div>
        </div>
    </section>
    );
}export default Team;