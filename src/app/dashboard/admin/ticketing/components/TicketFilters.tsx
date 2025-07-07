"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

export default function TicketFilters() {
  const [priority, setPriority] = useState("")
  const [timeFilter, setTimeFilter] = useState("")

  return (
    <div className="flex gap-3">
      {/* Priority Dropdown */}
      <Select value={priority} onValueChange={setPriority}>
        <SelectTrigger className="w-[140px] border border-gray-300 focus:ring-1 focus:ring-purple-500 rounded-md text-sm shadow-sm">
          <SelectValue placeholder="Select Priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="New">🟡 New</SelectItem>
          <SelectItem value="On-Going">🔵 On-Going</SelectItem>
          <SelectItem value="Closed">🟢 Closed</SelectItem>
        </SelectContent>
      </Select>

      {/* Time Filter Dropdown */}
      <Select value={timeFilter} onValueChange={setTimeFilter}>
        <SelectTrigger className="w-[110px] border border-gray-300 focus:ring-1 focus:ring-purple-500 rounded-md text-sm shadow-sm">
          <SelectValue placeholder="This Week" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="today">Today</SelectItem>
          <SelectItem value="this-week">This Week</SelectItem>
          <SelectItem value="this-month">This Month</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
