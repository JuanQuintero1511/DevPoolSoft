import { useEffect } from "react";
import { connect } from "react-redux";
import { getAllPosts } from "../redux/actions";
import { NavLink } from "react-router-dom";

const Community = ({ posts, getAllPosts }) => {
  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-4">Community</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-[250px]">
        {posts.map((post) => (
          <NavLink to={`/community/${post.id}`} key={post.id}>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="mb-2">
                <span className="text-gray-600">User: </span>
                <span className="font-bold">{post.user}</span>
              </div>
              <div className="mb-2">
                <span className="text-gray-600">Title: </span>
                <span className="font-bold">{post.title}</span>
              </div>
              <div className="mb-4">
                {post.image && (
                  <img src={post.image} alt="Post Image" className="w-full h-auto rounded-lg" />
                )}
              </div>
              <div>
                <span className="text-blue-500 hover:text-blue-700 font-semibold">
                  Read More
                </span>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.allPosts,
  };
};

export default connect(mapStateToProps, { getAllPosts })(Community);



