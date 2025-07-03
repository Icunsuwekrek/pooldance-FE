import UserNavbar from "@/components/layout/user/userNavbar"

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <UserNavbar />
      <main className="p-6">{children}</main>
    </>
  )
}