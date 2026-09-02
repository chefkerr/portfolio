import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80svh] flex flex-col items-center justify-center px-6 text-center">
      <span className="section-label">Error 404</span>
      <h1 className="mt-4 font-display text-6xl md:text-8xl font-medium text-gradient">
        Lost in vector space
      </h1>
      <p className="mt-5 text-mist max-w-md">
        This page could not be found in the knowledge base. Return to the home page to continue exploring.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-signal text-white px-6 py-3.5 text-sm font-medium hover:bg-signal2 transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
