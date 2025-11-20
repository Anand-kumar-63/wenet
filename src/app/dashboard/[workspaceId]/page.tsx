import React from 'react'
import WorkspaceSideBar from '@/components/global/workspacsidebar'

const page = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-screen h-screen flex items-start'>
       <WorkspaceSideBar workspaceId={"scb"}/>
      </div>
      {/* <div>hey</div> */}
    </div>
  )
}

export default page