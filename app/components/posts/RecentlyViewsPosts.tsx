"use client"

import RecentlyPostCard from './RecentlyPostCard';
import { useSelector } from 'react-redux';
import { selectRecentlyViewedPosts } from '@/app/store/post/post.selectors';

const RecentlyViewsPosts = () => {
  const recentlyViewedPosts = useSelector(selectRecentlyViewedPosts);

  return (
    <div className="flex justify-between flex-col items-center">
       <div className="flex items-center justify-start flex-wrap gap-3">
           {recentlyViewedPosts.map((post) =>
              <RecentlyPostCard
                key={post.id}
                post={post}
                itemsCount={recentlyViewedPosts.length}
              />)
            }
        </div>
      </div>
  )
}

export default RecentlyViewsPosts
