"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CreateEventModal from "./components/CreateEventModal";

export default function EventsPage() {
    const [search, setSearch] = useState("");
    const [events, setEvents] = useState([
        {
            id: 1,
            title: "Beach Pole Dance",
            date: "25/09/2027",
            location: "Beach Walk",
            description: "Lorem ipsum dolor sit amet.",
        },
        {
            id: 2,
            title: "Beach Pole Dance",
            date: "25/09/2027",
            location: "Beach Walk",
            description: "Lorem ipsum dolor sit amet.",
        },
        {
            id: 3,
            title: "Beach Pole Dance",
            date: "25/09/2027",
            location: "Beach Walk",
            description: "Lorem ipsum dolor sit amet.",
        },
    ]);

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
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Event</h1>
                <p className="text-sm text-gray-500">{today}</p>
            </div>

            <div className="flex items-center justify-between gap-4">
                <Input
                    placeholder="Search event"
                    className="max-w-sm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <CreateEventModal />
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Events</h2>

                {filteredEvents.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                        No events found
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse rounded-md overflow-hidden">
                            <thead>
                                <tr className="bg-purple-100 text-left text-sm text-gray-700">
                                    <th className="py-2 px-4">No</th>
                                    <th className="py-2 px-4">Event</th>
                                    <th className="py-2 px-4">Date</th>
                                    <th className="py-2 px-4">Location</th>
                                    <th className="py-2 px-4">Description</th>
                                    <th className="py-2 px-4">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredEvents.map((event, idx) => (
                                    <tr key={event.id} className="border-t text-sm">
                                        <td className="py-2 px-4">{idx + 1}.</td>
                                        <td className="py-2 px-4">{event.title}</td>
                                        <td className="py-2 px-4">{event.date}</td>
                                        <td className="py-2 px-4">{event.location}</td>
                                        <td className="py-2 px-4 truncate max-w-[200px]">{event.description}</td>
                                        <td className="py-2 px-4 flex gap-2">
                                            <Button
                                                size="sm"
                                                className="bg-emerald-400 hover:bg-emerald-500 text-white"
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
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {filteredEvents.length > 0 && (
                <div className="flex justify-end mt-6 space-x-2 text-sm">
                    <button className="px-3 py-1 text-gray-500 rounded hover:bg-gray-100">Previous</button>
                    <button className="px-3 py-1 text-white bg-purple-600 rounded">1</button>
                    <button className="px-3 py-1 text-gray-500 rounded hover:bg-gray-100">2</button>
                    <button className="px-3 py-1 text-gray-500 rounded hover:bg-gray-100">Next</button>
               </div>
            )}
        </div>
    );
}
