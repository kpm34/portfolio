'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, Target, Layers, ArrowLeft } from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Overview', icon: BarChart3 },
  { href: '/dashboard/skills', label: 'Skills', icon: Layers },
  { href: '/dashboard/roles', label: 'Roles', icon: Target },
];

export default function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col h-full">
      <div className="p-6 border-b border-[#F5F5DC]/5">
        <Link
          href="/"
          className="flex items-center gap-2 text-[#F5F5DC]/40 hover:text-[#F5F5DC]/70 transition-colors text-sm font-mono"
        >
          <ArrowLeft size={14} />
          Portfolio
        </Link>
        <h1 className="text-lg font-semibold text-[#F5F5DC] mt-4">
          Career Dashboard
        </h1>
        <p className="text-xs text-[#F5F5DC]/40 mt-1 font-mono">Skills & Role Analysis</p>
      </div>

      <div className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-sm ${
                isActive
                  ? 'bg-[#800020]/20 text-[#F5F5DC] border border-[#800020]/30'
                  : 'text-[#F5F5DC]/50 hover:text-[#F5F5DC]/80 hover:bg-[#F5F5DC]/[0.03]'
              }`}
            >
              <Icon size={18} className={isActive ? 'text-[#800020]' : ''} />
              <span className="font-mono tracking-wide">{item.label}</span>
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-[#F5F5DC]/5">
        <p className="text-[10px] text-[#F5F5DC]/20 font-mono text-center">
          Internal Tool
        </p>
      </div>
    </nav>
  );
}
