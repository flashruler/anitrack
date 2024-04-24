'use client'
import React from "react";
import signIn from "/firebase/auth/signin";
import { useRouter } from 'next/navigation'
import Link from "next/link";

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signIn(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/")
    }
    return (
    <div className="bg-[#0d1f2d] w-creen h-screen flex justify-center items-center">
    <div className="flex flex-col items-center justify-center">
    <svg width="182" height="60" viewBox="0 0 182 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="2" width="178" height="56" stroke="white" stroke-width="4"/>
<path d="M19.5426 45H12.9517L22.9943 15.9091H30.9205L40.9489 45H34.358L27.071 22.5568H26.8438L19.5426 45ZM19.1307 33.5653H34.6989V38.3665H19.1307V33.5653ZM68.7827 15.9091V45H63.4702L50.8139 26.6903H50.6009V45H44.4503V15.9091H49.848L62.4048 34.2045H62.6605V15.9091H68.7827ZM80.0149 15.9091V45H73.8643V15.9091H80.0149ZM85.0753 45V15.9091H91.2259V39.929H103.697V45H85.0753ZM113.921 15.9091V45H107.771V15.9091H113.921ZM134.763 24.2756C134.649 23.1297 134.161 22.2396 133.3 21.6051C132.438 20.9706 131.268 20.6534 129.791 20.6534C128.787 20.6534 127.94 20.7955 127.249 21.0795C126.557 21.3542 126.027 21.7377 125.658 22.2301C125.298 22.7225 125.118 23.2812 125.118 23.9062C125.099 24.4271 125.208 24.8816 125.445 25.2699C125.691 25.6581 126.027 25.9943 126.453 26.2784C126.879 26.553 127.372 26.7945 127.93 27.0028C128.489 27.2017 129.086 27.3722 129.72 27.5142L132.334 28.1392C133.603 28.4233 134.768 28.8021 135.828 29.2756C136.889 29.7491 137.807 30.3314 138.584 31.0227C139.36 31.714 139.962 32.5284 140.388 33.4659C140.823 34.4034 141.046 35.4782 141.055 36.6903C141.046 38.4706 140.591 40.0142 139.692 41.321C138.802 42.6184 137.514 43.6269 135.828 44.3466C134.152 45.0568 132.13 45.4119 129.763 45.4119C127.414 45.4119 125.369 45.0521 123.626 44.3324C121.893 43.6127 120.539 42.5473 119.564 41.1364C118.598 39.7159 118.091 37.9593 118.044 35.8665H123.996C124.062 36.8419 124.341 37.6562 124.834 38.3097C125.336 38.9536 126.003 39.4413 126.837 39.7727C127.679 40.0947 128.631 40.2557 129.692 40.2557C130.733 40.2557 131.638 40.1042 132.405 39.8011C133.181 39.4981 133.783 39.0767 134.209 38.5369C134.635 37.9972 134.848 37.3769 134.848 36.6761C134.848 36.0227 134.654 35.4735 134.266 35.0284C133.887 34.5833 133.328 34.2045 132.589 33.892C131.86 33.5795 130.965 33.2955 129.905 33.0398L126.737 32.2443C124.285 31.6477 122.348 30.715 120.928 29.446C119.507 28.1771 118.802 26.4678 118.811 24.3182C118.802 22.5568 119.27 21.018 120.217 19.7017C121.174 18.3854 122.485 17.358 124.152 16.6193C125.819 15.8807 127.713 15.5114 129.834 15.5114C131.993 15.5114 133.877 15.8807 135.487 16.6193C137.107 17.358 138.366 18.3854 139.266 19.7017C140.165 21.018 140.629 22.5426 140.658 24.2756H134.763ZM144.085 20.9801V15.9091H167.977V20.9801H159.07V45H152.991V20.9801H144.085Z" fill="white"/>
</svg>
    <h1 className="text-white text-2xl font-thin uppercase mt-3">Sign In</h1>
        <form onSubmit={handleForm} className="flex flex-col items-center">
            <label htmlFor="email" className="text-white">
                <p>Email</p>
                <input onChange={(e) => setEmail(e.target.value)} className="text-black" required type="email" name="email" id="email" placeholder="example@mail.com" />
            </label>
            <label htmlFor="password" className="text-white">
                <p>Password</p>
                <input onChange={(e) => setPassword(e.target.value)} className="text-black" required type="password" name="password" id="password" placeholder="password" />
            </label>
            <button type="submit" className="bg-white w-24 my-3 rounded-sm">Sign In</button>
        </form>
        <Link className="text-white text-sm font-thin uppercase mt-3 italic" href="/signup">Need to sign up? Click here</Link>
    </div>
    
        
</div>);
}

export default Page;