"use client";

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar/Sidebar";

export default function LayoutWrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
