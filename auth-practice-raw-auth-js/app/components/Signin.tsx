'use client'
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react";

export const Signin = () => {
  const{data:session}=useSession()
  if (session&&session.user){
    return(
        <div>
        <p>{session.user.name}</p>
        <button onClick={()=>signOut()}>Sign Out</button>
        </div>
    )
  }
    return (
    <div>
        <button onClick={async()=>{
            await signIn()}}>Sign in</button>
    </div>
  )
}
