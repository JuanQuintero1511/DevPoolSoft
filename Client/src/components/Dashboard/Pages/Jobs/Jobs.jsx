import { useEffect } from "react";

const JobsDash =  ({ setSelectedLink, link }) => {
 useEffect(() => {
   setSelectedLink(link);
 }, []);
 return(

  <>
 
   <div>Postulaciones</div>
  
  </>
 )
 
 }
 
 export default JobsDash;