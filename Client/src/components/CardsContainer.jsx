import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/actions";
import Card from "./Card";

const CardsContainer = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.allPosts);
  
  
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <div>
    {allPosts
      .filter((post) => post.typePost === "tech")
      .map((post) => (
        <Card key={post.id} post={post} />
      ))}
  </div>
  );
};

export default CardsContainer;




