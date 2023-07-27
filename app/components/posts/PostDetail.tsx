'use client'
import  { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { PostProps } from '@/types'
import UserAvatar from '../users/UserAvatar'
import Loading from '../Loading'
import { useDispatch } from 'react-redux'
import { addToRecentlyViewed } from '@/app/store/post/post.slice'

const PostDetail = () => {
  const dispatch = useDispatch();
  const [post, setPost] = useState<PostProps | null>(null);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  // Find the data
   useEffect(() => {
     const fetchData =  async () => {
        // Send data to API route 
        const res = await fetch(`http://localhost:3000/api/posts/${id}`);
        const result = await res.json();
        setPost(result);
        setLoading(false); 
        };
     
        fetchData();
      }, [])
  
  // Conditional rendering when data is still loading
  if (loading) {
    return <Loading/>;
  }

  // Conditional rendering when post is not available
  if (!post) {
    return <div>Post not found.</div>;
  }
  // Add to list of recently viewd
  dispatch(addToRecentlyViewed({
      id: post.id,
      title: post.title,
      published_at: post.published_at,
      featured_image_url: post.featured_image_url.replace("images/posts/", "images/post/") 
    }));

  return (
    <div className="max-width padding-x my-1 flex justify-center flex-col border border-gray-200 shadow-sm bg-slate-100 py-5">
      <div className="flex justify-start items-center">
        <UserAvatar userInfo={post.user}/>
        <span>. 1 min read</span>
      </div>
       <div className="w-full h-56 object-contain relative">
          <Image 
                src={post.featured_image_url}
                alt={post.title}
                fill
                className="object-contain" 
          />
        </div>
       <h1 className="font-semibold text-2xl text-gray-800 py-5">
          {post.title}
        </h1>
       <p className="font-thin text-normal text-justify py-5">
         {post.content}
       </p>
    </div>
  )
}

export default PostDetail
