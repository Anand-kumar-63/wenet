import React from 'react'
import onauthentication from '@/actions/user'
import { redirect } from 'next/navigation';
const page = async() => {
    const authresponse = await onauthentication();
    if(authresponse?.status==200 || authresponse?.status === 201 ){
        return redirect(`/dashboard/${authresponse.user?.workspaces[0].Id}`)
    }
    else if(authresponse?.status==400 || authresponse?.status==401 ){
        return redirect("/auth/sign-in")
    }
    return (
    <div>page</div>
  )
}
export default page