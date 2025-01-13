import { Outlet } from "react-router-dom";
import { Sidebar } from './index';

const Layout = () => {
  return (
    <div className="grid grid-cols-[auto_1fr]">
      <Sidebar />
      <main className="p-4">
        <Outlet /> {/* Renders the matched child route */}
      </main>
    </div>
  );
};

export default Layout;
