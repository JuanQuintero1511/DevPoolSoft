import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/actions";
import OffersCards from "./OffersCards";


const JobsOffers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const posts = useSelector((state) => state.allPosts);
  console.log(posts);
  // bg-[url('./src/image/jobsearch.jpg')] bg imagen
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 bg-cover">
    <div className="grid grid-cols-3 gap-5 mt-14 py-4 mx-2">
      {posts.map((post) => (
        <OffersCards key={post.id_post} post={post} />
      ))}
    </div>
  </div>
  
  );
};

export default JobsOffers;
