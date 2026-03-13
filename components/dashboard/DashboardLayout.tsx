'use client';

import DashboardNav from './DashboardNav';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#1C1C1C] flex">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 shrink-0 flex-col border-r border-[#F5F5DC]/5 bg-[#1C1C1C]">
        <DashboardNav />
      </aside>

      {/* Mobile nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#1C1C1C] border-t border-[#F5F5DC]/5">
        <div className="flex justify-around py-2">
          <MobileNavLink href="/dashboard" label="Overview" />
          <MobileNavLink href="/dashboard/skills" label="Skills" />
          <MobileNavLink href="/dashboard/roles" label="Roles" />
          <MobileNavLink href="/dashboard/resume" label="Resume" />
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto min-h-screen pb-20 md:pb-0">
        <div className="p-6 md:p-10 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

function MobileNavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="text-xs font-mono text-[#F5F5DC]/50 hover:text-[#F5F5DC] transition-colors px-4 py-2"
    >
      {label}
    </a>
  );
}
