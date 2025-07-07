"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const tabs = ["All Tickets", "New", "On-Going", "Closed"]

export default function TicketTabs() {
  const [activeTab, setActiveTab] = useState("All Tickets")

  return (
    <div className="flex items-center pb-2 space-x-4 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={cn(
            "text-sm font-medium pb-1 border-b-2 transition-colors",
            activeTab === tab
              ? "border-purple-600 text-purple-600"
              : "border-transparent text-gray-500 hover:text-purple-600"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
