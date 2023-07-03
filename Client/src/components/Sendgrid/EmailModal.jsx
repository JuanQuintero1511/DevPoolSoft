import { useState } from 'react';
import sgMail from '@sendgrid/mail';
import axios from "axios"
// Configura las credenciales de SendGrid
sgMail.setApiKey(import.meta.env.VITE_SENDGRID);

export default function EmailModal({handleCloseEmailModal}) {
  const [senderEmail, setSenderEmail] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');


  const sendEmail = async (event) => {
    event.preventDefault();

    const emailData = {
      to: recipientEmail,
      from: senderEmail,
      subject: subject,
      text: message,
    };

    try {
      await axios.post('/v3/mail/send', emailData);
      console.log('Email sent successfully!');
      closeModal();
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <>
      <div
        id="emailModal"
        className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-sm"
      >
        <div className="bg-white p-6 rounded-md shadow-md">
        <button
              className="text-black hover:text-black focus:outline-none top-2 ml-[98%]"
              onClick={handleCloseEmailModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          <h2 className="text-xl mb-4">Enviar correo electrónico</h2>
          <form onSubmit={sendEmail}>
            <label htmlFor="senderEmail">Remitente:</label>
            <input
              type="email"
              id="senderEmail"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              required
              className="mb-2 w-full"
            />

            <label htmlFor="recipientEmail">Destinatario:</label>
            <input
              type="email"
              id="recipientEmail"
              value={recipientEmail}
              onChange={(e) => setRecipientEmail(e.target.value)}
              required
              className="mb-2 w-full"
            />

            <label htmlFor="subject">Asunto:</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="mb-2 w-full"
            />

            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mb-4 w-full"
            />

            <div className="flex justify-end">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Enviar
              </button>
            
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
