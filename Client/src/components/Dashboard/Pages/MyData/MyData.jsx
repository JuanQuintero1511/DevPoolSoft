import { useEffect } from "react";

const  MyData= ({ setSelectedLink, link }) => {
  useEffect(() => {
    setSelectedLink(link);
  }, []);

  return (
    <>

      <h2>Mis datos</h2>

    </>
  )

}

export default MyData;