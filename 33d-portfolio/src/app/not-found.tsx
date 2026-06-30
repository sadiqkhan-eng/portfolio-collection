import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-bold text-white mb-4">404</h1>
      <p className="text-xl text-white/50 mb-8">
        Page not found. The universe expanded beyond this page.
      </p>
      <Link
        href="/"
        className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
      >
        Go Back Home
      </Link>
    </div>
  );
}
