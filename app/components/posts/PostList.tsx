import React from 'react'
import Posts from './Posts'
import RecentlyViewsPosts from './RecentlyViewsPosts'

const PostList = () => {
  return (
    <div className="h-auto bg-gry-100">
        <div className="flex items-center w-full">
           <span className="font-extrabold sm:text-2xl text-xl w-48 text-gray-500 italic">Latest Posts</span>
           <hr className="flex-shrink-1 w-full h-px my-8 bg-gray-200 border-0"/>
        </div>
        <Posts/>

        <div className="flex items-center w-full">
          <span className="font-extrabold sm:text-2xl text-xl w-64 text-gray-500 italic">Recently Viewed</span>
          <hr className="flex-shrink-1 w-full h-px my-8 bg-gray-200 border-0"/>
        </div>
        <RecentlyViewsPosts/>
    </div>
  )
}

export default PostList
