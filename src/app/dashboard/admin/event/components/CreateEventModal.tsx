"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { format } from "date-fns";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

export default function CreateEventModal() {
    const [formData, setFormData] = useState({
        event: "",
        date: new Date(),
        startTime: "09:00",
        endTime: "10:00",
        location: "",
        description: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async () => {
        console.log("Submitting Event:", formData);
        alert("Event created (dummy)");
        // Kirim ke API jika perlu
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                    Add New Event <span className="ml-2 text-lg">+</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle className="text-gray-800 text-xl">Add New Event</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    <div>
                        <Label>Event</Label>
                        <Input name="event" placeholder="Text" value={formData.event} onChange={handleChange} />
                    </div>

                    <div>
                        <Label>Date</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className={cn(
                                        "w-full justify-start text-left font-normal",
                                        !formData.date && "text-muted-foreground"
                                    )}
                                >
                                    {formData.date ? format(formData.date, "dd/MM/yyyy") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={formData.date}
                                    onSelect={(date) => date && setFormData((prev) => ({ ...prev, date }))}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label>Start Time</Label>
                            <Input
                                type="time"
                                name="startTime"
                                value={formData.startTime}
                                onChange={handleChange}
                                icon={<Clock className="w-4 h-4" />}
                            />
                        </div>
                        <div>
                            <Label>End Time</Label>
                            <Input
                                type="time"
                                name="endTime"
                                value={formData.endTime}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <Label>Location</Label>
                        <Input name="location" placeholder="Text" value={formData.location} onChange={handleChange} />
                    </div>

                    <div>
                        <Label>Description</Label>
                        <Input name="description" placeholder="Text" value={formData.description} onChange={handleChange} />
                    </div>
                </div>

                <DialogFooter className="mt-6 flex justify-between">
                    <DialogClose asChild>
                        <Button variant="outline" className="bg-gray-200 text-gray-700 hover:bg-gray-300">
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button
                        onClick={handleSubmit}
                        className="bg-purple-600 text-white hover:bg-purple-700"
                    >
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
