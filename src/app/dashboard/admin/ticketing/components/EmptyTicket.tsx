"use client"

import Image from "next/image"
import EmptyTicketImage from "@/assets/images/admin/empty.png"

export default function EmptyTicket() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <Image
        src={EmptyTicketImage}
        alt="No tickets"
        width={400}
        height={400}
        className="mb-6"
      />
      <h3 className="text-lg font-semibold text-gray-700">
        Let’s <span className="text-purple-600">Create new Ticket</span> here
      </h3>
      <p className="max-w-md mt-2 text-sm text-gray-500">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
      </p>
    </div>
  )
}
