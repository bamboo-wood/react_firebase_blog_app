import { useEffect, useState } from "react";
import "./Home.css";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";
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

  const handleDeletePost = async (id: string) => {
    await deleteDoc(doc(db, "posts", id));
    getPosts();
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
              {post.author.uid === auth.currentUser?.uid && (
                <button onClick={() => handleDeletePost(post.id)}>
                  Delete
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
