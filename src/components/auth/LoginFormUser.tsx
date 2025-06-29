import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export function LoginFormUser() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-300 px-4">
      <div className="flex w-full max-w-5xl min-h-[600px] rounded-lg overflow-hidden shadow-lg bg-white">
        
        {/* Kiri - Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center h-full z-15 relative">
          <h2 className="text-2xl font-bold text-center mb-2">Welcome Back!</h2>
          <h3 className="text-xl font-semibold text-center mb-6">Login</h3>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email / User name</label>
              <Input id="email" placeholder="example@mail.com" />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-sm">Remember for 30 days</label>
              </div>
              <Link href="#" className="text-purple-600 hover:underline">Forgot Password?</Link>
            </div>

            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Login
            </Button>
          </form>
        </div>

        {/* Kanan - Gambar */}
        <div
          className="hidden md:block md:w-1/2 relative">
          <div
            className="absolute inset-0 bg-no-repeat bg-cover rounded-r-lg"
             style={{
          backgroundImage: "url('/images/loginuser2.png')",
          backgroundPosition: "30% center", // geser ke kiri
          }}
        />
        </div>
      </div>
    </div>
  )
}
