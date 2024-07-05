import React, { useState } from 'react';
import DonationForm from '';
import './components/styles/App.css';
 
const Project = ({ goal, projectNumber }) => {
    const [amountRaised, setAmountRaised] = useState(0);
 
    const handleDonation = (donationAmount) => {
        const newAmount = amountRaised + donationAmount;
 
        if (amountRaised + donationAmount > goal) {
            alert(`Thank you for contributing, 
                but we need Remaining Amount.`);
            return;
        }
        if (newAmount > goal) {
            alert('Congratulations! Goal achieved.');
            // You can add additional logic here (e.g., closing donations).
        } else {
            setAmountRaised(newAmount);
        }
    };
 
    return (
        <div className="project">
            <div className="project-number">Project {projectNumber}</div>
            <h2>Project Goal: ${goal}</h2>
            <p>Amount Raised: ${amountRaised}</p>
            <DonationForm onDonate={handleDonation}
                goal={goal} amountRaised={amountRaised} />
        </div>
    );
};
 
export default Project;