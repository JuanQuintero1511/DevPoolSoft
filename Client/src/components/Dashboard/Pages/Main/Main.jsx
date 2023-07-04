import { useEffect } from "react";

const MainDash = ({ setSelectedLink, link }) => {
  useEffect(() => {
    setSelectedLink(link);
  }, []);

  return (
    <>

      <div>Inicio</div>

    </>
  )

}

export default MainDash;