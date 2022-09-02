import React from "react";
import Header from "./Header";
import List from "./List";


function Home() {

    let img = {link:"./assets/img/home-bg.jpg"};
    let content ={length:"0"};
  return (
    <div>
      <Header content={content} img={img}></Header>
      <List></List>
      
    </div>
  );
}

export default Home;
