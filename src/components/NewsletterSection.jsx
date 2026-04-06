import { useState } from "react";
import DecorativeBlob from "./ui/DecorativeBlob.jsx";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section
      id="newsletter"
      className="relative overflow-hidden py-16 sm:py-20"
      style={{ backgroundColor: "#D4E8D8" }}
    >
      <DecorativeBlob
        variant="purple"
        className="-right-8 -top-8 h-28 w-28 text-violet-500/90 sm:h-36 sm:w-36"
      />

      <div className="mx-auto max-w-3xl px-4 text-center motion-fade-up sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-black sm:text-5xl">
          Subscribe to our newsletter
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-black/70 sm:text-base">
          Get practical updates, fresh insights, and actionable ideas from our
          team delivered straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex w-full max-w-xl flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            className="h-11 w-full rounded-lg border border-black/15 bg-white px-4 text-sm text-black outline-none transition-all duration-300 focus:border-black/35 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.18)]"
          />

          <button
            type="submit"
            className="h-11 rounded-lg bg-black px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-85"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
}
