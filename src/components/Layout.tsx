
import React from 'react';
import Navbar from './Navbar';
import { CustomCursor } from './CustomCursor';
import { ScanlineOverlay } from './ScanlineOverlay';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col w-full relative overflow-x-hidden bg-base-bg font-mono">
      <CustomCursor />
      <ScanlineOverlay />
      {/* Enhanced background patterns */}
      <div className="fixed inset-0 -z-10 bg-base-bg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,65,0.05)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,255,65,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.2)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <Navbar />
      <main className="flex-grow w-full px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
