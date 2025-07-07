"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export default function CreateTicketModal() {
  const [priority, setPriority] = useState<"High" | "Medium" | "Low" | null>(null)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">New Ticket</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create New Ticket</DialogTitle>
        </DialogHeader>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <Label>Ticket Name</Label>
            <Input placeholder="Ticket Name" />
          </div>

          <div>
            <Label>Priority</Label>
            <div className="flex gap-4">
              {["High", "Medium", "Low"].map((level) => (
                <Button
                  key={level}
                  variant={priority === level ? "default" : "outline"}
                  onClick={() => setPriority(level as any)}
                  className={`border ${level === "High" ? "border-red-500 text-red-500" : level === "Medium" ? "border-yellow-500 text-yellow-500" : "border-green-500 text-green-500"}`}
                >
                  {level}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <Label>Ticket Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Ticket Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technical">Technical</SelectItem>
                <SelectItem value="billing">Billing</SelectItem>
                <SelectItem value="general">General</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <Label>Request by</Label>
              <Input value="Santosh Maharana" readOnly />
            </div>
            <div className="flex-1">
              <Label>Assign to</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select assignee" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dev1">Dev 1</SelectItem>
                  <SelectItem value="dev2">Dev 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label>Attach a file</Label>
            <Input type="file" />
          </div>

          <div>
            <Label>Message</Label>
            <Textarea placeholder="Enter your message..." />
          </div>
        </div>

        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="default">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
