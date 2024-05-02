"use client";
import React from "react";
import { useAuthContext } from "/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Page() {
  const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/signin")
    }, [user])

  return (
    <div className="bg-gray-200 w-screen h-screen">
      This is the primary homepage
    </div>
  );
}
