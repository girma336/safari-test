import React from "react";
import "./Layout.css"; // Import the global CSS file directly
import Sidebar from "@/components/dashboard/sidbar/Sidebar";
import Header from "@/components/layout/Header";

const Layout = ({ children }) => {
  return (
    <section>
      <main className="dashboard">
        <Sidebar />
        <div className="grid_sidebar">
          <Header />
          <div className="dashboard_page">{children}</div>
        </div>
      </main>
    </section>
  );
};

export default Layout;
