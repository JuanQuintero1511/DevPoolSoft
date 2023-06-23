import { useState } from "react";
import MercadoPagoModal from "./MercadoPagoModal";

const MercadoPagoButton = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex items-center justify-center h-screen mt-12">
      <button className="bg-blue-400 py-4 px-4 rounded-3xl"onClick={() => setShowModal(true)}>OFFERS</button>
      {showModal && <MercadoPagoModal closemodal={closeModal} />}
    </div>
  );
};

export default MercadoPagoButton;
