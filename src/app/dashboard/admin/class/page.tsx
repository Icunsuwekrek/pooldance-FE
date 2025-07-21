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

    const [editingEvent, setEditingEvent] = useState<any | null>(null);
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

    const handleUpdateSuccess = (updated: any) => {
        setEvents((prev) =>
            prev.map((e) => (e.id === updated.id ? { ...updated } : e))
        );
        setEditingEvent(null);
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
            <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Class</h2>

                {filteredEvents.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">No class found</div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full border text-sm text-left">
                            <thead className="bg-purple-100 text-gray-700">
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
                                                    className="bg-emerald-400 hover:bg-emerald-500 text-white"
                                                    onClick={() => setEditingEvent(event)}
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    className="bg-red-500 hover:bg-red-600 text-white"
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

            {/* Ganti Modal Edit jadi tombol redirect */}
            {editingEvent && (
                <Button
                    onClick={() =>
                        router.push("/dashboard/admin/class/components/UpdateClassModal")
                    }
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                    Go to Update Class Page
                </Button>
            )}
        </div>
    );
}
