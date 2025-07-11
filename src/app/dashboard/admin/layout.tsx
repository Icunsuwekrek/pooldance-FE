import AdminSidebar from "@/components/layout/admin/AdminSidebar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="ml-64 w-full p-6 bg-gray-50 min-h-screen">
        {children}
      </main>
    </div>
  )
}
