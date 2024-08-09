"use client";
import { signIn, signOut } from "next-auth/react"
import { useSession } from "next-auth/react";

export const Appbar = () => {
    const session = useSession();
    return <div>
        <div>
            <button onClick={() => signIn()}>Signin</button>
        </div>
        <div>
            <button onClick={() => signOut()}>Sign out</button>
        </div>
        <div className="flex flex-box text-center text-2xl">
            {JSON.stringify(session)}
        </div>
  </div>
}