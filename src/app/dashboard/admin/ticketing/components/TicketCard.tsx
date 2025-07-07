"use client"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"

type TicketCardProps = {
  status: "New" | "On-Going" | "Closed"
  title: string
  desc: string
  author: string
  time: string
}

const statusColor: Record<TicketCardProps["status"], string> = {
  "New": "bg-yellow-500",
  "On-Going": "bg-blue-500",
  "Closed": "bg-green-500",
}

export default function TicketCard({ status, title, desc, author, time }: TicketCardProps) {
  return (
    <div className="p-5 transition bg-white border rounded-lg shadow-sm hover:shadow-md">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className={cn("w-3 h-3 rounded-full", statusColor[status])}></span>
          <h2 className="text-sm font-semibold text-gray-800">{title}</h2>
        </div>
        <span className="text-xs text-gray-400">{`Posted at ${time}`}</span>
      </div>

      <p className="mb-4 text-sm text-gray-600 line-clamp-2">
        {desc}
      </p>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <img src="/images/loginuser2.png" alt="avatar" className="object-cover w-6 h-6 rounded-full" />
          <span>{author}</span>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-purple-600 hover:underline"
        >
          Open Ticket
        </a>
      </div>
    </div>
  )
}
