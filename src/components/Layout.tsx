
import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col w-full relative overflow-x-hidden">
      {/* Enhanced background patterns */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 gradient-mesh"></div>
        <div className="absolute inset-0 pattern-dots opacity-30"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      </div>
      
      <Navbar />
      <main className="flex-grow w-full px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
