import React from 'react';
import './Partners.css';
import partnerLogos from './assets/partner_logos.js';

const allPartners = [
    { name: 'QMUL Students Union', logo: 'qmsu', link: 'https://www.qmsu.org/' },
    { name: 'SolidWorks', logo: 'solidworks', link: 'https://www.solidworks.com/' },
    { name: 'Hexagon MSC', logo: 'hexagon', link: 'https://hexagon.com/company/divisions/manufacturing-intelligence/msc-software' },
    { name: 'Bench3D', logo: 'bench3d', link: 'https://getbench3d.com/' },
    { name: 'Accu', logo: 'accu', link: 'https://www.accu.co.uk/p/50-sectors?_gl=1*12ziji2*_up*MQ..*_ga*MzA0MTExNDgxLjE3NTA1MDMxNTc.*_ga_4P9VWHTYXD*czE3NTA1MDMxNTckbzEkZzEkdDE3NTA1MDMxNjUkajUyJGwwJGgxNzk2Njk0MDk3' },
    { name: 'Ansys', logo: 'ansys', link: 'https://www.ansys.com/' },
    { name: 'SEMS', logo: 'sems', link: 'https://www.sems.qmul.ac.uk/' },
    { name: 'ePlan', logo: 'eplan', link: 'https://www.eplan.com/us-en/' },
    { name: 'Portwest', logo: 'portwest', link: 'https://www.portwest.com/market/' },
];

function Partners() {
    // Calculate how many rows we need for 3 columns
    const columns = 3;
    const rows = Math.ceil(allPartners.length / columns);
    
    // Create a 2D array for the table
    const tableData = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            const index = i * columns + j;
            row.push(index < allPartners.length ? allPartners[index] : null);
        }
        tableData.push(row);
    }

    return (
        <section className="partners-section" id="page">
            <h2 className="Heading">Our Partners</h2>
            <div className="partners-table-container">
                <table className="partners-table">
                    <tbody>
                        {tableData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((partner, colIndex) => (
                                    <td key={colIndex} className="partner-cell">
                                        {partner ? (
                                            <a 
                                                href={partner.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="partner-logo-link"
                                            >
                                                <img 
                                                    src={partnerLogos[partner.logo]} 
                                                    alt={`${partner.name} logo`} 
                                                    className="partner-logo" 
                                                />
                                            </a>
                                        ) : (
                                            <div className="empty-cell"></div>
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Partners;