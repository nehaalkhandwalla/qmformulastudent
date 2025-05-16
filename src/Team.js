import React from 'react';
import './App.css';
// import the photos
import photos from './assets/photos';

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
            {/* from photos, show the first photo */}
            <img src={photos.Anastacia} alt="team member" className='team_member_img' />
                <p className='team-role'>Team Principal</p>
                <p>Anastacia Ogilvie</p>
                
            </div>
            <div className="team-member">
            <img src={photos.Titouan} alt="team member" className='team_member_img' />
                <p className='team-role'>EV Chief Engineer</p>
                <p>Titouan Reynaud</p>
                
            </div>
            <div className="team-member">
            <img src={photos.Justin} alt="team member" className='team_member_img' />
                <p className='team-role'>IC Chief Engineer</p>
                <p>Justin Gomez</p>
                
            </div>
            <div className="team-member">
                <img src={photos.Zara} alt="team member" className='team_member_img' />
                <p className='team-role'>Head of Operations</p>
                <p>Zara Sanni</p>
            </div>
            <div className="team-member">
                <img src={photos.Ainiy} alt="team member" className='team_member_img' />
                <p className='team-role'>Head of Marketing</p>
                <p>Ainiy Monoarfa</p>
            </div>
            <div className="team-member">
                <img src={photos.Chay} alt="team member" className='team_member_img' />
                <p className='team-role'>Head of Lap Time Simulation</p>
                <p>Chay Sanagala</p>
            </div>
            <div className="team-member">
                <img src={photos.Toto} alt="team member" className='team_member_img' />
                <p className='team-role'>Head of FS Sim Racing</p>
                <p>Toto Aloj</p>
            </div>
            <div className="team-member">
                <img src={photos.Vlada} alt="team member" className='team_member_img' />
                <p className='team-role'>Head of Finance</p>
                <p>Vlada Riabovolova</p>
            </div>
            <div className="team-member">
                <img src={photos.Muhtasimur} alt="team member" className='team_member_img' />
                <p className='team-role'>Head of Business</p>
                <p>Muhtasimur Rahman</p>
            </div>
            <div className="team-member">
                <img src={photos.Clarica} alt="team member" className='team_member_img' />
                <p className='team-role'>Head of Social Media</p>
                <p>Clarica Hobeika</p>
            </div>
            <div className="team-member">
                <img src={photos.Dardi} alt="team member" className='team_member_img' />
                <p className='team-role'>Head of Aerodynamics</p>
                <p>Dardi Peka</p>
            </div>
            <div className="team-member">
                <img src={photos.Mazeed} alt="team member" className='team_member_img' />
                <p className='team-role'>Head of Chassis</p>
                <p>Mazeed Towobola</p>
            </div>
            <div className="team-member">
                <img src={photos.Joseph} alt="team member" className='team_member_img' />
                <p className='team-role'>Head of Composites</p>
                <p>Joseph Itamu</p>
            </div>
            <div className="team-member">
                <img src={photos.Anton} alt="team member" className='team_member_img' />
                <p className='team-role'>Head of Drivetrain</p>
                <p>Anton Wiechecki</p>
            </div>
            <div className="team-member">
                <img src={photos.Ahmed} alt="team member" className='team_member_img' />
                <p className='team-role'>Head of Electronics</p>
                <p>Ahmed Marzouk</p>
            </div>
            <div className="team-member">
                <img src={photos.Yaz} alt="team member" className='team_member_img' />
                <p className='team-role'>Head of Powertrain</p>
                <p>Yaz Salloum</p>
            </div>
            <div className="team-member">
                <img src={photos.Gabriel} alt="team member" className='team_member_img' />
                <p className='team-role'>Head of Suspension</p>
                <p>Gabriel Valentine</p>
            </div>
            <div className="team-member">
                <img src={photos.Mohammed} alt="team member" className='team_member_img' />
                <p className='team-role'>Head of EV Chassis</p>
                <p>Mohammed Momaya</p>
            </div>
            <div className="team-member">
                <img src={photos.Ryan} alt="team member" className='team_member_img' />
                <p className='team-role'>Head of EV LV Systems</p>
                <p>Ryan Hasbani</p>
            </div>
            <div className="team-member">
                <img src={photos.Areeb} alt="team member" className='team_member_img' />
                <p className='team-role'>Head of EV HV Systems</p>
                <p>Areeb Bhatti</p>
            </div>
            <div className="team-member">
                <img src={photos.Riyad} alt="team member" className='team_member_img' />
                <p className='team-role'>Head of EV Suspension</p>
                <p>Riyad Islam</p>
            </div>
            </div>
        </div>

    </section>
    );
}export default Team;