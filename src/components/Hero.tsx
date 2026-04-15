import React from "react";
import heroData from "@/data/hero.json";

const SVGIcons: { [key: string]: React.ReactNode } = {
  arrow: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  ),
  email: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 8L10.89 4.26a2 2 0 012.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  file: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  ),
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main heading with new typography approach */}
        <div className="mb-4 sm:mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-text mb-3 leading-none tracking-tight">
            {heroData.name}
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        </div>

        {/* Role description with new styling */}
        <div className="mb-8 sm:mb-10">
          <p className="text-2xl md:text-3xl text-text2 mb-3 font-light">
            {heroData.subtitle}
          </p>
          <p className="text-xl md:text-2xl text-accent font-medium">
            {heroData.description}
          </p>
        </div>

        {/* Stats with new card design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto mb-6 sm:mb-8">
          {heroData.stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-surface border border-border rounded-2xl p-6 hover:border-accent/50 transition-colors"
            >
              <div className="text-3xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-text2 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA buttons with new design */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          {heroData.cta.map((button) => {
            // Handle basePath for static assets in production vs development
            const href =
              button.href && button.href.startsWith("/assets/")
                ? typeof window !== "undefined" &&
                  window.location.pathname.startsWith("/myportfolio")
                  ? `/myportfolio${button.href}`
                  : button.href
                : button.href;

            return (
              <a
                key={button.id}
                href={href}
                target={button.target || undefined}
                rel={
                  button.target === "_blank" ? "noopener noreferrer" : undefined
                }
                className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  button.variant === "outline"
                    ? "border-2 border-accent text-accent hover:bg-accent hover:text-white"
                    : "bg-accent text-white hover:bg-accent2 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                }`}
              >
                {button.text}
                {SVGIcons[button.icon]}
              </a>
            );
          })}
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-text3 mx-auto"
          >
            <path d="M7 13L12 18L17 13M7 6L12 11L17 6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
