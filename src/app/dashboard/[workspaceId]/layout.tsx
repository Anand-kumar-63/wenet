import React from 'react'

type layoutprops = {
  children:React.ReactNode
}
const layout = ({children}:layoutprops) => {
  return (
    <div className='flex h-screen w-full justify-center items-center'>
        {children}
    </div>
  )
}

export default layout;