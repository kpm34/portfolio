import DashboardLayout from '@/components/dashboard/DashboardLayout';

export const metadata = {
  title: 'Career Dashboard',
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
