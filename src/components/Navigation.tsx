import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-6 px-4 sm:px-8 flex justify-between items-center bg-bg/90 backdrop-blur-[20px] border-b border-border/30">
      <Link
        href="/"
        className="font-bold text-lg sm:text-xl text-text font-display tracking-wide"
      >
        alwin<span className="text-accent">.</span>dev
      </Link>
      <div className="flex items-center gap-4 sm:gap-8">
        <ul className="hidden sm:flex gap-4 sm:gap-8 list-none">
          <li>
            <Link
              href="/"
              className="font-semibold text-sm text-text2 hover:text-accent transition-all duration-300 hover:scale-105"
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#about"
              className="font-semibold text-sm text-text2 hover:text-accent transition-all duration-300 hover:scale-105"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="font-semibold text-sm text-text2 hover:text-accent transition-all duration-300 hover:scale-105"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#roadmap"
              className="font-semibold text-sm text-text2 hover:text-accent transition-all duration-300 hover:scale-105"
            >
              Roadmap
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-semibold text-sm text-text2 hover:text-accent transition-all duration-300 hover:scale-105"
            >
              Contact
            </a>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}
