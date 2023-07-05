import { useState } from 'react';


const MercadoPagoModal = ({ closemodal }) => {




    return (
        <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-gray-900 bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg w-[80%]">
          <div className="p-4 flex items-center justify-between bg-teal-700 text-white">
            <h3 className="text-2xl font-bold -my-4">DEVPOOL OFFERS</h3>
            <button className="text-white hover:text-gray-300 focus:outline-none" onClick={closemodal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-200 p-4 rounded-lg">
                <h4 className="text-lg font-bold text-center">BECOME PREMIUM!</h4>
                <p className="text-sm">
                  In addition to our main page, we are excited to offer users the opportunity to become Premium Members. By becoming a Premium
                  Member, you'll enjoy enhanced visibility for your posts, priority placement in search results, and a prestigious blue checkmark
                  badge displayed on your name and profile.
                </p>
                <p className="text-sm">
                  Take advantage of this exclusive opportunity to elevate your presence on DevPool. Upgrade to Premium Membership today and
                  unlock a range of benefits that will boost your online visibility and reputation within the DevPool community.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center p-4">
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg mb-2 md:mb-0 md:mr-4">
              <a href="https://www.mercadopago.com.co/checkout/v1/redirect?pref_id=1390863745-b1dc3c41-e408-4ed4-9415-f8124626dbe8" className="text-white">
                BUY PREMIUM
              </a>
            </button>
          </div>
        </div>
      </div>
      
    );
};

export default MercadoPagoModal;
