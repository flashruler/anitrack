'use client'
import React from "react"
import signUp from "../../firebase/auth/signup"
import {useRouter} from 'next/navigation'

export default function Page(){
    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signUp(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/")
    }

    return (
    <div className="bg-slate-900 w-creen h-screen flex justify-center items-center">
        <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-2xl font-thin uppercase">Sign Up</h1>
            <form onSubmit={handleForm} className="flex flex-col items-center">
                <label htmlFor="email" className="text-white">
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} className="text-black" required type="email" name="email" id="email" placeholder="example@mail.com" />
                </label>
                <label htmlFor="password" className="text-white">
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} className="text-black" required type="password" name="password" id="password" placeholder="password" />
                </label>
                <button type="submit" className="bg-red-600 w-24 my-3">Sign up</button>
            </form>

        </div>
        
            
    </div>);
}