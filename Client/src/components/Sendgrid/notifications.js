const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const { GMAIL_USER, GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GMAIL_REFRESH_TOKEN, GMAIL_REDIRECT_URI } = process.env;


export default async function sendNotification (email){


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
        accessToken: accessToken.token,
      },
    });
   
    const mailOptionsJobApplication = {
        from: GMAIL_USER,
        to: email,
        subject: `¡Te has inscrito a una oferta de trabajo en DEVPOOL!`,
        html: `
          <div style="background-color: #f2f2f2; padding: 20px;">
            <h1 style="color: #333333; text-align: center;">¡Te has inscrito a una oferta de trabajo en DEVPOOL!</h1>
            <p style="color: #333333;">¡Felicitaciones! Has dado un paso más cerca de conseguir el trabajo que deseas. Nos complace informarte que te has inscrito con éxito a una oferta de trabajo en nuestra plataforma.</p>
            
            <p style="color: #333333;">Te recomendamos que te prepares bien para la oportunidad de entrevista y, si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con el equipo de reclutamiento de la empresa.</p>
            <p style="color: #333333;">¡Te deseamos mucho éxito en el proceso de selección! Esperamos que esta oportunidad sea el comienzo de una emocionante carrera profesional para ti.</p>
            <p style="color: #333333;">Atentamente,</p>
            <p style="color: #333333;">El equipo de DevPool</p>
          </div>
        `
      };
    
    const result = await transporter.sendMail(mailOptionsJobApplication)
      console.log('Notification email sent: ' + result.response);
    
    return result

  } catch (error) {
    console.log('Error in sending notification email: ' + error);   
  }
  
};


