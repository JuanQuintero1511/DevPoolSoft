import { useState } from "react";
import MercadoPagoModal from "./MercadoPagoModal";

const MercadoPagoButton = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
   
     <div className="flex items-center justify-center mt-24">
     <button onClick={() => setShowModal(true)} className="flex items-center px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg>
       PREMIUM
     </button>
     {showModal && <MercadoPagoModal closemodal={closeModal} />}
   </div>
  );
};

export default MercadoPagoButton;
