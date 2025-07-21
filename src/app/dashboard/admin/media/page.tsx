"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import CreateGalleryModal from "./components/CreateMediaModal";
import UpdateMediaModal from "./components/UpdateMediaModal";

export default function MediaPage() {
    const today = new Date().toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const [heroMedia, setHeroMedia] = useState<string | null>("owi.jpg");
    const [galleryMedia, setGalleryMedia] = useState<string[]>([
        "owi.jpg",
        "owi.jpg",
        "owi.jpg",
    ]);

    const handleHeroUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setHeroMedia(e.target.files[0].name);
        }
    };

    const handleGalleryUpdate = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        if (e.target.files && e.target.files[0]) {
            const newGallery = [...galleryMedia];
            newGallery[index] = e.target.files[0].name;
            setGalleryMedia(newGallery);
        }
    };

    const handleAddGallery = () => {
        setGalleryMedia([...galleryMedia, "owi.jpg"]);
    };

    const handleDeleteGallery = (index: number) => {
        const newGallery = [...galleryMedia];
        newGallery.splice(index, 1);
        setGalleryMedia(newGallery);
    };

    return (
        <div className="space-y-6 p-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Update Media</h1>
                <p className="text-sm text-gray-500">{today}</p>
            </div>

            {/* Hero Section */}
            <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
                <h2 className="text-lg font-semibold mb-2">Hero</h2>
                <table className="min-w-full border text-sm text-left">
                    <thead className="bg-purple-100 text-gray-700">
                        <tr>
                            <th className="px-4 py-2 border">No</th>
                            <th className="px-4 py-2 border">Media</th>
                            <th className="px-4 py-2 border">File Name</th>
                            <th className="px-4 py-2 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t">
                            <td className="px-4 py-2 border">1.</td>
                            <td className="px-4 py-2 border">
                                <img
                                    src={`/media/${heroMedia}`}
                                    alt="hero"
                                    className="w-16 h-16 object-cover rounded"
                                />
                            </td>
                            <td className="px-4 py-2 border">{heroMedia}</td>
                            <td className="px-4 py-2 border">
                                <input
                                    type="file"
                                    id="hero-upload"
                                    className="hidden"
                                    onChange={handleHeroUpdate}
                                />
                                <label htmlFor="hero-upload">
                                    <UpdateMediaModal/>
                                </label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Gallery Section */}
            <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-semibold">Gallery</h2>
                    <CreateGalleryModal/>
                </div>

                <table className="min-w-full border text-sm text-left">
                    <thead className="bg-purple-100 text-gray-700">
                        <tr>
                            <th className="px-4 py-2 border">No</th>
                            <th className="px-4 py-2 border">Media</th>
                            <th className="px-4 py-2 border">File Name</th>
                            <th className="px-4 py-2 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {galleryMedia.map((media, index) => (
                            <tr key={index} className="border-t">
                                <td className="px-4 py-2 border">{index + 1}.</td>
                                <td className="px-4 py-2 border">
                                    <img
                                        src={`/media/${media}`}
                                        alt={`gallery-${index}`}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                </td>
                                <td className="px-4 py-2 border">{media}</td>
                                <td className="px-4 py-2 border flex gap-2">
                                    <input
                                        type="file"
                                        id={`gallery-upload-${index}`}
                                        className="hidden"
                                        onChange={(e) => handleGalleryUpdate(e, index)}
                                    />
                                    <label htmlFor={`gallery-upload-${index}`}>
                                        <UpdateMediaModal/>
                                    </label>
                                    <Button
                                        className="bg-red-500 hover:bg-red-600 text-white"
                                        onClick={() => handleDeleteGallery(index)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
