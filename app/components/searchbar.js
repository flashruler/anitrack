"use client"
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function SearchBar(){
    const router = useRouter();
    const searchParams = useSearchParams();
    const [query, setQuery] = React.useState(searchParams.get("q"));

    return (
          <div>
            <form
            className="grid grid-cols-4 p-3"
              action="/search"
              method="GET"
              onSubmit={(e) => {
                e.preventDefault();
                const searchParams = new URLSearchParams(
                  new FormData(e.currentTarget)
                );
                let url = searchParams.toString();
                if (url.charAt(0) === "q") {
                  url = url.slice(2, length);
                }
                router.push(`/search/${query}`);
              }}
            >
              <input
              className="h-full w-full col-span-3 rounded-md bg-gray-200"
                type="text"
                name="q"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button  className="bg-blue-200 p-1 rounded-md mx-3 w-10 flex items-center justify-center" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

              </button>
            </form>
          </div>
      );
}