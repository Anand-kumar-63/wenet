import React from 'react'
import LandingPageNavbar from './components/LandingPageNavbar'
type props = {
    child:React.ReactNode
}
const layout = ({child}:props) => {
  return (
    <div>
      <LandingPageNavbar />
      {child}
      </div>
  )
}

export default layout