"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export default function UpdateClassPage() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const [formData, setFormData] = useState<any>(null);
    const [reservations, setReservations] = useState<any[]>([]);

    useEffect(() => {
        // Simulasi fetch data class berdasarkan ID
        const fetchData = async () => {
            const dummyClass = {
                title: "Expert Class",
                date: new Date("2027-09-25"),
                startTime: "20:00",
                endTime: "22:00",
                location: "Online Zoom",
                description: "Kelas untuk lanjutan expert",
            };

            const dummyReservations = [
                { id: 1, name: "Alfio", date: "25/09/2027", time: "20.00", status: "Done" },
                { id: 2, name: "Jendra", date: "25/09/2027", time: "20.00", status: "Done" },
                { id: 3, name: "Rafli", date: "25/09/2027", time: "20.00", status: "Done" },
                { id: 4, name: "Icun", date: "25/09/2027", time: "20.00", status: "Done" },
            ];

            setFormData(dummyClass);
            setReservations(dummyReservations);
        };

        fetchData();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = () => {
        console.log("✅ Updated Data:", {
            ...formData,
            date: formData.date.toISOString().split("T")[0],
        });
    };

    if (!formData) return <div>Loading...</div>;

    return (
        <div className="p-6 space-y-10">
            <h2 className="text-2xl font-semibold text-gray-800">Class Detail</h2>

            {/* Form Edit Class */}
            <div className="w-full p-6 space-y-4 bg-white shadow rounded-xl">
                <div>
                    <Label>Event</Label>
                    <Input name="title" value={formData.title} onChange={handleChange} />
                </div>

                <div>
                    <Label>Date</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" className={cn("w-full text-left font-normal")}>
                                {formData.date ? format(formData.date, "dd/MM/yyyy") : "Pick a date"}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={formData.date}
                                onSelect={(date) => date && setFormData((prev: any) => ({ ...prev, date }))}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label>Start Time</Label>
                        <Input type="time" name="startTime" value={formData.startTime} onChange={handleChange} />
                    </div>
                    <div>
                        <Label>End Time</Label>
                        <Input type="time" name="endTime" value={formData.endTime} onChange={handleChange} />
                    </div>
                </div>

                <div>
                    <Label>Location</Label>
                    <Input name="location" value={formData.location} onChange={handleChange} />
                </div>

                <div>
                    <Label>Description</Label>
                    <Input name="description" value={formData.description} onChange={handleChange} />
                </div>

                <div className="pt-4 text-right">
                    <Button onClick={handleSubmit} className="text-white bg-purple-600 hover:bg-purple-700">
                        Save
                    </Button>
                </div>
            </div>

            {/* Tabel Reservasi Class */}
            <div className="p-6 mt-10 bg-white shadow rounded-xl">
                <h3 className="mb-4 text-lg font-semibold text-gray-700">Reservasi Class</h3>
                <table className="w-full text-sm border border-gray-200">
                    <thead className="bg-purple-100">
                        <tr>
                            <th className="px-4 py-2 text-left">No</th>
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Date</th>
                            <th className="px-4 py-2 text-left">Time</th>
                            <th className="px-4 py-2 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map((rsv, index) => (
                            <tr key={rsv.id} className="border-t border-gray-200">
                                <td className="px-4 py-2">{index + 1}</td>
                                <td className="px-4 py-2">{rsv.name}</td>
                                <td className="px-4 py-2">{rsv.date}</td>
                                <td className="px-4 py-2">{rsv.time}</td>
                                <td className="px-4 py-2">{rsv.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
