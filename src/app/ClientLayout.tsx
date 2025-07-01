'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/app/components/Sidebar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [activeMenuItem, setActiveMenuItem] = useState('relatorio-horas');

  return (
    <div className="flex h-screen bg-gray-100 text-gray-900">
      <Sidebar activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  );
}
