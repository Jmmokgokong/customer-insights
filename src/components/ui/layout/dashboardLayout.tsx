import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <header>
        <div className="flex items-center justify-between min-h-16 bg-white px-4 border-b border-gray-200">
          <h1>Customer Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="flex flex-col min-h-screen">
          <div className="flex-1 p-4 border-r border-gray-200">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
