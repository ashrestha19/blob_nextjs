import React from "react";
import { UserCircleIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";


export default function Footer() {
    return (
        <footer className="bg-white rounded-lg text-sm text-gray-600 fixed bottom-0 left-0 w-full">
  <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between">
    <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 gap-4">
      <li>
           <span className="flex items-center gap-1">
          <MapPinIcon className="h-5 w-5 text-gray-500" />
        <span>Jhamsikhel, Lalitpur, Nepal</span>
        </span>
      </li>
      <li>
        <span className="flex items-center gap-1">
          <PhoneIcon className="h-5 w-5 text-gray-500" />
          9851242144 | 9813024604
        </span>
      </li>
      <li>
         <span className="flex items-center gap-1">
          <UserCircleIcon className="h-5 w-5 text-gray-500" />
        <span>recruiter@safaltaservices.com</span>
        </span>
      </li>
    </ul>
    <span className="text-sm text-gray-600 dark:text-gray-600 text-right">
      &copy; {new Date().getFullYear()} Safalta Service. All rights reserved.
    </span>
  </div>
</footer>
    );
}