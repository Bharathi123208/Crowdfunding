import React, { useState } from 'react';
 
const DonationForm = (
    {
        onDonate, goal,
        amountRaised
}) => {
const [donationAmount, setDonationAmount] = useState("");
const [goalReached, setGoalReached] = useState(false);

const handleDonate = () => {
    if (donationAmount <= 0) {
        alert('Please enter a valid donation amount.');
    } else {
        onDonate(donationAmount);
        setDonationAmount("");
    }
};
const remainingAmount = goal - amountRaised;
if (remainingAmount <= 0 && !goalReached) {
    setGoalReached(true);
}

return (
    <div className="form-section">
        {goalReached ? (
            <div className="goal-reached">
                <h2>Congratulations! Goal Reached!</h2>
                <p>Thank You for the Support</p>
            </div>
        ) : (
            <div>
                <input
                    type="number"
                    placeholder='Enter Amount here'
                    value={donationAmount}
                    onChange={
                        (e) =>
                            setDonationAmount(parseInt(e.target.value, 10))
                    } />
                <button onClick={handleDonate}>
                    Donate
                </button>
                {amountRaised >= goal && <p>
                    Congratulations! Goal achieved.
                </p>
                }
                {amountRaised < goal && (
                    <p>Remaining amount needed:
                        ${remainingAmount}</p>
                )}
            </div>
        )}
    </div>
);
};

export default DonationForm;