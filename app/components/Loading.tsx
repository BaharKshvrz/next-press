import React from 'react'
import LoadingIcon from "../../public/icons/LoadingIcon"

const Loading = () => {
  return (
    <div className="flex justify-center">
      <LoadingIcon
       classes="inline w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
      />
      <span className="sr-only">Loading...</span>
</div>

 
  )
}

export default Loading
