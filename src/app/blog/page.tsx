import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Blog() {
  return (
    <div className="relative">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <Navigation />
      <main className="min-h-screen pt-32 px-8 max-w-5xl mx-auto">
        <div className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
          // blog
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-text mb-8 leading-tight">
          Blog Posts
        </h1>
        <p className="text-lg text-text2 mb-12 font-light">
          Thoughts on software development, testing, and technology. Coming
          soon...
        </p>
        <div className="text-center py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-accent2 hover:-translate-y-0.5 transition-all duration-200"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
