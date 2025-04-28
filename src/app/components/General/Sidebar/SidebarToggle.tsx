'use client';

// components/Sidebar/SidebarToggle.tsx
import React from "react";

type Props = {
  onHoverStart: () => void;
};

const SidebarToggle = ({ onHoverStart }: Props) => {
  return (
    <button
      onMouseEnter={onHoverStart}
      onTouchStart={onHoverStart}
      className="fixed top-1/2 left-0 transform -translate-y-1/2 z-50 w-2 h-24 bg-blue-500 bg-opacity-50 rounded-r-full cursor-pointer shadow-lg transition-opacity duration-300"
      aria-label="Toggle Sidebar"
    />
  );
};

export default SidebarToggle;