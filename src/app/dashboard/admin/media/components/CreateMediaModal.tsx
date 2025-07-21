"use client";

import { useState } from "react";
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

export default function CreateGalleryModal() {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default">Upload File</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Upload File</DialogTitle>
                </DialogHeader>

                <div className="space-y-4 mt-2">
                    <div className="flex flex-col items-center justify-center text-center">
                        <Label htmlFor="file-upload" className="text-sm mb-2 text-gray-700">
                            Choose Photo
                        </Label>

                        <input
                            id="file-upload"
                            type="file"
                            className="hidden"
                            onChange={handleFileChange}
                        />

                        <label
                            htmlFor="file-upload"
                            className="w-full max-w-xs px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg text-sm text-purple-600 text-center cursor-pointer hover:border-purple-400 transition-colors"
                        >
                            {file ? file.name : "Add File"}
                        </label>
                    </div>
                </div>

                <DialogFooter className="flex justify-end mt-4 space-x-2">
                    <DialogClose asChild>
                        <Button variant="outline">Close</Button>
                    </DialogClose>
                    <Button type="submit">Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
