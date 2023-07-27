import { UserProps } from '@/types'
import Image from 'next/image'
import React from 'react'

interface UserCardProps {
    userInfo: UserProps,
    classes? : string,
}

const UserAvatar = ({userInfo, classes}: UserCardProps) => {
  return (
    <div className= {`${classes} flex items-center gap-2 p-2 py-5`}>
      <div className="w-10 h-10 object-contain relative">
        <Image 
          src={userInfo.profile_image}
          alt={`${userInfo.name} ${userInfo.surname}`}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div className="font-light text-sm">
        <h3 className="py-1">{`${userInfo.name} ${userInfo.surname}`}</h3>
      </div>

    </div>
  )
}

export default UserAvatar
