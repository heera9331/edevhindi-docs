import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/loader/loader';
import Header from '../components/Header';



const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://edevhindi.com/wp-json/wp/v2/posts');
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching WordPress posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <Loader/>;
  }

  return (
    <>
    <Header/>
    <div>
      <h1>WordPress Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      ))}
    </div>
    </>
    
  );
};

export default Blogs;
