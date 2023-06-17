import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllPosts } from "../redux/actions";
import { Link } from "react-router-dom";
import PostCommunity from "./PostCommunity";

const Community = ({ posts, getAllPosts }) => {
  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-4">Community</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-[250px]">
        {posts.map((post) => (
          <Link to={`/${post.id_post}`} key={post.id_post}>
            <PostCommunity post={post} />
          </Link>
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




