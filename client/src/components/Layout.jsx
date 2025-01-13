import { Outlet } from "react-router-dom";
import { Sidebar } from "./index";

const Layout = () => {
  return (
    <div className="h-screen grid grid-cols-1 grid-rows-[auto_1fr] md:grid-cols-[auto_1fr]">
      <aside className="">
        <Sidebar />
      </aside>
      <main className="p-4 overflow-y-auto">
        <Outlet /> {/* Renders the matched child route */}
      </main>
    </div>
  );
};

export default Layout;
