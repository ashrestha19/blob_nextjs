import { PowerIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function Navbar() {
    return (
        <nav>
             <div className="flex h-16 w-full items-center justify-between bg-white px-4 shadow-md pl-4">
            <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-600 pl-4">Welcome Admin </h1>
            </div>
          
            {/* <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Sign in</a> */}
            {/* <a href="#" className="text-gray-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-purple-600 hover:border-purple-600">Sign Out</a> */}
            <div className="flex items-center justify-end flex-1 space-x-4">
                <button className="flex items-center rounded-md bg-emerald-500 px-5 py-2 text-white hover:bg-red-600">
                    <PowerIcon className="h-5 w-5" />
                    <span className="ml-2 px-2"> Logout</span>
                </button>
            </div>
 </div>
            </nav>
      
    );
}