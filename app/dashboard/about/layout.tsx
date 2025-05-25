import SideNav from '@/app/ui/dashboard/sidenav';
import Footer from '@/app/ui/dashboard/footer';
import Navbar from '@/app/ui/dashboard/navbar';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
       
      <div className="w-full flex-none md:w-64">
       
        <SideNav />
      
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      <div className="w-full md:w-auto md:fixed md:right-0 md:top-0 md:h-full md:flex md:items-start">
        <Navbar />
      </div>
      <div className="hidden md:block w-full">
        <Footer />
        </div>
    </div>
    
  );
}