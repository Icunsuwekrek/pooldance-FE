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
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function CreateUserModal() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "2", // default user
    });

    const [profileFile, setProfileFile] = useState<File | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async () => {
        const body = new FormData();
        Object.entries(formData).forEach(([key, val]) => {
            body.append(key, val);
        });
        if (profileFile) body.append("profile", profileFile);

        try {
            const res = await fetch("/api/user", {
                method: "POST",
                body,
            });

            const result = await res.json();
            if (res.ok) {
                alert("User berhasil dibuat");
                // Optionally reset form
            } else {
                alert(result?.error || "Gagal membuat user");
            }
        } catch (err) {
            console.error(err);
            alert("Error saat mengirim data");
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default">New User</Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Create New User</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    <div>
                        <Label>Nama</Label>
                        <Input name="name" placeholder="Nama Lengkap" onChange={handleChange} />
                    </div>

                    <div>
                        <Label>Email</Label>
                        <Input name="email" type="email" placeholder="Email" onChange={handleChange} />
                    </div>

                    <div>
                        <Label>No Telepon</Label>
                        <Input name="phone" placeholder="Nomor HP" onChange={handleChange} />
                    </div>

                    <div>
                        <Label>Role</Label>
                        <Select
                            value={formData.role}
                            onValueChange={(val) => setFormData((prev) => ({ ...prev, role: val }))}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Pilih Role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">Admin</SelectItem>
                                <SelectItem value="2">User</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {formData.role === "1" && (
                        <div>
                            <Label>Password</Label>
                            <Input
                                name="password"
                                placeholder="Password (Admin Only)"
                                type="password"
                                onChange={handleChange}
                            />
                        </div>
                    )}

                    <div>
                        <Label>Foto Profil</Label>
                        <Input type="file" accept="image/*" onChange={(e) => setProfileFile(e.target.files?.[0] || null)} />
                    </div>
                </div>

                <DialogFooter className="mt-6">
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button variant="default" onClick={handleSubmit}>
                        Create
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
