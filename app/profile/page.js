"use client";
import { useAuthContext } from "../../context/AuthContext";
import getDocument from "../../firebase/firestore/getData";
import { useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";

export default function Page() {
  const [data, setData] = useState([]);
  const { user } = useAuthContext();
  const router = useRouter();
  const uid = getCookie("UID");

  React.useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDocument("users", uid);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user]);

  if (data.data) {
    return (
      <div className="flex flex-col items-center w-screen">
        <img
          className="w-screen h-72 object-cover object-center"
          src="https://assets-prd.ignimgs.com/2022/10/21/personablogroll-thumbnail-1666349446827.jpg"
        ></img>
        <h1>Welcome, {data.data.username.stringValue}</h1>
      </div>
    );
  } else return null;
}
