import React from 'react';
import Header from './header';
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main>
        <div className="flex flex-col min-h-screen">
          <div className="flex-1 p-4 border-r border-gray-200">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
