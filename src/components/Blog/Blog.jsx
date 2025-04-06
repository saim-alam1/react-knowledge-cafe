import React from 'react';

const Blog = ({ blog }) => {
  // console.log(props.blog);
  // const { blog } = props;
  console.log(blog);
  return (
    <div className='m-2'>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={blog.cover} alt="Cards" />
        </figure>
        <div className="card-body">
          <div className="author flex justify-around items-center">
            <h3>{blog.author}</h3>
            <img className='w-12' src={blog.author_img
            } alt="" />
          </div>

          <h2 className="card-title">{blog.title}</h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

          {
            blog.hashtags.map(hash => <p>{hash}</p>)
          }

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Mark As Read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;