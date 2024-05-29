"use client";

import React, { useState } from "react";

export default function ClientWeatherAlerts({
  title,
  children,
}: Readonly<{ title: string; children: React.ReactNode }>) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAlerts = () => setIsOpen(!isOpen);
  return (
    <div>
      <div
        className={`
          flex cursor-pointer items-center justify-between bg-red-200 p-4 text-red-900 ${
            isOpen ? "rounded-t-md" : "rounded-md"
          }`}
        onClick={toggleAlerts}
      >
        {title}
        <span
          className={`transform transition-transform ${isOpen && "rotate-180"}`}
        >
          &#9660;
        </span>
      </div>
      {isOpen && (
        <div className="divide-y divide-dashed divide-white/20 rounded-b-md bg-red-900 p-4 text-red-100">
          {children}
        </div>
      )}
    </div>
  );
}
