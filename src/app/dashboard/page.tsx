import React from 'react'
import onauthentication from '@/actions/user';
import { redirect } from 'next/navigation';
type props = {}
const dashboardpage = async (props:props) => {
  const auth = await onauthentication();
  if(auth?.status==201||auth?.status==200){
    return redirect(`/dashboard/${auth.user?.firstname}${auth.user?.lastname}}`)
  }
  else if(auth?.status==400 || auth?.status==404){
    return redirect("/auth/sign-in");
  }
  return (
    <div>
      dashboard
    </div>
  )
}
export default dashboardpage