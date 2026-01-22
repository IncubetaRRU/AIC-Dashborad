"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Rocket, BarChart3, Users, Settings, HelpCircle } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/' },
    { icon: Rocket, label: 'Startups', href: '/startups' },
    { icon: BarChart3, label: 'Analytics', href: '/analytics' },
    { icon: Users, label: 'Mentors', href: '/mentors' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 h-screen sticky top-0 flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold text-indigo-600 flex items-center gap-2">
          <Rocket className="w-6 h-6" />
          AIC Incubation
        </h1>
      </div>
      
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive 
                  ? 'bg-indigo-50 text-indigo-600' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto border-t border-slate-100">
        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg">
          <HelpCircle className="w-4 h-4" />
          Support
        </button>
      </div>
    </aside>
  );
}
