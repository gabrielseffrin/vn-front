'use client';

import React from 'react';
import Link from 'next/link'; 
import { CalendarDays, LayoutDashboard } from 'lucide-react';
import Logo from './Logo';

interface SidebarProps {
  activeMenuItem: string;
  setActiveMenuItem: (item: string) => void;
}

export const Sidebar = ({ activeMenuItem, setActiveMenuItem }: SidebarProps) => {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col p-4 shadow-lg rounded-r-lg">
      <div className="flex items-center justify-center h-20 mb-8">
        <div className="text-3xl font-extrabold text-blue-400">
          <Logo />
        </div>
      </div>

      <nav className="flex-1">
        <ul>
          <li className="mb-2">
            <Link
              href="/hours-report"
              className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors duration-200
                ${activeMenuItem === 'relatorio-horas' ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-gray-700 text-gray-300'}`}
              onClick={() => setActiveMenuItem('relatorio-horas')}
            >
              <LayoutDashboard className="w-5 h-5 mr-3" />
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/hours-report"
              className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors duration-200
                ${activeMenuItem === 'relatorio-horas' ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-gray-700 text-gray-300'}`}
              onClick={() => setActiveMenuItem('relatorio-horas')}
            >
              <CalendarDays className="w-5 h-5 mr-3" />
              Relatório de Horas
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
