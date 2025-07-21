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
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";

type UserFormModalProps = {
    user?: {
        id: number;
        name: string;
        email: string;
        phone: string;
        password: string;
        role: string;
    };
    open: boolean;
    onOpenChange: (val: boolean) => void;
    onSuccess?: (updatedUser?: any) => void;
};

export default function UserFormModal({
    user,
    open,
    onOpenChange,
    onSuccess,
}: UserFormModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "2",
    });

    const [profileFile, setProfileFile] = useState<File | null>(null);

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                email: user.email,
                phone: user.phone,
                password: "",
                role: user.role,
            });
        } else {
            setFormData({
                name: "",
                email: "",
                phone: "",
                password: "",
                role: "2",
            });
        }
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async () => {
        const body = new FormData();
        Object.entries(formData).forEach(([key, val]) => {
            if (val !== "") body.append(key, val);
        });
        if (profileFile) body.append("profile", profileFile);

        try {
            const res = await fetch(user ? `/api/user/${user.id}` : "/api/user", {
                method: user ? "PUT" : "POST",
                body,
            });

            const result = await res.json();
            if (res.ok) {
                alert(user ? "User berhasil diupdate" : "User berhasil dibuat");
                onOpenChange(false);
                if (onSuccess) onSuccess(result);
            } else {
                alert(result?.error || "Gagal memproses user");
            }
        } catch (err) {
            console.error(err);
            alert("Error saat mengirim data");
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>{user ? "Edit User" : "Create New User"}</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    <div>
                        <Label>Nama</Label>
                        <Input
                            name="name"
                            value={formData.name}
                            placeholder="Nama Lengkap"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <Label>Email</Label>
                        <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            placeholder="Email"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <Label>No Telepon</Label>
                        <Input
                            name="phone"
                            value={formData.phone}
                            placeholder="Nomor HP"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <Label>Role</Label>
                        <Select
                            value={formData.role}
                            onValueChange={(val) =>
                                setFormData((prev) => ({ ...prev, role: val }))
                            }
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
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    )}

                    <div>
                        <Label>Foto Profil</Label>
                        <Input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                                setProfileFile(e.target.files?.[0] || null)
                            }
                        />
                    </div>
                </div>

                <DialogFooter className="mt-6 flex justify-between">
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button variant="default" onClick={handleSubmit}>
                        {user ? "Update" : "Create"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
