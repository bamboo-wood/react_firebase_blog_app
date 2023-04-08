import { useEffect, useState } from "react";
import "./Home.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Post } from "./types/post";

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const posts = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setPosts(posts as Post[]);
  };

  return (
    <div className="homePage">
      {posts.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <div className="nameAndDeleteButton">
              <h3>{post.author.username}</h3>
              <button>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
