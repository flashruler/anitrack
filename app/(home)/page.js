"use client"
import React from "react";
import { useAuthContext } from "/context/AuthContext";
import { redirect } from 'next/navigation'

export default function Page() {
  const { user } = useAuthContext()

    React.useEffect(() => {
        if (user == null) redirect('/signin')
    }, [user])

  return (
    <div className="bg-gray-200 w-screen h-screen">
      This is the primary homepage
    </div>
  );
}
