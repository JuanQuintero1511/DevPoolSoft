import { useEffect } from "react";
import { getAllPosts } from "../redux/actions";
import { useSelector } from "react-redux";


const JobsOffers = () => {
    useEffect(() => {
        getAllPosts();
      }, []);

      const allPosts = useSelector((state) => state.allPosts)
      console.log(allPosts)
    return(
        <div className="flex items-center justify-center min-h-screen">
           <div className="w-full sm:w-[40%] mx-auto px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl "> acá se veran las JobsOffers</div>
        </div>
    )
}

export default JobsOffers;