import Sidebar from "../components/sidebar/Sidebar";
interface UserLayoutProps {
  children: React.ReactNode;
}
export default async function UserLayout({ children }: UserLayoutProps) {
  return (
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
}
