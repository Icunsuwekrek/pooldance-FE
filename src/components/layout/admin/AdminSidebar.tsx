"use client"

import {
  Home,
  Users,
  Settings,
  LogOut,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const menuItems = [
  { label: "Dashboard", href: "/dashboard/admin", icon: <Home size={18} /> },
  { label: "Users", href: "/dashboard/admin/users", icon: <Users size={18} /> },
  { label: "Settings", href: "/dashboard/admin/settings", icon: <Settings size={18} /> },
]

export default function AdminSidebar() {
  const [search, setSearch] = useState("")

  const filteredItems = menuItems.filter(item =>
    item.label.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white shadow-md border-r z-50 flex flex-col justify-between">
      {/* Logo */}
      <div className="px-6 py-4 border-b">
        <h1 className="text-xl font-bold text-purple-700">Admin Panel</h1>
      </div>

      {/* Search + Menu */}
      <div className="flex-1 px-4 py-6 space-y-4 overflow-auto">
        {/* Search Input */}
        <Input
          placeholder="Search menu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-sm"
        />

        {/* Menu Items */}
        <nav className="space-y-2">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <SidebarItem key={item.href} href={item.href} icon={item.icon}>
                {item.label}
              </SidebarItem>
            ))
          ) : (
            <p className="text-sm text-gray-500 px-3">No matches found</p>
          )}
        </nav>
      </div>

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
