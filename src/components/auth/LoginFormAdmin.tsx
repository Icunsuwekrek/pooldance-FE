"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { login } from "@/services/AuthService";

export default function LoginFormAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Email dan password wajib diisi");
      return;
    }

    try {
      setLoading(true);
      const { token, role } = await login(email, password);

      localStorage.setItem("token", token);

      if (role === "admin") {
        router.push("/dashboard/admin");
      } else {
        alert("Bukan akun admin");
      }
    } catch (error: any) {
      alert(error.response?.data?.error || "Login gagal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-200">
      <div className="flex flex-col md:flex-row w-full max-w-5xl min-h-[600px] rounded-xl overflow-hidden shadow-lg bg-white">
        
        {/* Gambar */}
        <div className="relative w-full h-40 md:w-1/2 md:h-auto">
          <Image
            src="/images/loginuser2.png"
            alt="Admin Art"
            fill
            className="object-cover"
          />
        </div>

        {/* Form */}
        <div className="flex flex-col justify-center w-full p-10 md:w-1/2">
          <div className="w-full max-w-md mx-auto space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Welcome Back 👋</h2>
              <p className="text-sm text-muted-foreground">
                Please enter your admin credentials to sign in.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="admin@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Password</label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex justify-between text-sm">
                <Link href="#" className="text-purple-600 hover:underline">
                  Forgot Password?
                </Link>
              </div>

              <Button
                className="w-full text-white bg-purple-600 hover:bg-purple-700"
                onClick={handleLogin}
                disabled={loading}
              >
                {loading ? "Signing In..." : "Sign In"}
              </Button>

              {/* Social login */}
              <div className="flex items-center gap-2 my-4 text-sm text-muted-foreground">
                <div className="flex-grow border-t" />
                or continue with
                <div className="flex-grow border-t" />
              </div>

              <div className="flex flex-col gap-2">
                <Button variant="outline" className="w-full">Sign in with Google</Button>
                <Button variant="outline" className="w-full">Sign in with Facebook</Button>
              </div>

              <p className="mt-4 text-xs text-center text-muted-foreground">
                Don’t have an account?{" "}
                <Link href="#" className="text-blue-500 hover:underline">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
