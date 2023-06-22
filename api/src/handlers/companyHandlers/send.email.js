const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const {GMAIL_USER,  GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GMAIL_REFRESH_TOKEN, GMAIL_REDIRECT_URI} = process.env


const sendNotification = async (email, full_name) => {
  try {
    const oAuth2Client = new google.auth.OAuth2(
      GMAIL_CLIENT_ID,
      GMAIL_CLIENT_SECRET,
      GMAIL_REDIRECT_URI 
    );

    oAuth2Client.setCredentials({ refresh_token: GMAIL_REFRESH_TOKEN });

    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: GMAIL_USER,
        clientId: GMAIL_CLIENT_ID,
        clientSecret: GMAIL_CLIENT_SECRET,
        refreshToken: GMAIL_REFRESH_TOKEN,
        accessToken: accessToken
      }
    });

    const mailOptions = {
      from: GMAIL_USER,
      to: email,
      subject: 'Welcome to DEVPOOL',
      text: `Se ha creado una nueva compañía: ${full_name}`,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Notification email sent: ' + result.response);

    return result

  } catch (error) {
    console.log('Error in sending notification email: ' + error);
  }
  
};


module.exports= { sendNotification }; 