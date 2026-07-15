import { Profile } from "@/components/Profile";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50/50 selection:bg-gray-200">
      <header className="py-12 text-center border-b border-gray-100 bg-white">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          My Portfolio
        </h1>
        <p className="mt-2 text-sm text-gray-500 font-medium">Welcome to my space</p>
      </header>

      <div className="py-10">
        <Profile />
      </div>

      <footer className="py-8 text-center text-sm text-gray-400 border-t border-gray-100 bg-white mt-auto">
        <p>© {new Date().getFullYear()} My Portfolio</p>
      </footer>
    </main>
  );
}
