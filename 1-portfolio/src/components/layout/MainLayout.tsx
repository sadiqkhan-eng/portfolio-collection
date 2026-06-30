// src/components/layout/MainLayout.tsx
import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header will go here */}
      <main>{children}</main>
      {/* Footer will go here */}
    </div>
  );
};

export default MainLayout;