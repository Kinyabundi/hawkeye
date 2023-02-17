const AfricasTalking = require('africastalking');

// TODO: Initialize Africa's Talking

const africastalking = AfricasTalking({
  apiKey: 'c8ee2a2e9f38ae8cca5c7c883d37a17dbe7fae38c790cc9df6007c6dbd440a89', 
  username: 'hawkEyesSms'
});



module.exports = async function sendSMS() {
    
    // TODO: Send message
    try {
  const result=await africastalking.SMS.send({
    to: ['+254719461857','+254703845854','+254701262345'],
    message: 'Dear Student, the ODE class is in SPA201 at 11:00AM',
  });
  console.log(result);
} catch(ex) {
  console.error(ex);
}

};