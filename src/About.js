import React from 'react';
import './App.css';

function About() {
    return(
    <div className='About' id='page'>
        <div className='top-section'>
            <h2 className='Heading'>
                About us
            </h2>
            <div className='Info'>
                <p>Founded in 2016 and situated within Queen Mary's University of London Mile End campus, QMFS is a London based, student-run racing society that competes against other university teams yearly at Silverstone in Formula Student UK. Our team prides itself on its diversity, bringing together students from various backgrounds and disciplines.</p>

                <p>We believe that diverse perspectives contribute to a stronger, more creative team. Our notable achievements include winning best newcomer in 2017 - our first year competing, coming 1st in Cost & Manufacturing in 2022, and placing 2nd in Cost & Manufacturing in 2023.</p>

                <p>In addition to hands-on experience in designing and building race cars, we have recently ventured into the world of sim racing. 2023 was the team's first time participating in the championship and we secured 9th out of 55 teams.</p>
            </div>
        </div>
    </div>
    );
}export default About;