import { PostCardProps } from '@/types'
import React from 'react'
import { formatData } from '@/app/utils'
import Link from 'next/link'
import ClockIcon from "../../../public/icons/ClockIcon"

const RecentlyPostCard = ({post, itemsCount}: PostCardProps) => {
  return (
    <div className={`${itemsCount === 1 ? "sm:w-[50%]" : "sm:w-[23%]"}  w-[98%] min-h-[20rem] flex-col bg-white flex justify-start items-center mb-5 gap-5 shadow-sm hover:cursor-pointer`}>
       <div className="relative w-full h-56 overflow-hidden bg-cover bg-no-repeat">
          <Link href={`/blog/${post.id}`}>
            <img 
                src={post.featured_image_url}
                alt={post.title}
                className="w-full h-full rounded-lg"
              />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden
                  bg-white bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-40">
            </div>   
          </Link>
       </div>
 
       <div className="flex items-center flex-col px-5">
        <h2 className="font-semibold text-[1rem] text-gray-700 text-left">
          <Link href={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </h2>
        <span className="py-1 font-normal w-full text-sm text-gray-500 gap-1 flex items-center"> 
           <ClockIcon classes="w-6 h-6"/>
           {formatData(post.published_at, "/")}
        </span>
       </div>
  </div>
  )
}

export default RecentlyPostCard
