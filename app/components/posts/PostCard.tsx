import { PostCardProps, UserProps } from '@/types'
import Image from 'next/image'
import React from 'react'
import HeartIcon from "../../../public/icons/HeartIcon"
import UserAvatar from '../users/UserAvatar'
import { formatData } from '@/app/utils'
import Link from 'next/link'

const PostCard = ({post}: PostCardProps) => {
  return (
    <div className="lg:w-[48%] w-[98%] bg-white flex sm:flex-row flex-col items-center mb-5 gap-3 transform transition-all hover:scale-105 shadow-sm hover:cursor-pointer">
       <div className="sm:w-56 h-56 w-full object-cover relative flex-shrink-0">
         <Link
           href={`/blog/${post.id}`}
           className="w-full h-full"
           >
          <Image 
              src={post.featured_image_url}
              alt={post.title}
              fill
              className="object-cover"
            />
         </Link>
       </div>

       <div className="flex items-center flex-col px-5 ">
        <h2 className="font-bold text-[1rem] text-gray-900 text-left">
          <Link href={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </h2>
        <span className="py-1 font-thin w-full block text-xs"> 
           {formatData(post.published_at, "/")}
        </span>
        <hr className="w-full h-px mt-8 bg-gray-200 border-0"/>
        <div className="w-full mt-auto py-2 flex justify-between items-center font-light text-xs gap-2">
           <p>
              <span className="px-2">0 views</span>
              <span className="px-1">0 comments</span>
           </p>
          <p className="flex justify-center items-center">
            {post.id} 
            <HeartIcon classes="w-6 h-6 text-retrocket-red"/>
          </p>
        </div>
         <UserAvatar userInfo={post.user as UserProps} classes="w-full" />
       </div>
  </div>
  )
}

export default PostCard
