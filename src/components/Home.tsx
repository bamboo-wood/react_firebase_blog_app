import React from "react";

const Home = () => {
  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>Title</h1>
        </div>
      </div>
      <div className="postTextContainer">
        今はReactの学習中です。これから頑張ります。
      </div>
      <div className="nameAndDeleteButton">
        <h3>@ShinCode</h3>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Home;
