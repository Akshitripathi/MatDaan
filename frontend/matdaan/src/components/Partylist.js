import React from 'react';
import './Partylist.css'; 
import kamalImage from '../image/kamalImage.png'; // Import BJP image
import haathImage from '../image/haath.png'; // Import Congress image
import aapImage from '../image/AAP.png'; // Import AAP image

function Partylist() {
  return (
    <div className="party-list-container">
      <h1>Political Parties</h1>
      <div className="party-cards">
        {["BJP", "CONGRESS", "AAP"].map((party, index) => (
          <div className="party-card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <div className="party-symbol">
                  <img 
                    src={
                      party === "BJP" ? kamalImage 
                      : party === "CONGRESS" ? haathImage 
                      : party === "AAP" ? aapImage 
                      : `../image/${party.toLowerCase()}_symbol.png`
                    } 
                    alt={`${party} Symbol`} 
                  />
                </div>
                <h2>{party}</h2>
              </div>
              <div className="card-back">
                <div className="back-content">
                  <p>Information about {party}</p>
                  <p>Key policies and initiatives of {party}.</p>
                  <p>Learn more about their vision for the future.</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partylist;
