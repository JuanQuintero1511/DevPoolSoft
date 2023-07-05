import { useEffect, useState } from 'react';
import sgMail from '@sendgrid/mail';
import axios, { all } from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, userLogin } from '../../redux/actions';
import Swal from 'sweetalert2';





export default function EmailModal({handleCloseEmailModal, post}) {
  const [senderEmail, setSenderEmail] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch])

  const allUsers = useSelector((state) => state.allUsers);
  const user = useSelector((state) => state.userLogin);
 
  const companyUser = allUsers.filter( (e) => e.user_datum.id_user_data === post.id_user_data);

 




  const sendEmail = async (event) => {
   
    event.preventDefault();
    handleCloseEmailModal();
    Swal.fire({
      icon: 'success',
      title: 'Submission Successful',
      text: 'Your email and CV have been successfully submitted.',
    });
     

    
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
          <h2 className="text-xl mb-4">Apply for this job!</h2>
          <form onSubmit={sendEmail}>
            <label htmlFor="senderEmail">Sender: {user.user_datum.full_name}</label>
            <br />
            
            <label htmlFor="recipientEmail" className='mt-4 mb-4'>Recipient: {companyUser[0]?.email}</label>
            
            <br />

            <label htmlFor="subject">Affair:</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="mb-2 w-full"
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mb-4 w-full"
            />
           <p>Your CV will be sent automatically.</p>

            <div className="flex justify-end">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
               SEND
              </button>
            
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
