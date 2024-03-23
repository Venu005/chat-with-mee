import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";

//usinga sync as data will be fetched from server
async function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
        <DesktopSidebar />
        <MobileFooter/>
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}

export default Sidebar;