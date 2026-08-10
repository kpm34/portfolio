import DashboardLayout from '@/components/dashboard/DashboardLayout';

export const metadata = {
  title: 'Career Dashboard',
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div data-surface="dark" className="min-h-screen">
      <DashboardLayout>{children}</DashboardLayout>
    </div>
  );
}
