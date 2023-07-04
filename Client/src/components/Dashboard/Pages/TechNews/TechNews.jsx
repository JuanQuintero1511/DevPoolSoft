import { useEffect } from "react";

const TechNews =  ({ setSelectedLink, link }) => {
 useEffect(() => {
   setSelectedLink(link);
 }, []);


 return(
  <>
 
   <div>Noticias Tech</div>
  
  </>
 )
 
 }
 
 export default TechNews;