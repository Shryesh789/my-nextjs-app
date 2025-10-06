import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <ul className="list-disc list-inside space-y-2">
        <li><Link href="/dashboard/profile">User Profile</Link></li>
        <li><Link href="/dashboard/settings">Settings Page</Link></li>
      </ul>
    </div>
  );
}
