import React from 'react';
import './App.css';
import './Achievements.css';

function Achievements() {
    // Define achievements in chronological order (oldest to newest)
    const achievementData = [
        {
            year: 2017,
            achievements: [
                {
                    title: "Founding of QMFS",
                    description: "Queen Mary Formula Student was established as a new team at Queen Mary University of London."
                }
            ]
        },
        {
            year: 2018,
            achievements: [
                {
                    title: "First Competition Entry",
                    description: "Entered our first Formula Student UK competition at Silverstone Circuit with a concept vehicle design."
                },
                {
                    title: "Team Growth",
                    description: "Expanded the team to over 30 members from various engineering disciplines."
                }
            ]
        },
        {
            year: 2019,
            achievements: [
                {
                    title: "First Physical Prototype",
                    description: "Successfully designed and built our first physical prototype race car, QMR-01."
                }
            ]
        },
        {
            year: 2020,
            achievements: [
                {
                    title: "Virtual Competition",
                    description: "Participated in the first ever Virtual Formula Student competition during the global pandemic, placing in the top 30."
                }
            ]
        },
        {
            year: 2021,
            achievements: [
                {
                    title: "Innovation Award",
                    description: "Received the Innovation Award for our novel suspension design at Formula Student UK."
                },
                {
                    title: "Sponsorship Milestone",
                    description: "Secured our first major corporate sponsorship, enabling expanded manufacturing capabilities."
                }
            ]
        },
        {
            year: 2022,
            achievements: [
                {
                    title: "First EV Prototype",
                    description: "Launched our first electric vehicle prototype, making a successful transition from combustion engines."
                }
            ]
        },
        {
            year: 2023,
            achievements: [
                {
                    title: "Top 15 Finish",
                    description: "Achieved our best result to date with a top 15 finish at Formula Student UK, along with the Best Newcomer Award in the EV category."
                }
            ]
        },
        {
            year: 2024,
            achievements: [
                {
                    title: "International Expansion",
                    description: "Expanded our competition schedule to include Formula Student Germany, representing QMUL on the international stage."
                },
                {
                    title: "Technical Partnership",
                    description: "Established a technical partnership with a leading motorsport engineering firm for advanced simulation capabilities."
                },
                {
                    title: "Technical Partnership",
                    description: "Established a technical partnership with a leading motorsport engineering firm for advanced simulation capabilities."
                }
            ]
        },
    ];

    return (
        <section className="Achievements" id='page'>
            <div className="top-section">
                <h2 className='Heading'>
                    OUR ACHIEVEMENTS
                </h2>
                <p>
                    Queen Mary Formula Student has a history of success and innovation. Our timeline showcases the team's key achievements and milestones from our founding to present day, with our most recent accomplishments at the bottom.
                </p>
                
                <div className="timeline-container">
                    <div className="timeline-line"></div>
                    
                    {/* Map through years with their achievements */}
                    {achievementData.map((yearData, yearIndex) => (
                        <div className="timeline-year-group" key={yearData.year}>
                            <div className="timeline-date">{yearData.year}</div>
                            
                            {/* Map through achievements for this year */}
                            {yearData.achievements.map((achievement, achievementIndex) => {
                                // Determine if this achievement should be on the left or right
                                const isLeft = yearIndex % 2 === 0 ? 
                                    (achievementIndex % 2 === 0) : 
                                    (achievementIndex % 2 !== 0);
                                
                                return (
                                    <div 
                                        className={`timeline-item ${isLeft ? 'left' : 'right'}`} 
                                        key={`${yearData.year}-${achievementIndex}`}
                                    >
                                        <div className="timeline-content">
                                            <h3>{achievement.title}</h3>
                                            <p>{achievement.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                            <div className="year-marker"></div>
                            <div className="clearfix"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Achievements;