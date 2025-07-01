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
  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      href: '/dashboards',
      icon: <LayoutDashboard className="w-5 h-5 mr-3" />,
    },
    {
      id: 'relatorio-horas',
      label: 'Relatório de Horas',
      href: '/hours-report',
      icon: <CalendarDays className="w-5 h-5 mr-3" />,
    },
  ];

  return (
    <aside className="w-64 bg-white text-gray-900 flex flex-col p-4 shadow-lg rounded-r-lg">
      <div className="flex items-center justify-center h-20 mb-8">
        <div className="text-3xl font-extrabold text-blue-500">
          <Logo />
        </div>
      </div>

      <nav className="flex-1">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} className="mb-2">
              <Link
                href={item.href}
                className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors duration-200
                  ${activeMenuItem === item.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'hover:bg-gray-100 text-gray-900'}`}
                onClick={() => setActiveMenuItem(item.id)}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
