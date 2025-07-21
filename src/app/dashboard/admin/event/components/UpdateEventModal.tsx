"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
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

type UpdateEventModalProps = {
    event: any;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSuccess: (updated: any) => void;
};

export default function UpdateEventModal({
    event,
    open,
    onOpenChange,
    onSuccess,
}: UpdateEventModalProps) {
    const [formData, setFormData] = useState({
        ...event,
        date: new Date(event.date),
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = () => {
        const updated = {
            ...formData,
            date: formData.date.toISOString().split("T")[0],
        };
        onSuccess(updated);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle className="text-gray-800 text-xl">Edit Event</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    <div>
                        <Label>Event</Label>
                        <Input name="title" value={formData.title} onChange={handleChange} />
                    </div>

                    <div>
                        <Label>Date</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className={cn("w-full justify-start text-left font-normal")}
                                >
                                    {formData.date ? format(formData.date, "dd/MM/yyyy") : "Pick a date"}
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
                        <Input name="location" value={formData.location} onChange={handleChange} />
                    </div>

                    <div>
                        <Label>Description</Label>
                        <Input name="description" value={formData.description} onChange={handleChange} />
                    </div>
                </div>

                <DialogFooter className="mt-6 flex justify-between">
                    <DialogClose asChild>
                        <Button variant="outline" className="bg-gray-200 text-gray-700 hover:bg-gray-300">
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button onClick={handleSubmit} className="bg-purple-600 text-white hover:bg-purple-700">
                        Update
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
