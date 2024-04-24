"use client";
import { useAuthContext } from "../../context/AuthContext";
import getDocument from "../../firebase/firestore/getData";
import { useRouter } from "next/navigation";
import React from "react";
import { Suspense } from 'react';
import { useState, useEffect } from "react";

export default function Page() {
  const { user } = useAuthContext();
  const [data, setData] = useState([]);
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDocument("users", user.uid);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user]);

  if(data.data){
    return (
        <div className="flex flex-col items-center w-screen">
            <img className="w-screen h-72 object-cover object-center" src="https://assets-prd.ignimgs.com/2022/10/21/personablogroll-thumbnail-1666349446827.jpg"></img>
          <div className="flex flex-col w-screen h-auto items-center bg-white">
            <h1>Welcome, {data.data.username.stringValue}</h1>
          </div>
        </div>
      );
  }
 else return null
}
