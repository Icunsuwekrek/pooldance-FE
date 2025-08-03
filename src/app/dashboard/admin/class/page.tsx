"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CreateClassModal from "./components/CreateClassModal";

export default function EventsPage() {
    const [search, setSearch] = useState("");
    const [events, setEvents] = useState([
        {
            id: 1,
            title: "Beach Pole Dance",
            date: "2027-09-25",
            location: "Beach Walk",
            description: "Lorem ipsum dolor sit amet.",
            startTime: "09:00",
            endTime: "10:00",
        },
        {
            id: 2,
            title: "Yoga in the Park",
            date: "2027-10-01",
            location: "Central Park",
            description: "Sunrise yoga session.",
            startTime: "06:30",
            endTime: "08:00",
        },
    ]);

    const router = useRouter();

    const today = new Date().toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const filteredEvents = events.filter((event) =>
        event.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleDelete = (id: number) => {
        const confirmed = confirm("Are you sure you want to delete this event?");
        if (confirmed) {
            setEvents((prev) => prev.filter((e) => e.id !== id));
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Class</h1>
                <p className="text-sm text-gray-500">{today}</p>
            </div>

            {/* Search and Action */}
            <div className="flex items-center justify-between gap-4">
                <Input
                    placeholder="Search class"
                    className="max-w-sm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="flex gap-2">
                    <CreateClassModal />
                    <Button variant="outline">Export to Excel</Button>
                </div>
            </div>

            {/* Table */}
            <div className="p-6 bg-white shadow-md rounded-xl">
                <h2 className="mb-4 text-xl font-semibold">Class</h2>

                {filteredEvents.length === 0 ? (
                    <div className="py-8 text-center text-gray-500">No class found</div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-left border">
                            <thead className="text-gray-700 bg-purple-100">
                                <tr>
                                    <th className="px-4 py-2 border">No</th>
                                    <th className="px-4 py-2 border">Class</th>
                                    <th className="px-4 py-2 border">Description</th>
                                    <th className="px-4 py-2 border">Stock Class</th>
                                    <th className="px-4 py-2 border">Schedule</th>
                                    <th className="px-4 py-2 border">Time</th>
                                    <th className="px-4 py-2 border">Location</th>
                                    <th className="px-4 py-2 border">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredEvents.map((event, idx) => (
                                    <tr key={event.id} className="border-t">
                                        <td className="px-4 py-2 border">{idx + 1}</td>
                                        <td className="px-4 py-2 border">{event.title}</td>
                                        <td className="px-4 py-2 border">{event.description}</td>
                                        <td className="px-4 py-2 border">8 Stock</td>
                                        <td className="px-4 py-2 border">
                                            {new Date(event.date).toLocaleDateString("en-GB")}
                                        </td>
                                        <td className="px-4 py-2 border">{event.startTime}</td>
                                        <td className="px-4 py-2 border">{event.location}</td>
                                        <td className="px-4 py-2 border">
                                            <div className="flex gap-2">
                                                <Button
                                                    size="sm"
                                                    className="text-white bg-emerald-400 hover:bg-emerald-500"
                                                    onClick={() =>
                                                        router.push(`/dashboard/admin/class/components/update?id=${event.id}`)
                                                    }
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    className="text-white bg-red-500 hover:bg-red-600"
                                                    onClick={() => handleDelete(event.id)}
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
