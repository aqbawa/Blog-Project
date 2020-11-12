import React from "react";
import "./BlogCard.css";
import image from "../../img/card1.jpg";

const BlogCard = () => {
  return (
    <div className="blogcard">
      <h1>Featured Blogs</h1>
      <div className="blogcard__container">
        <div className="blogcard__contents">
          <img src={image} alt="" />
          <h2>Blog Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            deleniti cupiditate mollitia eveniet dolore aut autem rem aperiam
            rerum obcaecati.
          </p>
        </div>
        <div className="blogcard__contents">
          <img src={image} alt="" />
          <h2>Blog Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            deleniti cupiditate mollitia eveniet dolore aut autem rem aperiam
            rerum obcaecati.
          </p>
        </div>
        <div className="blogcard__contents">
          <img src={image} alt="" />
          <h2>Blog Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            deleniti cupiditate mollitia eveniet dolore aut autem rem aperiam
            rerum obcaecati.
          </p>
        </div>
        <div className="blogcard__contents">
          <img src={image} alt="" />
          <h2>Blog Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            deleniti cupiditate mollitia eveniet dolore aut autem rem aperiam
            rerum obcaecati.
          </p>
        </div>
        <div className="blogcard__contents">
          <img src={image} alt="" />
          <h2>Blog Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            deleniti cupiditate mollitia eveniet dolore aut autem rem aperiam
            rerum obcaecati.
          </p>
        </div>
        <div className="blogcard__contents">
          <img src={image} alt="" />
          <h2>Blog Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            deleniti cupiditate mollitia eveniet dolore aut autem rem aperiam
            rerum obcaecati.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
