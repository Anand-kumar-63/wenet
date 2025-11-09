import React from 'react'

type layoutprops = {
    child:React.ReactNode
}

const layout = ({child}:layoutprops) => {
  return (
    <div className='w-full h-screen flex container'>
        {child}
    </div>
  )
}
export default layout