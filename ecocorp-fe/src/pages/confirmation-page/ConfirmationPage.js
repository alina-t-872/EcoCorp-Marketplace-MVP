import React from 'react';
import './ConfirmationPage.css'; // Import your custom styles if needed

const ConfirmationPage = () => {
  const url = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/512px-Eo_circle_green_checkmark.svg.png?20200417132424";
  return (
    <div className="confirmation-page">
      <img src={url} alt="Check Icon" width="400" height="400" />
      <div className="confirmation-message">
        <h2>Thank you for your purchase</h2>
      </div>
    </div>
  );
};

export default ConfirmationPage;
