"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function LoginFormAdmin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
      {/* Card container */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl min-h-[600px] rounded-xl overflow-hidden shadow-lg bg-white">
        
        {/* Gambar di atas saat mobile, kanan saat desktop */}
        <div className="w-full md:w-1/2 relative h-40 md:h-auto">
          <Image
            src="/images/loginuser2.png"
            alt="Admin Art"
            fill
            className="object-cover"
          />
        </div>

        {/* Form section */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
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
                <Input type="email" placeholder="admin@mail.com" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Password</label>
                <Input type="password" placeholder="••••••••" />
              </div>

              <div className="flex justify-between text-sm">
                <Link href="#" className="text-purple-600 hover:underline">
                  Forgot Password?
                </Link>
              </div>

              <Button className="w-full bg-purple-600 text-white hover:bg-purple-700">
                Sign In
              </Button>

              {/* Social login */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground my-4">
                <div className="flex-grow border-t" />
                or continue with
                <div className="flex-grow border-t" />
              </div>

              <div className="flex flex-col gap-2">
                <Button variant="outline" className="w-full">Sign in with Google</Button>
                <Button variant="outline" className="w-full">Sign in with Facebook</Button>
              </div>

              <p className="text-xs text-center text-muted-foreground mt-4">
                Don’t have an account?{" "}
                <Link href="#" className="text-blue-500 hover:underline">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
