
// // Import the Twilio library
// const twilio = require('twilio');

// // Your Twilio account SID and auth token
// const accountSid = 'your_account_sid';
// const authToken = 'your_auth_token';

// // Create a new Twilio client
// const client = new twilio(accountSid, authToken);

// Function to generate a random OTP
// function generateOTP() {
//   return Math.floor(100000 + Math.random() * 900000);
// }

// // Send an SMS message with the OTP
// const OTP = generateOTP();
// client.messages.create({
//   body: Your OTP is: ${OTP},
//   from: 'your_twilio_phone_number',
//   to: 'recipient_phone_number'
// }).then((message) => console.log(message.sid));





// import React, { useState } from 'react';

// function OTPSender() {
//   // State to store the user's phone number
//   const [phoneNumber, setPhoneNumber] = useState('');

//   // State to store the OTP
//   const [OTP, setOTP] = useState('');

//   // Function to handle the form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Send a request to your server to send the SMS with the OTP
//     fetch('/sendOTP', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ phoneNumber })
//     })
//     .then(response => response.json())
//     .then(data => {
//       // Extract the OTP from the response
//       setOTP(data.OTP);
//     })
//     .catch(error => console.log(error));
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Phone Number:
//         <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
//       </label>
//       <button type="submit">Send OTP</button>
//       {OTP && <p>OTP: {OTP}</p>}
//     </form>
//   );
// }
// Write to Anik Rahman
