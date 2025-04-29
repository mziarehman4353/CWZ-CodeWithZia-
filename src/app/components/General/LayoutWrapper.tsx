"use client";

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar/Sidebar";
import RightSidebar from "./Right-Sidebar/Right-Sidebar";


export default function LayoutWrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <Sidebar />
      <RightSidebar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
