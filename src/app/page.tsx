import Hero from "./dashboard/user/hero";
import Profile from "./dashboard/user/profile";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Profile />
    </main>
  );
}
