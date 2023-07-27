"use client"
import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import Pagination from '../Pagination'
import Loading from '../Loading'
import { PostProps } from '@/types'

const Posts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<PostProps[] | []>([]);
  const itemsPerPage = 5; 

  // Find the first loading data
  useEffect(() => {
    const fetchData =  async () => {
       // Send data to API route 
       const res = await fetch(`http://localhost:3000/api/blogs/1`);
       const result = await res.json();
       setPosts(result.data);
       setLoading(false); 
       };
       fetchData();
     }, [])

  const handlePageChange = async (pageNumber: number) => {
      setCurrentPage(pageNumber);
      setLoading(true);
      setTimeout(async () => {
          // Send data to API route 
          const res = await fetch(`http://localhost:3000/api/blogs/${pageNumber}`);
          const result = await res.json();
          setPosts(result.data);
          setLoading(false);
      }, 500);
  };
  
  // Conditional rendering when data is still loading
  if (loading) {
    return <Loading/>;
  }

 return (
    <div className="flex justify-between flex-col items-center">
      <div className="flex items-center flex-wrap">
        {posts.map((post) =>
          <PostCard
              key={post.id}
              post={post}
        />)
      }
     </div>

    <div className="flex justify-center">
        <Pagination
            totalItems={itemsPerPage * 3}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
        />
     </div>
    </div>
  )
}

export default Posts
