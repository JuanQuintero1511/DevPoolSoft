import { useState } from 'react';


const MercadoPagoModal = ({ closemodal }) => {




    return (
        <>

            <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-gray-900 bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg w-1/2">
                    <div className="p-4 flex items-center justify-between bg-teal-700 text-white">
                        <h3 className="text-2xl font-bold">DEVPOOL OFFERS</h3>
                        <button
                            className="text-white hover:text-gray-300 focus:outline-none"
                            onClick={closemodal}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
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
                    </div>
                    <div className="p-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-200 p-4 rounded-lg">
                                <h4 className="text-lg font-bold text-center">FIRST OFFER</h4>
                                <p className="text-sm">
                                    Power up your business with DevPool! Take advantage of our exclusive offer for advertising space on our website. We bring together the best of professional and social platforms to provide maximum visibility and attract more clients.
                                </p>
                                <p className="text-sm">
                                    What do you get with our offer? Access to a strategic space on our website, where thousands of professionals and businesses connect daily in search of opportunities. By promoting your business on DevPool, you can reach your target audience and make a greater impact in your industry.
                                </p>

                                <p className="text-sm">
                                    Don't miss out on this opportunity to empower your business with DevPool. Contact us right now to learn more details and reserve your advertising space. Together, we'll take your company to the next level!
                                </p>
                            </div>

                            <div className="bg-gray-200 p-4 rounded-lg">
                                <h4 className="text-lg font-bold text-center">SECOND OFFER</h4>
                                <p className="text-sm">
                                    In addition to our main page, we are excited to offer users the opportunity to become Premium Members. By becoming a Premium Member, you'll enjoy enhanced visibility for your posts, priority placement in search results, and a prestigious blue checkmark badge displayed on your name and profile.
                                </p>
                                <p className="text-sm">
                                    Stand out from the crowd and maximize your presence on DevPool with our Premium Membership. Your posts will reach a wider audience, attracting more attention from potential clients and employers. The blue checkmark badge adds credibility and authenticity to your profile, enhancing your professional reputation.
                                </p>
                                <p className="text-sm">
                                    Take advantage of this exclusive opportunity to elevate your presence on DevPool. Upgrade to Premium Membership today and unlock a range of benefits that will boost your online visibility and reputation within the DevPool community.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="flex justify-center p-4">
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-4"

                        >
                            <a href="https://www.mercadopago.com.co/checkout/v1/redirect?pref_id=1390863745-6ffa3ca2-9da1-4132-853a-1127a5eaf8b0" className="text-white">
                                BUY FIRST OFFER
                            </a>
                        </button>
                        <button
                            className="bg-yellow-500 text-white py-2 px-4 rounded-lg"

                        >
                           <a href="https://www.mercadopago.com.co/checkout/v1/redirect?pref_id=1390863745-55b8e754-a21e-4260-8fd1-3fe6e378d93f " className="text-white">
                                BUY SECOND OFFER
                            </a>
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default MercadoPagoModal;
