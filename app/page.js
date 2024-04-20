'use client'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation';
import React from "react";
export default function Page(){
    const router = useRouter()
    const searchParams = useSearchParams();
    const [query, setQuery] = React.useState(searchParams.get('q'));

    return(<div className="bg-gray-200 w-screen h-screen">
<div className="flex flex-col items-center justify-center">
<form
            action="/search"
            method="GET"
            onSubmit={e => {
                e.preventDefault();
                const searchParams = new URLSearchParams(
                    new FormData(e.currentTarget)
                );
                let url = searchParams.toString()
                if(url.charAt(0)==='q'){
                    url=url.slice(2,length);
                }
                router.push(`/search/${query}`)
            }}>
            <input
                type="text"
                name="q"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
           <button type="submit">submit</button>
       </form>
</div>

    </div>);}


