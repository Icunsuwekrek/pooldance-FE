"use client";

import { useState } from "react";
import CreateUserModal from "./components/CreateUserModal";
import UserFormModal from "./components/UpdateUserModal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function UserPage() {
    const [search, setSearch] = useState("");
    const [selectedUser, setSelectedUser] = useState<any | null>(null);
    const [openEdit, setOpenEdit] = useState(false);

    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Icun",
            role: "User",
            email: "Icun@gmail.com",
            password: "**********",
            phone: "+62 12345678902",
        },
        {
            id: 2,
            name: "Jendra",
            role: "Admin",
            email: "Jendra@gmail.com",
            password: "**********",
            phone: "+62 12345678902",
        },
        {
            id: 3,
            name: "Rafli",
            role: "User",
            email: "Rafli@gmail.com",
            password: "**********",
            phone: "+62 12345678902",
        },
    ]);

    const today = new Date().toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase())
    );

    const handleDelete = (id: number) => {
        const confirmed = confirm("Apakah Anda yakin ingin menghapus user ini?");
        if (confirmed) {
            setUsers(users.filter((user) => user.id !== id));
        }
    };

    const handleUpdateSuccess = (updatedUser: any) => {
        setUsers((prev) =>
            prev.map((user) => (user.id === updatedUser.id ? updatedUser : user))
        );
        setSelectedUser(null);
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-800">User</h1>
                <p className="text-sm text-gray-500">{today}</p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
                <Input
                    placeholder="Search for user"
                    className="max-w-sm"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="flex items-center gap-3">
                    <CreateUserModal />
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">User</h2>

                {filteredUsers.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">No users found</div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse rounded-md overflow-hidden">
                            <thead>
                                <tr className="bg-purple-100 text-left text-sm text-gray-700">
                                    <th className="py-2 px-4">No</th>
                                    <th className="py-2 px-4">Name</th>
                                    <th className="py-2 px-4">Role</th>
                                    <th className="py-2 px-4">Email</th>
                                    <th className="py-2 px-4">Password</th>
                                    <th className="py-2 px-4">Phone</th>
                                    <th className="py-2 px-4">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map((user, idx) => (
                                    <tr key={user.id} className="border-t text-sm">
                                        <td className="py-2 px-4">{idx + 1}.</td>
                                        <td className="py-2 px-4">{user.name}</td>
                                        <td className="py-2 px-4">{user.role}</td>
                                        <td className="py-2 px-4">{user.email}</td>
                                        <td className="py-2 px-4">{user.password}</td>
                                        <td className="py-2 px-4">{user.phone}</td>
                                        <td className="py-2 px-4 flex gap-2">
                                            <Button
                                                size="sm"
                                                className="bg-emerald-400 hover:bg-emerald-500 text-white"
                                                onClick={() => {
                                                    setSelectedUser(user);
                                                    setOpenEdit(true);
                                                }}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                size="sm"
                                                className="bg-red-500 hover:bg-red-600 text-white"
                                                onClick={() => handleDelete(user.id)}
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

            {selectedUser && (
                <UserFormModal
                    user={selectedUser}
                    open={openEdit}
                    onOpenChange={(val) => {
                        setOpenEdit(val);
                        if (!val) setSelectedUser(null);
                    }}
                    onSuccess={handleUpdateSuccess}
                />
            )}

            {filteredUsers.length > 0 && (
                <div className="flex justify-end mt-6 space-x-2 text-sm">
                    <button className="px-3 py-1 text-gray-500 rounded hover:bg-gray-100">
                        Previous
                    </button>
                    <button className="px-3 py-1 text-white bg-purple-600 rounded">
                        1
                    </button>
                    <button className="px-3 py-1 text-gray-500 rounded hover:bg-gray-100">
                        2
                    </button>
                    <button className="px-3 py-1 text-gray-500 rounded hover:bg-gray-100">
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}
