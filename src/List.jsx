import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function List() {
  const [list, newList] = useState([]);

  useEffect(() => {
    loadContent();
  }, []);

  let loadContent = async () => {
    try {
      let blog = await axios.get(
        "https://5cdd0a92b22718001417c19d.mockapi.io/api/blog"
      );
      newList(blog.data);
    } catch (error) {}
  };

  return (
    <div>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <hr className="my-4" />
            {list.map((values) => {
              return (
                <div className="post-preview">
                  <Link to={`/blog/${values.id}`}>
                    <h2 className="post-title">{values.title}</h2>
                    <h3 className="post-subtitle">{values.description}</h3>
                  </Link>
                  <p className="post-meta">
                    Posted by
                    <a href="#!">{values.author}</a>
                    on {values.createdAt}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
