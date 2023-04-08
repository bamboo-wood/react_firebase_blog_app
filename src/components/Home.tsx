import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>Title</h1>
        </div>
        <div className="postTextContainer">
          今はReactの学習中です。これから頑張ります。adasdasdasdas今はReactの学習中です。これから頑張ります。adasdasdasdas今はReactの学習中です。これから頑張ります。adasdasdasdas今はReactの学習中です。これから頑張ります。adasdasdasdas今はReactの学習中です。これから頑張ります。adasdasdasdas今はReactの学習中です。これから頑張ります。adasdasdasdas今はReactの学習中です。これから頑張ります。adasdasdasdas
        </div>
        <div className="nameAndDeleteButton">
          <h3>@ShinCode</h3>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
