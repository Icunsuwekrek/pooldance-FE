import {
  Home,
  Users,
  Settings,
  LogOut,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AdminSidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white shadow-md border-r z-50 flex flex-col justify-between">
      {/* Logo */}
      <div className="px-6 py-4 border-b">
        <h1 className="text-xl font-bold text-purple-700">Admin Panel</h1>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <SidebarItem href="/dashboard/admin" icon={<Home size={18} />}>
          Dashboard
        </SidebarItem>
        <SidebarItem href="/dashboard/admin/users" icon={<Users size={18} />}>
          Users
        </SidebarItem>
        <SidebarItem href="/dashboard/admin/settings" icon={<Settings size={18} />}>
          Settings
        </SidebarItem>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t">
        <Button variant="destructive" className="w-full flex items-center gap-2">
          <LogOut size={18} />
          Logout
        </Button>
      </div>
    </aside>
  )
}

// Item component
function SidebarItem({
  href,
  icon,
  children,
}: {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
    >
      {icon}
      {children}
    </Link>
  )
}
