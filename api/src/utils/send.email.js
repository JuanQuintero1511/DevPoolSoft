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
      text:       
          `¡Bienvenido(a) ${full_name} a nuestra plataforma de búsqueda de desarrolladores web!

          Estamos encantados de contar contigo como parte de nuestra comunidad. Nuestro objetivo es brindarte una experiencia excepcional para que encuentres a los mejores talentos en desarrollo web que se ajusten a tus necesidades.

          Con nuestra plataforma, podrás explorar perfiles de desarrolladores altamente calificados, revisar su experiencia y habilidades, y conectarte directamente con aquellos que mejor se adapten a tus requisitos. Te ofrecemos una amplia gama de opciones para encontrar al candidato perfecto que impulse el crecimiento y éxito de tu empresa.

          No dudes en explorar todas las funciones y herramientas que nuestra plataforma tiene para ofrecerte. Si tienes alguna pregunta o necesitas asistencia en cualquier momento, nuestro equipo de soporte estará encantado de ayudarte.

          ¡Una vez más, te damos la bienvenida a nuestra comunidad de búsqueda de desarrolladores web! Esperamos que encuentres a los profesionales más talentosos que impulsen el éxito de tus proyectos.

          ¡Mucho éxito en tu búsqueda!

          Atentamente,
          El equipo de DevPool`,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Notification email sent: ' + result.response);

    return result

  } catch (error) {
    console.log('Error in sending notification email: ' + error);
  }
  
};


module.exports= { sendNotification }; 