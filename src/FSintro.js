import React from 'react';
import './App.css';

const FSintro = () => {
    return(
        <section className='' id='page'>
        <div className='top-section' >
            <h2 className='Heading'>
                Formula Student
            </h2>
            <div className='Info'>
                <p>Formula Student is Europe's most established educational engineering competition which uses motorsport to inspire students. </p>

                <p>Backed by industry and high-profile engineers such Patron, Ross Brawn OBE, the competition aims to develop enterprising and innovative young engineers and encourage more young people to take up a career in engineering, with over 100 university teams taking part every year. </p>

                <p>The project usually forms part of a degree-level project and is viewed by the motorsport industry as the standard for engineering graduates to meet, transitioning them from university to the workplace. It is a kite-mark for real-world engineering experience, combining practical engineering experience with soft skills including business planning and project management.</p>


                <p>More information can be found <a href="https://www.imeche.org/events/formula-student/about-formula-student" target="_blank" rel="noreferrer">here</a></p>
                {/* add link in paragraph: */}
                
            </div>
        </div>
        </section>
    );
}
export default FSintro;