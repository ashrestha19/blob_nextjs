import Footer from "@/app/ui/dashboard/footer";
import SideNav from "@/app/ui/dashboard/sidenav";
import React from "react";
import Navbar from "@/app/ui/dashboard/navbar";

export default function JobsLayout({ children }: { children: React.ReactNode }) {
    return (
<>
        <div className="flex">
            <div className="w-64 flex-none">
                <SideNav />
            </div>
             <div className="w-full md:w-auto md:fixed md:right-0 md:top-0 md:h-full md:flex md:items-start">
                    <Navbar />
                  </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                {children}
            </div>
                 
        </div>
      <div className="hidden md:block w-full">
        <Footer />
        </div> 
 
</>
      
    );
}

