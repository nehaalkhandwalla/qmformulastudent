import React from 'react';
import './Partners.css';
import partnerLogos from './assets/partner_logos.js';

// Partner logos will be imported here
// For now, we'll use placeholders

const partnersLeft = [
  { name: 'QMUL Students Union', logo: 'qmsu', link: 'https://www.qmsu.org/' },
  { name: 'SolidWorks', logo: 'solidworks', link: 'https://www.solidworks.com/' },
  { name: 'Hexagon MSC', logo: 'hexagon', link: 'https://hexagon.com/company/divisions/manufacturing-intelligence/msc-software' },
  { name: 'Bench3D', logo: 'bench3d', link: 'https://getbench3d.com/' },
  { name: 'Accu', logo: 'accu', link: 'https://www.accu.co.uk/p/50-sectors?_gl=1*12ziji2*_up*MQ..*_ga*MzA0MTExNDgxLjE3NTA1MDMxNTc.*_ga_4P9VWHTYXD*czE3NTA1MDMxNTckbzEkZzEkdDE3NTA1MDMxNjUkajUyJGwwJGgxNzk2Njk0MDk3' },
  { name: 'Ansys', logo: 'ansys', link: 'https://www.ansys.com/' },
];

const partnersRight = [
  { name: 'SEMS', logo: 'sems', link: 'https://www.sems.qmul.ac.uk/' },
  { name: 'ePlan', logo: 'eplan', link: 'https://www.eplan.com/us-en/' },
  { name: 'Portwest', logo: 'portwest', link: 'https://www.portwest.com/market/' },
];

function Partners() {
    return (
        <section className="partners-section" id="page">
            <div>
                <h2 className="Heading">Our Partners</h2>
                <div className="partners-container">
                    <div className="partners-column">
                        {partnersLeft.map((partner, index) => (
                            <a key={index} href={partner.link} target="_blank" rel="noopener noreferrer" className="partner-logo-link">
                                <img src={partnerLogos[partner.logo]} alt={`${partner.name} logo`} className="partner-logo" />
                            </a>
                        ))}
                    </div>
                    <div className="partners-column">
                        {partnersRight.map((partner, index) => (
                            <a key={index} href={partner.link} target="_blank" rel="noopener noreferrer" className="partner-logo-link">
                               <img src={partnerLogos[partner.logo]} alt={`${partner.name} logo`} className="partner-logo" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partners;