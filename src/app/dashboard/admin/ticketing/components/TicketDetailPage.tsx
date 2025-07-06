"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface TicketDetailPageProps {
  ticketId: string
}

export default function TicketDetailPage() {
  return (
    <div className="p-6 space-y-6 bg-white shadow-sm rounded-xl">
      {/* Title & Date */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Ticketing System</h1>
        <p className="text-sm text-gray-500">Sunday, 23 July 2025</p>
      </div>

      {/* Ticket Info */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <span className="text-sm font-semibold">Ticket# 2023-CS123</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-800">How to deposit money to my portal?</h2>
        <p className="text-sm leading-relaxed text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
      </div>

      {/* Response Form */}
      <div className="p-6 mt-6 space-y-4 border border-gray-200 rounded-lg bg-gray-50">
        <h3 className="text-lg font-semibold text-gray-700">Respon Ticket</h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Ticket Type */}
          <div>
            <Label>Request Ticket Type</Label>
            <Select defaultValue="deposit">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="deposit">Deposit Issue</SelectItem>
                <SelectItem value="login">Login Issue</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Status */}
          <div>
            <Label>Status</Label>
            <Select defaultValue="ongoing">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="ongoing">On-Going</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Ticket Body */}
        <div>
          <Label>Ticket Body</Label>
          <Textarea placeholder="Type ticket issue here." className="min-h-[120px] mt-1" />
        </div>

        {/* Submit */}
        <div className="text-right">
          <Button>Update</Button>
        </div>
      </div>
    </div>
  )
}
