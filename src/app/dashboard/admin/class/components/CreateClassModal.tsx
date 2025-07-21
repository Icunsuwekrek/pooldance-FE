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

export default function CreateClassModal() {
    const [formData, setFormData] = useState({
        event: "",
        date: new Date(),
        startTime: "09:00",
        endTime: "10:00",
        location: "",
        description: "",
        stockClass: "",
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

            {/* Modal content with centered positioning */}
            <DialogContent
                className="fixed top-1/2 left-1/2 max-w-md rounded-2xl bg-white p-8 shadow-lg
                           transform -translate-x-1/2 -translate-y-1/2 z-50"
            >
                <DialogHeader className="pb-4 border-b border-gray-200">
                    <DialogTitle className="text-gray-700 text-xl font-semibold">Add New Class</DialogTitle>
                    <DialogClose className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer text-xl font-bold">
                        ×
                    </DialogClose>
                </DialogHeader>

                <form className="space-y-5 mt-4" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                    <div>
                        <Label className="text-gray-500 font-semibold mb-1 block">Class</Label>
                        <Input
                            name="event"
                            placeholder="Text"
                            value={formData.event}
                            onChange={handleChange}
                            className="bg-gray-100"
                        />
                    </div>

                    <div>
                        <Label className="text-gray-500 font-semibold mb-1 block">Description</Label>
                        <Input
                            name="description"
                            placeholder="Text"
                            value={formData.description}
                            onChange={handleChange}
                            className="bg-gray-100"
                        />
                    </div>

                    <div>
                        <Label className="text-gray-500 font-semibold mb-1 block">Stock Class</Label>
                        <Input
                            name="stockClass"
                            placeholder="Text"
                            value={formData.stockClass}
                            onChange={handleChange}
                            className="bg-gray-100"
                        />
                    </div>

                    <div>
                        <Label className="text-gray-500 font-semibold mb-1 block">Schedule</Label>
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
                            <PopoverContent className="w-auto p-0 rounded-lg shadow-lg">
                                <Calendar
                                    mode="single"
                                    selected={formData.date}
                                    onSelect={(date) => date && setFormData((prev) => ({ ...prev, date }))}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div>
                        <Label className="text-gray-500 font-semibold mb-1 block">Time</Label>
                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                type="time"
                                name="startTime"
                                value={formData.startTime}
                                onChange={handleChange}
                                className="bg-gray-100"
                                icon={<Clock className="w-4 h-4 text-gray-400" />}
                            />
                            <Input
                                type="time"
                                name="endTime"
                                value={formData.endTime}
                                onChange={handleChange}
                                className="bg-gray-100"
                            />
                        </div>
                    </div>

                    <div>
                        <Label className="text-gray-500 font-semibold mb-1 block">Location</Label>
                        <Input
                            name="location"
                            placeholder="Text"
                            value={formData.location}
                            onChange={handleChange}
                            className="bg-gray-100"
                        />
                    </div>

                    <DialogFooter className="mt-6 flex justify-between px-0">
                        <DialogClose asChild>
                            <Button
                                variant="outline"
                                className="bg-gray-300 text-gray-600 hover:bg-gray-400 font-semibold px-8"
                            >
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button
                            type="submit"
                            className="bg-purple-600 text-white hover:bg-purple-700 font-semibold px-8"
                        >
                            Save
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
