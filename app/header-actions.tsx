'use client'
import { Unauthenticated,Authenticated,AuthLoading } from "convex/react"
import { UserButton,SignInButton} from "@clerk/nextjs"

export function HeaderActions(){
    return <>
    <Unauthenticated>
    <SignInButton />
  </Unauthenticated>
  <Authenticated>
      <UserButton />
  </Authenticated>
  <AuthLoading>
    Laoding...
  </AuthLoading>
    </> 
}