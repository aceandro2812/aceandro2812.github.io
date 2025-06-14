
import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-grow w-full px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
