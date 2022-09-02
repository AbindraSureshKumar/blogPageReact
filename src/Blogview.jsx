import React from "react";
import axios from "axios";

import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from "react";
import Header from "./Header";

function Blogview() {

    const params = useParams();
    const [content,newContent] = useState({});
    

    useEffect(()=>{
        loadContent();
    },[])

    let loadContent = async () => {
        try {
            let content = await axios.get(`https://5cdd0a92b22718001417c19d.mockapi.io/api/blog/${params.id}`);
            newContent(content.data);
        } catch (error) {
            
        }
    }
    let img = {link:"./assets/img/post-bg.jpg"};
  return (
    <>
      <Header content={content} img={img} ></Header>  
      <article className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <p>
                {`${content.content}`}
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default Blogview;
