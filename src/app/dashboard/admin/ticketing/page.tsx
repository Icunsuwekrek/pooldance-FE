"use client"

import { useState } from "react"
import TicketCard from "./components/TicketCard"
import TicketTabs from "./components/TicketTabs"
import TicketFilters from "./components/TicketFilters"
import EmptyTicket from "./components/EmptyTicket"
import CreateTicketModal from "./components/CreateTicketModal"
import TicketDetailPage from "./components/TicketDetailPage"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function TicketingPage() {
  const [search, setSearch] = useState("")
  const [selectedTicket, setSelectedTicket] = useState<any | null>(null)

  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const tickets = [
  ]

  const filteredTickets = tickets.filter(ticket =>
    ticket.title.toLowerCase().includes(search.toLowerCase())
  )

  if (selectedTicket) {
    return (
      <div className="space-y-6">
        <TicketDetailPage ticket={selectedTicket} onBack={() => setSelectedTicket(null)} />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Ticketing System</h1>
        <p className="text-sm text-gray-500">{today}</p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <Input
          placeholder="Search for ticket"
          className="max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex items-center gap-3">
          <TicketFilters />
          <CreateTicketModal />
        </div>
      </div>

      <TicketTabs />

      <div className="space-y-4">
        {filteredTickets.length === 0 ? (
          <EmptyTicket />
        ) : (
          filteredTickets.map((ticket) => (
            <TicketCard key={ticket.id} {...ticket} onClick={() => setSelectedTicket(ticket)} />
          ))
        )}
      </div>

      {filteredTickets.length > 0 && (
        <div className="flex justify-end mt-6 space-x-2 text-sm">
          <button className="px-3 py-1 text-gray-500 rounded hover:bg-gray-100">Previous</button>
          <button className="px-3 py-1 text-white bg-purple-600 rounded">1</button>
          <button className="px-3 py-1 text-gray-500 rounded hover:bg-gray-100">2</button>
          <button className="px-3 py-1 text-gray-500 rounded hover:bg-gray-100">Next</button>
        </div>
      )}
    </div>
  )
}
