import React from "react";
import { Mail } from 'lucide-react';
import { LockKeyhole } from 'lucide-react';

export default function SignUp() {
    return <div className="w-full h-full flex justify-center items-center">
        <div className=" rounded-xl w-96 h-3/5 bg-slate-500 text-center">
            <h1 className="text-3xl my-10">Sign Up</h1>
            <form action="post" className="">
                <div className="flex justify-center gap-4 mb-8 bg-slate-100 mx-10 py-2 rounded-xl">
                    <Mail size={40}/>
                    <input className="bg-transparent border-0 border-none" type="text" placeholder="Name" required/>
                </div>
                <div className="flex justify-center gap-4 mb-8 bg-slate-100 mx-10 py-2 rounded-xl">
                    <Mail size={40}/>
                    <input className="bg-transparent border-0 border-none" type="email" placeholder="Email" required/>
                </div>
                <div className="flex justify-center gap-4 mb-8 bg-slate-100 mx-10 py-2 rounded-xl">
                    <LockKeyhole size={40}/>
                    <input className="bg-transparent border-0 border-none" type="password" placeholder="Password" required/>
                </div>
                <button className="bg-slate-800 w-32 h-10 rounded-full mb-3 hover:bg-sky-700">Login</button>
            </form>
        </div>
    </div>; 
}
