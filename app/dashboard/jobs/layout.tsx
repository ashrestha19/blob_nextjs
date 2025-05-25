import Footer from "@/app/ui/dashboard/footer";
import SideNav from "@/app/ui/dashboard/sidenav";
import React from "react";

export default function JobsLayout({ children }: { children: React.ReactNode }) {
    return (
<>
        <div className="flex">
            <div className="w-64 flex-none">
                <SideNav />
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

